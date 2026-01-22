'use client'

import Link from 'next/link';
import BlogHero from '@/components/ai_components/blog/BlogHero';
import BlogSection from '@/components/ai_components/blog/BlogSection';
import BlogSectionWithImage from '@/components/ai_components/blog/BlogSectionWithImage';
import BlogTableOfContents from '@/components/ai_components/blog/BlogTableOfContents';
import BlogContent from '@/components/ai_components/blog/BlogContent';
import BlogParagraph from '@/components/ai_components/blog/BlogParagraph';
import BlogCheckList from '@/components/ai_components/blog/BlogCheckList';

const heroProps = {
  title: 'Self-Hosting n8n in 2026: The Complete Enterprise Guide to Data Sovereignty',
  description:
    'Take full control of your workflow automation data. Learn how to deploy, secure, and maintain a self-hosted n8n instance that meets enterprise compliance requirements while delivering unlimited automation at predictable costs.',
  primaryCategory: 'AI Automation',
  tags: ['n8n', 'Self-Hosting', 'Data Sovereignty', 'Enterprise', 'DevOps'],
  author: {
    name: 'Finbyz Tech',
    title: 'AI Automation Experts',
  },
  publishDate: '2026-01-06',
  readTime: '15 min read',
};

const tocItems = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'why-self-host', title: 'Why Self-Host n8n?' },
  { id: 'deployment-options', title: 'Deployment Options' },
  { id: 'infrastructure', title: 'Infrastructure Requirements' },
  { id: 'setup-guide', title: 'Step-by-Step Setup Guide' },
  { id: 'security-compliance', title: 'Security & Compliance' },
  { id: 'maintenance', title: 'Maintenance & Monitoring' },
  { id: 'cost-analysis', title: 'Cost Analysis' },
  { id: 'when-not-to', title: 'When NOT to Self-Host' },
  { id: 'faq', title: 'Frequently Asked Questions' },
  { id: 'conclusion', title: 'Conclusion' },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <BlogHero {...heroProps} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 mx-auto w-full bg-muted/30 border-b container-custom">
        <BlogTableOfContents items={tocItems} />
        <BlogContent>
          {/* Introduction */}
          <BlogSectionWithImage
            id="introduction"
            title="Introduction: Data Sovereignty in the Automation Age"
            image={{
              src: '/images/AI_ERP.jpg',
              alt: 'Self-Hosting n8n for Enterprise',
              cover: true,
            }}
          >
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
              <h4 className="flex items-center gap-2 font-semibold text-blue-800 dark:text-blue-200 mb-1">
                <span className="text-xl">📢</span> 2026 Hosting Updates
              </h4>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                Updated for n8n 2.0! New security best practices, reliable Coolify deployment strategies, and updated cloud vs self-hosted pricing comparisons.
              </p>
              <Link
                href="/ai-automation/insights/january-2026-workflow-automation-news"
                className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
              >
                See all 2026 Workflow Automation News →
              </Link>
            </div>

            <BlogParagraph>
              In an era where data breaches make headlines daily and regulations like GDPR impose heavy penalties, enterprises are rethinking where their automation data lives. Self-hosting n8n is not just a technical choice—it is a strategic decision about data ownership, compliance, and long-term cost control.
            </BlogParagraph>
            <BlogParagraph>
              This guide provides everything you need to successfully deploy, secure, and maintain a self-hosted n8n instance in 2026. Whether you are a CTO evaluating options, a DevOps engineer planning implementation, or an IT decision-maker assessing TCO, this guide has you covered.
            </BlogParagraph>
            <BlogParagraph>
              By the end, you will understand exactly what self-hosting requires, whether it is right for your organization, and how to implement it successfully.
            </BlogParagraph>
          </BlogSectionWithImage>

          {/* Why Self-Host */}
          <BlogSection id="why-self-host" title="Why Self-Host n8n?">
            <BlogParagraph>
              Before diving into implementation, let us examine the compelling reasons enterprises choose self-hosting over cloud-based alternatives:
            </BlogParagraph>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  🔒 Complete Data Sovereignty
                </h4>
                <BlogParagraph>
                  Your workflow data, API credentials, and automation logic never leave your infrastructure. This is non-negotiable for industries handling sensitive data: healthcare (HIPAA), finance (SOX), and any EU business under GDPR.
                </BlogParagraph>
              </div>

              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  💰 Predictable, Unlimited Scaling
                </h4>
                <BlogParagraph>
                  Unlike cloud platforms that charge per execution or task, self-hosted n8n runs unlimited workflows for the cost of your server. High-volume automation becomes dramatically cheaper at scale.
                </BlogParagraph>
              </div>

              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  🔧 Full Customization Control
                </h4>
                <BlogParagraph>
                  Access the source code, create custom nodes, integrate with private APIs, and modify n8n to fit your exact requirements. Host your own LLMs for AI workflows without data leaving your network.
                </BlogParagraph>
              </div>

              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  🌐 Network Isolation
                </h4>
                <BlogParagraph>
                  Run n8n behind your firewall, in your VPC, or on air-gapped infrastructure. Connect to internal services without exposing them to the internet.
                </BlogParagraph>
              </div>
            </div>
          </BlogSection>

          {/* Deployment Options */}
          <BlogSection id="deployment-options" title="Deployment Options Compared">
            <BlogParagraph>
              n8n offers multiple deployment paths. Choose based on your team&apos;s expertise and infrastructure:
            </BlogParagraph>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="p-4 text-left font-semibold">Method</th>
                    <th className="p-4 text-left font-semibold">Best For</th>
                    <th className="p-4 text-left font-semibold">Complexity</th>
                    <th className="p-4 text-left font-semibold">Scalability</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-medium">Docker Compose</td>
                    <td className="p-4">Standard VPS deployment (Hetzner/DigitalOcean)</td>
                    <td className="p-4 text-green-600 dark:text-green-400">Low</td>
                    <td className="p-4">Single server</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-medium">Kubernetes (K8s)</td>
                    <td className="p-4">Enterprise, high availability & auto-scaling</td>
                    <td className="p-4 text-red-500">High</td>
                    <td className="p-4">Horizontal scaling (multi-node)</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-medium">Coolify (PaaS)</td>
                    <td className="p-4">Teams wanting a "Heroku-like" experience on own VPS</td>
                    <td className="p-4 text-green-600 dark:text-green-400">Very Low</td>
                    <td className="p-4">Single server + 1-click updates</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-medium">CapRover</td>
                    <td className="p-4">Simple, lightweight app management</td>
                    <td className="p-4 text-yellow-600 dark:text-yellow-400">Low</td>
                    <td className="p-4">Single server</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <BlogParagraph>
              <strong>Our recommendation for 2026:</strong>
            </BlogParagraph>
            <BlogCheckList
              items={[
                'For most teams: Use Docker Compose on a standard VPS (DigitalOcean Droplet or Hetzner Cloud). It gives you full control with minimal overhead.',
                'For ease of use: Use Coolify. It manages the Docker containers for you, provides a UI for environment variables, and handles SSL certificates automatically.',
                'For large enterprises: Kubernetes is the only choice for true high-availability (HA) setups.',
              ]}
            />
          </BlogSection>

          {/* Infrastructure Requirements */}
          <BlogSection id="infrastructure" title="Infrastructure Requirements">
            <BlogParagraph>
              Proper sizing prevents performance issues. Here are our tested recommendations for 2026:
            </BlogParagraph>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="p-4 text-left font-semibold">Workload</th>
                    <th className="p-4 text-left font-semibold">CPU</th>
                    <th className="p-4 text-left font-semibold">RAM</th>
                    <th className="p-4 text-left font-semibold">Storage</th>
                    <th className="p-4 text-left font-semibold">Est. Cost/mo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-medium">Light (100 workflows)</td>
                    <td className="p-4">2 vCPU</td>
                    <td className="p-4">4 GB</td>
                    <td className="p-4">40 GB SSD</td>
                    <td className="p-4">$20-40</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-medium">Medium (500 workflows)</td>
                    <td className="p-4">4 vCPU</td>
                    <td className="p-4">8 GB</td>
                    <td className="p-4">100 GB SSD</td>
                    <td className="p-4">$40-80</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-medium">Heavy (1000+ workflows)</td>
                    <td className="p-4">8+ vCPU</td>
                    <td className="p-4">16+ GB</td>
                    <td className="p-4">200+ GB SSD</td>
                    <td className="p-4">$100-200</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-medium">Enterprise (HA)</td>
                    <td className="p-4">16+ vCPU (cluster)</td>
                    <td className="p-4">32+ GB</td>
                    <td className="p-4">500+ GB</td>
                    <td className="p-4">$300+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <BlogParagraph>
              <strong>Database note:</strong> n8n uses SQLite by default, but for production we strongly recommend PostgreSQL for better performance, concurrent access, and easier backups.
            </BlogParagraph>
          </BlogSection>

          {/* Setup Guide */}
          <BlogSectionWithImage
            id="setup-guide"
            title="Step-by-Step Setup Guide"
            image={{
              src: '/images/316.svg',
              alt: 'n8n Docker Setup',
              width: 180,
              height: 180,
            }}
            imagePosition="right"
            imageSize="medium"
          >
            <BlogParagraph>
              Here is a production-ready Docker Compose setup for n8n with PostgreSQL:
            </BlogParagraph>
          </BlogSectionWithImage>

          <BlogSection id="setup-steps" title="">
            <div className="bg-zinc-900 text-zinc-100 p-6 rounded-lg my-4 overflow-x-auto">
              <pre className="text-sm">
{`# docker-compose.yml
version: '3.8'

services:
  n8n:
    image: n8nio/n8n:latest
    restart: always
    ports:
      - "5678:5678"
    environment:
      - N8N_HOST=\${N8N_HOST}
      - N8N_PORT=5678
      - N8N_PROTOCOL=https
      - NODE_ENV=production
      - WEBHOOK_URL=https://\${N8N_HOST}/
      - GENERIC_TIMEZONE=\${TIMEZONE}
      - DB_TYPE=postgresdb
      - DB_POSTGRESDB_HOST=postgres
      - DB_POSTGRESDB_DATABASE=n8n
      - DB_POSTGRESDB_USER=\${POSTGRES_USER}
      - DB_POSTGRESDB_PASSWORD=\${POSTGRES_PASSWORD}
      - N8N_ENCRYPTION_KEY=\${ENCRYPTION_KEY}
    volumes:
      - n8n_data:/home/node/.n8n
    depends_on:
      - postgres

  postgres:
    image: postgres:15
    restart: always
    environment:
      - POSTGRES_USER=\${POSTGRES_USER}
      - POSTGRES_PASSWORD=\${POSTGRES_PASSWORD}
      - POSTGRES_DB=n8n
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  n8n_data:
  postgres_data:`}
              </pre>
            </div>

            <BlogParagraph>
              <strong>Deployment steps:</strong>
            </BlogParagraph>
            <BlogCheckList
              items={[
                'Provision a VPS with your preferred provider (Hetzner, DigitalOcean, AWS EC2)',
                'Install Docker and Docker Compose',
                'Create a .env file with your credentials and encryption key',
                'Run docker-compose up -d to start services',
                'Configure a reverse proxy (Nginx/Caddy) with SSL certificates',
                'Set up firewall rules to restrict access',
              ]}
            />
          </BlogSection>

          {/* Security & Compliance */}
          <BlogSection id="security-compliance" title="Security & Compliance Considerations">
            <BlogParagraph>
              Self-hosting gives you control, but with control comes responsibility. Here is your security checklist:
            </BlogParagraph>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-green-50 dark:bg-green-950/30 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-3">Network Security</h4>
                <BlogCheckList
                  items={[
                    'SSL/TLS encryption (mandatory)',
                    'Firewall: allow only 443, block 5678 externally',
                    'VPN or IP allowlisting for admin access',
                    'Reverse proxy (Nginx/Caddy/Traefik)',
                    'DDoS protection via Cloudflare or similar',
                  ]}
                />
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">Application Security</h4>
                <BlogCheckList
                  items={[
                    'Strong N8N_ENCRYPTION_KEY (32+ chars)',
                    'Basic auth or SSO for the n8n UI',
                    'Disable public registration',
                    'Regular security updates',
                    'Audit logging enabled',
                  ]}
                />
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border shadow-sm my-6">
              <h4 className="font-semibold text-lg mb-3">Compliance Framework Alignment</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="p-3 text-left">Framework</th>
                      <th className="p-3 text-left">Self-Hosting Benefit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-3 font-medium">GDPR</td>
                      <td className="p-3">Data stays in EU data centers; eliminates third-party processor concerns</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">HIPAA</td>
                      <td className="p-3">Full control over PHI; implement required access controls</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">SOC 2</td>
                      <td className="p-3">Define your own security controls; easier audit trail</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">ISO 27001</td>
                      <td className="p-3">Integrate with existing ISMS; documented procedures</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </BlogSection>

          {/* Maintenance */}
          <BlogSection id="maintenance" title="Maintenance & Monitoring Best Practices">
            <BlogParagraph>
              A well-maintained n8n instance requires ongoing attention. Here is what to automate:
            </BlogParagraph>

            <div className="space-y-6 my-6">
              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <h4 className="font-semibold text-lg mb-2">🔄 Update Strategy</h4>
                <BlogParagraph>
                  n8n releases frequently. We recommend a staged approach: test updates in a staging environment before production. Pin to specific versions in Docker and update monthly unless security patches require immediate action.
                </BlogParagraph>
              </div>

              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <h4 className="font-semibold text-lg mb-2">💾 Backup Procedures</h4>
                <BlogCheckList
                  items={[
                    'Daily PostgreSQL dumps (pg_dump) to offsite storage',
                    'Version control workflows via n8n Git integration',
                    'Export encrypted credentials separately',
                    'Test restore procedures quarterly',
                  ]}
                />
              </div>

              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <h4 className="font-semibold text-lg mb-2">📊 Monitoring Setup</h4>
                <BlogCheckList
                  items={[
                    'Uptime monitoring (UptimeRobot, Healthchecks.io)',
                    'Resource metrics (Prometheus + Grafana or Netdata)',
                    'Log aggregation (Loki, Elasticsearch)',
                    'Alerting on workflow failures via n8n itself',
                  ]}
                />
              </div>
            </div>
          </BlogSection>

          {/* Cost Analysis */}
          <BlogSection id="cost-analysis" title="Cost Analysis: Cloud vs Self-Hosted (2026)">
            <BlogParagraph>
              Let us compare the true cost of ownership over 12 months with updated 2026 pricing:
            </BlogParagraph>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="p-4 text-left font-semibold">Scenario</th>
                    <th className="p-4 text-right font-semibold">n8n Cloud (2026)</th>
                    <th className="p-4 text-right font-semibold">Self-Hosted (Est.)</th>
                    <th className="p-4 text-right font-semibold">Savings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-medium">Light (5K executions/mo)</td>
                    <td className="p-4 text-right">$240/year</td>
                    <td className="p-4 text-right">$480/year</td>
                    <td className="p-4 text-right text-red-500">-$240</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-medium">Medium (50K executions/mo)</td>
                    <td className="p-4 text-right">$1,200/year</td>
                    <td className="p-4 text-right">$720/year</td>
                    <td className="p-4 text-right text-green-600 dark:text-green-400">+$480</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-medium">Heavy (200K executions/mo)</td>
                    <td className="p-4 text-right">$6,000/year</td>
                    <td className="p-4 text-right">$1,200/year</td>
                    <td className="p-4 text-right text-green-600 dark:text-green-400">+$4,800</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors bg-muted/30">
                    <td className="p-4 font-medium">Enterprise (1M+ executions/mo)</td>
                    <td className="p-4 text-right">$24,000+/year</td>
                    <td className="p-4 text-right">$3,600/year</td>
                    <td className="p-4 text-right text-green-600 dark:text-green-400 font-bold">+$20,400</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <BlogParagraph>
              <strong>Key insight:</strong> Self-hosting breaks even at around 20,000 executions per month. Below that, n8n Cloud is more cost-effective. Above that, self-hosting savings compound dramatically.
            </BlogParagraph>
          </BlogSection>

          {/* When NOT to Self-Host */}
          <BlogSection id="when-not-to" title="When NOT to Self-Host">
            <BlogParagraph>
              Self-hosting is not always the right choice. Consider sticking with n8n Cloud if:
            </BlogParagraph>

            <div className="bg-yellow-50 dark:bg-yellow-950/30 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800 my-6">
              <BlogCheckList
                items={[
                  'Your team lacks DevOps or sysadmin expertise',
                  'You have fewer than 20,000 monthly executions',
                  'Uptime SLAs are critical and you cannot guarantee 99.9%+ yourself',
                  'You need managed SSO, audit logs, and enterprise support',
                  'Total cost of internal maintenance exceeds cloud pricing',
                ]}
              />
            </div>

            <BlogParagraph>
              For teams in this situation, consider our <Link href="/ai-automation/insights/n8n-vs-zapier-vs-make-comparison" className="text-primary underline hover:text-primary/80 transition-colors">n8n vs Zapier vs Make comparison</Link> to explore cloud alternatives.
            </BlogParagraph>
          </BlogSection>

          <BlogSection id="faq" title="Frequently Asked Questions (2026)">
            <div className="space-y-6 my-6">
              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <h4 className="font-semibold text-lg mb-2">Q: Is n8n HIPAA compliant?</h4>
                <BlogParagraph>
                  The n8n software itself is HIPAA compliant when self-hosted, as it allows you to configure encryption-at-rest and access controls. However, compliance depends on <em>your</em> infrastructure security (encryption, BAAs with hosting providers). n8n Cloud Enterprise also offers HIPAA compliance.
                </BlogParagraph>
              </div>

              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <h4 className="font-semibold text-lg mb-2">Q: What is the cost of n8n Enterprise Self-Hosted?</h4>
                <BlogParagraph>
                  The "Community Edition" is free for internal business use. However, if you need features like SSO, Audit Logs, or advanced IAM, you need an Enterprise license. Pricing is custom but typically starts around $5k-$10k/year depending on requirements.
                </BlogParagraph>
              </div>

              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <h4 className="font-semibold text-lg mb-2">Q: DigitalOcean vs n8n Cloud?</h4>
                <BlogParagraph>
                  DigitalOcean is cheaper ($10-20/mo fixed cost) but requires you to manage updates, security, and backups. n8n Cloud is managed but costs more as you scale. We recommend DigitalOcean + Coolify for teams who want cost savings without high complexity.
                </BlogParagraph>
              </div>
            </div>
          </BlogSection>

          {/* Conclusion */}
          <BlogSection id="conclusion" title="Conclusion: Is Self-Hosting Right for You?">
            <BlogParagraph>
              Self-hosting n8n is a powerful choice for organizations that prioritize data sovereignty, need unlimited automation capacity, or operate under strict compliance requirements. However, it demands technical investment in setup, security, and ongoing maintenance.
            </BlogParagraph>
            <BlogParagraph>
              For enterprises with the right resources, the benefits are clear: complete control over your automation infrastructure, predictable costs at scale, and the flexibility to customize n8n to your exact needs.
            </BlogParagraph>
            <BlogParagraph>
              At Finbyz Tech, we help enterprises deploy and maintain production-ready n8n instances. Whether you need assistance with initial setup, security hardening, or ongoing managed services, our team has the expertise to ensure your self-hosted n8n runs smoothly.
            </BlogParagraph>

            <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20 text-center">
              <h4 className="font-bold text-xl mb-2">Need Help Self-Hosting n8n?</h4>
              <p className="text-muted-foreground mb-4">
                Our DevOps and automation experts can handle your n8n deployment, security, and maintenance.
              </p>
              <Link
                href="/ai-automation"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Talk to Our n8n Experts →
              </Link>
            </div>
          </BlogSection>
        </BlogContent>
      </div>
    </div>
  );
}
