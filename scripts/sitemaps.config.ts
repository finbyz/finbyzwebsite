import { url } from "inspector";

export const GLOBAL_EXCLUDE: string[] = [
  '/api/',
  '/_next/',
  '/static/',
  '/favicon.ico',
  '/sitemap.xml',
]

type SitemapUrl = {
  loc: string;
  changefreq?: string;
  priority?: number;
};

export type SitemapConfig =
  | {
    name: string;
    type: 'filesystem';
    groupDir: '(webpages)' | '(blogs)' | '(dev-insights)';
    changefreq?: string;
    priority?: number;
    exclude?: string[];
    transform?: (params: { urls: SitemapUrl[] }) => SitemapUrl[];
  }
  | {
    name: string
    type: 'filesystemDir'
    dir: '' | string // relative to src/app
    routePrefix?: string // prefix for produced routes (default '/')
    includeRootIndex?: boolean // if dir is '' and root page.tsx exists, include '/'
    changefreq?: string
    priority?: number
    exclude?: string[]
    transform?: (params: { urls: SitemapUrl[] }) => SitemapUrl[];
  }
  | {
    name: string
    type: 'frappe'
    doctype: 'Job Opening' | 'Gallery'
    routeField: 'route'
    routePrefix?: string
    filters: any[][]
    fields?: string[]
    changefreq?: string
    priority?: number
    exclude?: string[]
    transform?: (params: { urls: SitemapUrl[] }) => SitemapUrl[];
  }

const config: SitemapConfig[] = [
  {
    name: 'webpages',
    type: 'filesystem',
    groupDir: '(webpages)',
    changefreq: 'weekly',
    priority: 0.9,
    exclude: [],
  },
  {
    name: 'blogs',
    type: 'filesystem',
    groupDir: '(blogs)',
    changefreq: 'weekly',
    priority: 0.8,
    exclude: [],
  },
  {
    name: 'site',
    type: 'filesystemDir',
    dir: '',
    includeRootIndex: true,
    changefreq: 'weekly',
    priority: 0.8,
    exclude: ['/contact-old','/page-builder','/user-activity'],
    transform: ({ urls }) => {
      return urls.map(url => {
        let priority = 0.4;
        if (url.loc.includes('about') || url.loc.includes('contact') || url.loc.includes('services')) {
          priority = 0.9;
        }
        if (url.loc.includes('clients')) {
          priority = 0.6;
        }
        return {
          ...url,
          priority,
        };
      });
    }
  },
  {
    name: 'jobs',
    type: 'frappe',
    doctype: 'Job Opening',
    routeField: 'route',
    routePrefix: '/jobs/',
    filters: [['publish', 'is', 'set']],
    fields: ['route'],
    changefreq: 'daily',
    priority: 0.7,
    exclude: [],
  },
  {
    name: 'galleries',
    type: 'frappe',
    doctype: 'Gallery',
    routeField: 'route',
    routePrefix: '//',
    filters: [['published', 'is', 'set']],
    fields: ['route'],
    changefreq: 'weekly',
    priority: 0.6,
    exclude: [],
  },
  {
    name: 'dev-insights',
    type: 'filesystem',
    groupDir: '(dev-insights)',
    changefreq: 'weekly',
    priority: 0.7,
    exclude: [],
  },
]

export default config
