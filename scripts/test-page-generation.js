#!/usr/bin/env node

/**
 * Test Script for Page Generation API
 * 
 * This script demonstrates how to use the page generation API
 * to create dynamic pages with different section combinations.
 */

const fs = require('fs');
const path = require('path');

// Configuration
const API_BASE_URL = 'http://localhost:3000';
const API_ENDPOINT = '/api/generate-page';

// Test data for different page types
const testPages = [
  {
    name: 'simple-landing',
    description: 'Simple landing page with hero and CTA',
    data: {
      pageName: 'simple-landing',
      content: {
        metadata: {
          title: 'Simple Landing Page',
          description: 'A clean and simple landing page example',
          keywords: ['landing page', 'simple', 'example']
        },
        sections: [
          {
            type: 'hero',
            data: {
              title: 'Welcome to Our Platform',
              subtitle: 'Simple, powerful, and effective',
              description: 'Get started with our amazing platform today',
              primaryButton: {
                text: 'Get Started',
                url: '/signup',
                icon: 'ArrowRight'
              },
              secondaryButton: {
                text: 'Learn More',
                url: '/about',
                icon: 'Info'
              },
              image: {
                src: '/images/hero-simple.jpg',
                alt: 'Simple hero image'
              }
            }
          },
          {
            type: 'cta',
            data: {
              title: 'Ready to Get Started?',
              subtitle: 'Join thousands of satisfied customers',
              description: 'Don\'t wait any longer. Start your journey today.',
              primaryButton: {
                text: 'Start Now',
                url: '/signup',
                icon: 'ArrowRight',
                variant: 'primary'
              }
            }
          }
        ]
      }
    }
  },
  {
    name: 'business-solutions',
    description: 'Business solutions page with multiple sections',
    data: {
      pageName: 'business-solutions',
      content: {
        metadata: {
          title: 'Business Solutions',
          description: 'Comprehensive business solutions for modern enterprises',
          keywords: ['business', 'solutions', 'enterprise', 'technology']
        },
        sections: [
          {
            type: 'hero',
            data: {
              title: 'Transform Your Business',
              subtitle: 'Next-generation business solutions',
              description: 'Empower your business with cutting-edge technology and innovative solutions',
              primaryButton: {
                text: 'Schedule Demo',
                url: '/demo',
                icon: 'Calendar'
              },
              secondaryButton: {
                text: 'View Case Studies',
                url: '/case-studies',
                icon: 'FileText'
              },
              image: {
                src: '/images/business-hero.jpg',
                alt: 'Business transformation'
              }
            }
          },
          {
            type: 'services',
            data: {
              title: 'Our Solutions',
              subtitle: 'Comprehensive tools for growth',
              services: [
                {
                  title: 'Digital Transformation',
                  description: 'Modernize your business processes',
                  icon: 'Zap',
                  iconColor: '#1A5276',
                  iconBg: '#EAF1F8',
                  borderColor: '#1A5276',
                  bgColor: '#f8fafc',
                  capabilities: [
                    {
                      title: 'Key Benefits',
                      items: [
                        { name: 'Efficiency', color: '#1A5276' },
                        { name: 'Scalability', color: '#FF8C00' },
                        { name: 'Innovation', color: '#27AE60' }
                      ]
                    }
                  ]
                }
              ]
            }
          },
          {
            type: 'cta',
            data: {
              title: 'Ready to Transform?',
              subtitle: 'Join the future of business',
              description: 'Contact us today to discuss your business needs',
              primaryButton: {
                text: 'Contact Sales',
                url: '/contact',
                icon: 'Phone',
                variant: 'primary'
              }
            }
          }
        ]
      }
    }
  },
  {
    name: 'minimal-page',
    description: 'Minimal page with just hero and CTA',
    data: {
      pageName: 'minimal-page',
      content: {
        metadata: {
          title: 'Minimal Page',
          description: 'A minimal page example',
          keywords: ['minimal', 'simple', 'clean']
        },
        sections: [
          {
            type: 'hero',
            data: {
              title: 'Minimal Design',
              subtitle: 'Less is more',
              description: 'Clean and simple design principles',
              primaryButton: {
                text: 'Learn More',
                url: '/about',
                icon: 'ArrowRight'
              },
              image: {
                src: '/images/minimal.jpg',
                alt: 'Minimal design'
              }
            }
          },
          {
            type: 'cta',
            data: {
              title: 'Get Started',
              subtitle: 'Simple and effective',
              description: 'Ready to begin?',
              primaryButton: {
                text: 'Start Now',
                url: '/start',
                icon: 'ArrowRight',
                variant: 'primary'
              }
            }
          }
        ]
      }
    }
  }
];

/**
 * Makes a POST request to the API
 */
async function makeApiRequest(data) {
  try {
    const response = await fetch(`${API_BASE_URL}${API_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} - ${result.error || 'Unknown error'}`);
    }

    return result;
  } catch (error) {
    throw new Error(`Request failed: ${error.message}`);
  }
}

/**
 * Tests a single page generation
 */
async function testPageGeneration(pageInfo) {
  console.log(`\n🧪 Testing: ${pageInfo.description}`);
  console.log(`   Page Name: ${pageInfo.data.pageName}`);
  console.log(`   Sections: ${pageInfo.data.content.sections.map(s => s.type).join(', ')}`);
  
  try {
    const result = await makeApiRequest(pageInfo.data);
    
    console.log(`   ✅ Success! Page generated successfully`);
    console.log(`   📍 URL: ${result.data.pageUrl}`);
    console.log(`   📊 Sections: ${result.data.sectionsCount}`);
    console.log(`   📁 Files: ${result.data.generatedFiles.length} generated`);
    
    return { success: true, result };
  } catch (error) {
    console.log(`   ❌ Failed: ${error.message}`);
    return { success: false, error: error.message };
  }
}

/**
 * Main test function
 */
async function runTests() {
  console.log('🚀 Starting Page Generation API Tests');
  console.log('=====================================');
  console.log(`API Base URL: ${API_BASE_URL}`);
  console.log(`API Endpoint: ${API_ENDPOINT}`);
  console.log(`Total Tests: ${testPages.length}`);
  
  const results = [];
  
  for (const pageInfo of testPages) {
    const result = await testPageGeneration(pageInfo);
    results.push({
      name: pageInfo.name,
      description: pageInfo.description,
      ...result
    });
  }
  
  // Summary
  console.log('\n📊 Test Results Summary');
  console.log('========================');
  
  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;
  
  console.log(`✅ Successful: ${successful}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`📈 Success Rate: ${((successful / results.length) * 100).toFixed(1)}%`);
  
  if (failed > 0) {
    console.log('\n❌ Failed Tests:');
    results.filter(r => !r.success).forEach(r => {
      console.log(`   - ${r.name}: ${r.error}`);
    });
  }
  
  if (successful > 0) {
    console.log('\n✅ Successful Tests:');
    results.filter(r => r.success).forEach(r => {
      console.log(`   - ${r.name}: ${r.result.data.pageUrl}`);
    });
    
    console.log('\n🌐 Access your generated pages at:');
    results.filter(r => r.success).forEach(r => {
      console.log(`   ${r.result.data.pageUrl}`);
    });
  }
  
  console.log('\n🎉 Test run completed!');
}

/**
 * Check if the server is running
 */
async function checkServerStatus() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/sample-page-data`);
    return response.ok;
  } catch (error) {
    return false;
  }
}

/**
 * Main execution
 */
async function main() {
  try {
    // Check if server is running
    console.log('🔍 Checking server status...');
    const serverRunning = await checkServerStatus();
    
    if (!serverRunning) {
      console.log('❌ Server is not running or not accessible');
      console.log('   Please start your Next.js development server with: npm run dev');
      console.log('   Then run this script again.');
      process.exit(1);
    }
    
    console.log('✅ Server is running and accessible');
    
    // Run tests
    await runTests();
    
  } catch (error) {
    console.error('💥 Test execution failed:', error.message);
    process.exit(1);
  }
}

// Run the main function
if (require.main === module) {
  main();
}

module.exports = {
  testPages,
  makeApiRequest,
  testPageGeneration,
  runTests
};
