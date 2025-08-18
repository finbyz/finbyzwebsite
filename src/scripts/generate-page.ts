#!/usr/bin/env node

import { assemblePageFromJSON, validatePageJSON, generateSamplePageData } from '../utils/page-assembler';
import { PageData } from '../types/section-data';
import fs from 'fs';
import path from 'path';

// ============================================================================
// CLI PAGE GENERATOR
// ============================================================================

interface GeneratePageOptions {
  input?: string;
  output?: string;
  name?: string;
  sample?: boolean;
  validate?: boolean;
  help?: boolean;
}

/**
 * CLI Page Generator
 * Generates pages from JSON data using the page assembler
 */
class CLIPageGenerator {
  private defaultOutputPath = 'src/pages/generated';

  /**
   * Main CLI entry point
   */
  async run(): Promise<void> {
    try {
      const options = this.parseArguments();
      
      if (options.help) {
        this.showHelp();
        return;
      }

      if (options.sample) {
        await this.generateSamplePage();
        return;
      }

      if (options.validate) {
        await this.validateJSONFile(options.input);
        return;
      }

      await this.generatePage(options);
    } catch (error) {
      console.error('❌ Error:', error instanceof Error ? error.message : 'Unknown error');
      process.exit(1);
    }
  }

  /**
   * Parse command line arguments
   */
  private parseArguments(): GeneratePageOptions {
    const args = process.argv.slice(2);
    const options: GeneratePageOptions = {};

    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      
      switch (arg) {
        case '--input':
        case '-i':
          options.input = args[++i];
          break;
        case '--output':
        case '-o':
          options.output = args[++i];
          break;
        case '--name':
        case '-n':
          options.name = args[++i];
          break;
        case '--sample':
        case '-s':
          options.sample = true;
          break;
        case '--validate':
        case '-v':
          options.validate = true;
          break;
        case '--help':
        case '-h':
          options.help = true;
          break;
        default:
          if (!options.input) {
            options.input = arg;
          }
      }
    }

    return options;
  }

  /**
   * Show help information
   */
  private showHelp(): void {
    console.log(`
🚀 Page Generator CLI

Usage:
  npm run generate-page [options]
  npx tsx src/scripts/generate-page.ts [options]

Options:
  -i, --input <file>     Input JSON file path
  -o, --output <dir>     Output directory (default: src/pages/generated)
  -n, --name <name>      Page name (default: derived from input file)
  -s, --sample          Generate a sample page
  -v, --validate        Validate JSON file only
  -h, --help            Show this help message

Examples:
  # Generate page from JSON file
  npm run generate-page --input data/landing-page.json --name landing

  # Generate sample page
  npm run generate-page --sample --name sample

  # Validate JSON file
  npm run generate-page --validate --input data/page.json

  # Generate with custom output directory
  npm run generate-page --input data/page.json --output src/pages/custom
`);
  }

  /**
   * Generate a page from JSON data
   */
  private async generatePage(options: GeneratePageOptions): Promise<void> {
    if (!options.input) {
      throw new Error('Input file is required. Use --input <file> or --sample');
    }

    console.log('📖 Reading JSON file...');
    const jsonData = this.readJSONFile(options.input);
    
    console.log('🔍 Validating JSON structure...');
    const validation = validatePageJSON(jsonData);
    
    if (!validation.isValid) {
      console.error('❌ JSON validation failed:');
      validation.errors.forEach(error => console.error(`   - ${error}`));
      throw new Error('Invalid JSON structure');
    }

    console.log('✅ JSON validation passed');

    const pageName = options.name || this.derivePageName(options.input);
    const outputPath = options.output || this.defaultOutputPath;

    console.log(`🏗️  Generating page: ${pageName}`);
    console.log(`📁 Output directory: ${outputPath}`);

    const result = await assemblePageFromJSON(jsonData as PageData, pageName, {
      outputPath,
      generateFiles: true
    });

    // Write the generated page
    const pageFileName = `${pageName}.tsx`;
    const pagePath = path.join(outputPath, pageFileName);
    
    this.ensureDirectoryExists(outputPath);
    fs.writeFileSync(pagePath, result.pageContent, 'utf8');

    console.log('✅ Page generated successfully!');
    console.log(`📄 Page file: ${pagePath}`);
    console.log(`📊 Sections: ${result.sections.length}`);
    console.log(`🏷️  Metadata: ${result.metadata.title}`);
  }

  /**
   * Generate a sample page
   */
  private async generateSamplePage(): Promise<void> {
    const options = this.parseArguments();
    const pageName = options.name || 'sample';
    const outputPath = options.output || this.defaultOutputPath;

    console.log(`🏗️  Generating sample page: ${pageName}`);
    console.log(`📁 Output directory: ${outputPath}`);

    const sampleData = generateSamplePageData();
    
    const result = await assemblePageFromJSON(sampleData, pageName, {
      outputPath,
      generateFiles: true
    });

    // Write the generated page
    const pageFileName = `${pageName}.tsx`;
    const pagePath = path.join(outputPath, pageFileName);
    
    this.ensureDirectoryExists(outputPath);
    fs.writeFileSync(pagePath, result.pageContent, 'utf8');

    // Write sample JSON file
    const sampleJsonPath = path.join(outputPath, `${pageName}-data.json`);
    fs.writeFileSync(sampleJsonPath, JSON.stringify(sampleData, null, 2), 'utf8');

    console.log('✅ Sample page generated successfully!');
    console.log(`📄 Page file: ${pagePath}`);
    console.log(`📄 Sample JSON: ${sampleJsonPath}`);
    console.log(`📊 Sections: ${result.sections.length}`);
  }

  /**
   * Validate JSON file
   */
  private async validateJSONFile(inputFile?: string): Promise<void> {
    if (!inputFile) {
      throw new Error('Input file is required for validation. Use --input <file>');
    }

    console.log('📖 Reading JSON file...');
    const jsonData = this.readJSONFile(inputFile);
    
    console.log('🔍 Validating JSON structure...');
    const validation = validatePageJSON(jsonData);
    
    if (validation.isValid) {
      console.log('✅ JSON validation passed');
      console.log(`📊 Sections found: ${jsonData.sections?.length || 0}`);
      console.log(`🏷️  Page title: ${jsonData.metadata?.title || 'N/A'}`);
    } else {
      console.error('❌ JSON validation failed:');
      validation.errors.forEach(error => console.error(`   - ${error}`));
      process.exit(1);
    }
  }

  /**
   * Read and parse JSON file
   */
  private readJSONFile(filePath: string): any {
    try {
      if (!fs.existsSync(filePath)) {
        throw new Error(`File not found: ${filePath}`);
      }

      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
    } catch (error) {
      if (error instanceof SyntaxError) {
        throw new Error(`Invalid JSON format in ${filePath}: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Derive page name from input file
   */
  private derivePageName(inputFile: string): string {
    const fileName = path.basename(inputFile, path.extname(inputFile));
    return fileName.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
  }

  /**
   * Ensure directory exists
   */
  private ensureDirectoryExists(dirPath: string): void {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  }
}

// ============================================================================
// CLI ENTRY POINT
// ============================================================================

// Run the CLI if this file is executed directly
if (require.main === module) {
  const generator = new CLIPageGenerator();
  generator.run().catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  });
}

export { CLIPageGenerator };
