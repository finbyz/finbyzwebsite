#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Components that need CSS files created
const componentsNeedingCSS = [
  'success-snapshots',
  'client-success-stories',
  'hero_section_without_button'
];

// Components with existing CSS files that need inline style removal
const componentsWithExistingCSS = [
  'benefits',
  'team-expertise',
  'business-slider',
  'innovation-lab',
  'awards-recognition',
  'global-presence',
  'differentiators',
  'hero',
  'testimonials',
  'contact-info',
  'resource-center',
  'process-workflow'
];

// Common CSS patterns to add to existing files
const commonCSSPatterns = `
/* Common Animation Classes */
.fade-in-up {
  animation: fadeInUp 0.7s ease-out;
}

.fade-out {
  opacity: 0;
  transform: translateY(2.5rem);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(2.5rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Common Transition Delay Classes */
.transition-delay-0 { transition-delay: 0s; }
.transition-delay-1 { transition-delay: 0.1s; }
.transition-delay-2 { transition-delay: 0.2s; }
.transition-delay-3 { transition-delay: 0.3s; }
.transition-delay-4 { transition-delay: 0.4s; }
.transition-delay-5 { transition-delay: 0.5s; }
.transition-delay-6 { transition-delay: 0.6s; }
.transition-delay-7 { transition-delay: 0.7s; }
.transition-delay-8 { transition-delay: 0.8s; }

/* Common Icon Background Colors */
.icon-bg-blue { background: #EAF1F8; }
.icon-bg-orange { background: #FFF4E5; }
.icon-bg-green { background: #E8F8F2; }
.icon-bg-purple { background: #F3EAF8; }
.icon-bg-red { background: #FEE2E2; }
.icon-bg-yellow { background: #FEF3C7; }
.icon-bg-teal { background: #CCFBF1; }
.icon-bg-indigo { background: #E0E7FF; }

/* Common Icon Colors */
.icon-color-blue { color: #1A5276; }
.icon-color-orange { color: #FF8C00; }
.icon-color-green { color: #27AE60; }
.icon-color-purple { color: #8E44AD; }
.icon-color-red { color: #E74C3C; }
.icon-color-yellow { color: #F39C12; }
.icon-color-teal { color: #0D9488; }
.icon-color-indigo { color: #6366F1; }
`;

function createCSSFile(componentName) {
  const cssContent = `/* ${componentName} Section Styles */
${componentName}-section {
  padding: 5rem 0;
  background: white;
  position: relative;
  overflow: hidden;
}

${componentName}-container {
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .${componentName}-container {
    padding: 0 1.5rem;
  }
}

@media (min-width: 1024px) {
  .${componentName}-container {
    padding: 0 2rem;
  }
}

/* Header */
.${componentName}-header {
  text-align: center;
  margin-bottom: 4rem;
  transition: all 1s;
}

.${componentName}-title {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1e293b;
  line-height: 1.2;
}

@media (min-width: 768px) {
  .${componentName}-title {
    font-size: 3rem;
  }
}

.${componentName}-subtitle {
  font-size: 1.25rem;
  color: #64748b;
  max-width: 48rem;
  margin: 0 auto;
  line-height: 1.6;
}

${commonCSSPatterns}
`;

  const cssPath = path.join(__dirname, 'src', 'styles', 'components', `${componentName}.css`);
  fs.writeFileSync(cssPath, cssContent);
  console.log(`Created CSS file: ${cssPath}`);
}

function updateComponentFile(componentName) {
  const componentPath = path.join(__dirname, 'src', 'components', 'sections', `${componentName}.tsx`);
  
  if (!fs.existsSync(componentPath)) {
    console.log(`Component file not found: ${componentPath}`);
    return;
  }

  let content = fs.readFileSync(componentPath, 'utf8');
  
  // Add CSS import if not present
  if (!content.includes(`@/styles/components/${componentName}.css`)) {
    const importMatch = content.match(/(import.*from.*["']react["']\s*;?\s*)/);
    if (importMatch) {
      content = content.replace(
        importMatch[1],
        `${importMatch[1]}\nimport "@/styles/components/${componentName}.css";\n`
      );
    }
  }

  // Replace common inline styles with CSS classes
  content = content.replace(
    /style=\{\{\s*transitionDelay:\s*inView\s*\?\s*['"]0\.8s['"]\s*:\s*['"]0s['"]\s*\}\}/g,
    'className="transition-delay-8"'
  );

  content = content.replace(
    /style=\{\{\s*transitionDelay:\s*inView\s*\?\s*['"]0\.6s['"]\s*:\s*['"]0s['"]\s*\}\}/g,
    'className="transition-delay-6"'
  );

  content = content.replace(
    /style=\{\{\s*background:\s*([^}]+)\.iconBg\s*\}\}/g,
    'className="icon-bg-blue"'
  );

  content = content.replace(
    /style=\{\{\s*color:\s*([^}]+)\.iconColor\s*\}\}/g,
    'className="icon-color-blue"'
  );

  fs.writeFileSync(componentPath, content);
  console.log(`Updated component file: ${componentPath}`);
}

// Main execution
console.log('Starting inline styles to CSS classes conversion...\n');

// Create CSS files for components that need them
componentsNeedingCSS.forEach(component => {
  console.log(`Creating CSS file for ${component}...`);
  createCSSFile(component);
});

// Update components with existing CSS files
componentsWithExistingCSS.forEach(component => {
  console.log(`Updating component ${component}...`);
  updateComponentFile(component);
});

console.log('\nConversion completed!');
console.log('\nNext steps:');
console.log('1. Review the generated CSS files');
console.log('2. Manually update specific inline styles that couldn\'t be automated');
console.log('3. Test components to ensure functionality is preserved');
console.log('4. Update component-specific CSS classes as needed');
