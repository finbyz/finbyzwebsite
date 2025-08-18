// Template Engine for Jinja-style templating
export class TemplateEngine {
  private data: Record<string, any>;

  constructor(data: Record<string, any> = {}) {
    this.data = data;
  }

  // Render a template string with data
  render(template: string): string {
    return template.replace(/\{\{\s*([^}]+)\s*\}\}/g, (match, expression) => {
      return this.evaluateExpression(expression.trim());
    });
  }

  // Evaluate a Jinja-style expression
  private evaluateExpression(expression: string): string {
    // Handle filters like | default
    const parts = expression.split('|').map(part => part.trim());
    const variablePath = parts[0];
    const filters = parts.slice(1);

    // Get the value from the data
    let value = this.getNestedValue(this.data, variablePath);

    // Apply filters
    for (const filter of filters) {
      value = this.applyFilter(value, filter);
    }

    return value !== undefined ? String(value) : '';
  }

  // Get nested value from object using dot notation
  private getNestedValue(obj: any, path: string): any {
    return path.split('.').reduce((current, key) => {
      return current && current[key] !== undefined ? current[key] : undefined;
    }, obj);
  }

  // Apply Jinja-style filters
  private applyFilter(value: any, filter: string): any {
    const [filterName, ...args] = filter.split('(').map(part => part.replace(')', ''));
    
    switch (filterName) {
      case 'default':
        const defaultValue = args[0]?.replace(/['"]/g, '') || '';
        return value !== undefined && value !== null && value !== '' ? value : defaultValue;
      
      case 'upper':
        return typeof value === 'string' ? value.toUpperCase() : value;
      
      case 'lower':
        return typeof value === 'string' ? value.toLowerCase() : value;
      
      case 'capitalize':
        return typeof value === 'string' ? value.charAt(0).toUpperCase() + value.slice(1) : value;
      
      case 'length':
        return Array.isArray(value) ? value.length : (typeof value === 'string' ? value.length : 0);
      
      default:
        return value;
    }
  }

  // Render a JSON object with templates
  renderObject(obj: any): any {
    if (typeof obj === 'string') {
      return this.render(obj);
    }
    
    if (Array.isArray(obj)) {
      return obj.map(item => this.renderObject(item));
    }
    
    if (typeof obj === 'object' && obj !== null) {
      const result: any = {};
      for (const [key, value] of Object.entries(obj)) {
        result[key] = this.renderObject(value);
      }
      return result;
    }
    
    return obj;
  }

  // Set data for templating
  setData(data: Record<string, any>): void {
    this.data = { ...this.data, ...data };
  }

  // Get current data
  getData(): Record<string, any> {
    return this.data;
  }
}

// Helper function to create a template engine instance
export function createTemplateEngine(data: Record<string, any> = {}): TemplateEngine {
  return new TemplateEngine(data);
}

// Helper function to render a template string
export function renderTemplate(template: string, data: Record<string, any> = {}): string {
  const engine = createTemplateEngine(data);
  return engine.render(template);
}

// Helper function to render a JSON object with templates
export function renderTemplateObject(obj: any, data: Record<string, any> = {}): any {
  const engine = createTemplateEngine(data);
  return engine.renderObject(obj);
}
