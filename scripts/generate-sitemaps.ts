/* eslint-disable no-console */
import { readdir, stat, mkdir, writeFile } from 'fs/promises'
import path from 'path'
import config, { SitemapConfig, GLOBAL_EXCLUDE } from './sitemaps.config'
import dotenv from 'dotenv';
dotenv.config();

const SITE_URL = process.env.SITE_URL || 'https://finbyz.tech'
const OUT_DIR = path.join(process.cwd(), 'public')

type SitemapUrl = {
  loc: string;
  changefreq?: string;
  priority?: number;
};

async function ensureDir(dir: string) {
  await mkdir(dir, { recursive: true })
}

function buildUrlEntry(url: string, lastmod?: string, changefreq?: string, priority?: number) {
  const parts: string[] = [
    '<url>',
    `<loc>${url}</loc>`,
  ]
  if (lastmod) parts.push(`<lastmod>${lastmod}</lastmod>`)
  if (changefreq) parts.push(`<changefreq>${changefreq}</changefreq>`)
  if (priority !== undefined) parts.push(`<priority>${priority}</priority>`)
  parts.push('</url>')
  return parts.join('')
}

function wrapUrlset(entries: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    entries.join('') +
    `</urlset>`
}

function wrapSitemapIndex(sitemaps: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>` +
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    sitemaps.join('') +
    `</sitemapindex>`
}

function buildSitemapRef(loc: string, lastmod?: string) {
  const parts = ['<sitemap>', `<loc>${loc}</loc>`]
  if (lastmod) parts.push(`<lastmod>${lastmod}</lastmod>`)
  parts.push('</sitemap>')
  return parts.join('')
}

async function getFoldersWithPageTsx(baseDir: string): Promise<string[]> {
  try {
    const entries = await readdir(baseDir)
    const routes: string[] = []
    for (const entry of entries) {
      const entryPath = path.join(baseDir, entry)
      const s = await stat(entryPath)
      if (!s.isDirectory()) continue
      try {
        const pagePath = path.join(entryPath, 'page.tsx')
        const p = await stat(pagePath)
        if (p.isFile()) routes.push(entry)
      } catch { }
    }
    return routes
  } catch {
    return []
  }
}

async function getFlatPagesInDir(appRelativeDir: string, options?: { includeRootIndex?: boolean, routePrefix?: string }): Promise<string[]> {
  const baseDir = path.join(process.cwd(), 'src', 'app', appRelativeDir)
  const routes: string[] = []
  try {
    if (options?.includeRootIndex && appRelativeDir === '') {
      try {
        const p = await stat(path.join(baseDir, 'page.tsx'))
        if (p.isFile()) routes.push('')
      } catch { }
    }
    const entries = await readdir(baseDir)
    for (const entry of entries) {
      // skip special folders like api, group folders, and segment configs
      if (entry.startsWith('(') || entry === 'api') continue
      const entryPath = path.join(baseDir, entry)
      const s = await stat(entryPath)
      if (!s.isDirectory()) continue
      try {
        const pagePath = path.join(entryPath, 'page.tsx')
        const p = await stat(pagePath)
        if (p.isFile()) routes.push(entry)
      } catch { }
    }
  } catch { }
  const prefix = (options?.routePrefix || '/')
  return routes.map(r => (r ? `${prefix}${r}` : '/'))
}

async function writeSitemap(filename: string, urls: SitemapUrl[]) {
  const nowIso = new Date().toISOString()
  const entries = urls.map(u => buildUrlEntry(u.loc, nowIso, u.changefreq, u.priority))
  await writeFile(path.join(OUT_DIR, filename), wrapUrlset(entries), 'utf8')
}

function applyFiltersAndTransform(
  urls: SitemapUrl[],
  item: SitemapConfig
): SitemapUrl[] {
  const excludes = new Set([...(item.exclude || [])])
  
  // Apply global and item-specific exclusions
  let filteredUrls = urls.filter(
    url => 
      ![...GLOBAL_EXCLUDE].some(ex => url.loc.includes(ex)) && 
      ![...excludes].some(ex => url.loc.endsWith(ex))
  )
  
  // Apply transform function if it exists
  if (item.type === 'filesystem' && item.transform) {
    filteredUrls = item.transform({ urls: filteredUrls })
  } else if (item.type === 'filesystemDir' && item?.transform) {
    filteredUrls = item.transform({ urls: filteredUrls })
  } else if (item.type === 'frappe' && item?.transform) {
    filteredUrls = item.transform({ urls: filteredUrls })
  }
  
  return filteredUrls
}

async function main() {
  await ensureDir(OUT_DIR)

  const refs: string[] = []
  for (const item of config) {
    if (item.type === 'filesystem') {
      const routes = await getFoldersWithPageTsx(path.join(process.cwd(), 'src', 'app', item.groupDir))
      const filename = `${item.name}-sitemap.xml`
      
      let urls: SitemapUrl[] = routes.map(route => ({
        loc: `${SITE_URL}/${route}`,
        changefreq: item.changefreq,
        priority: item.priority,
      }))
      
      urls = applyFiltersAndTransform(urls, item)
      
      await writeSitemap(filename, urls)
      refs.push(buildSitemapRef(`${SITE_URL}/${filename}`))
      
    } else if (item.type === 'frappe') {
      const base = process.env.FRAPPE_URL || ''
      let routes: string[] = []
      if (base) {
        const url = `${base}/api/resource/${encodeURIComponent(item.doctype)}?filters=${encodeURIComponent(
          JSON.stringify(item.filters)
        )}&fields=${encodeURIComponent(JSON.stringify(item.fields || ['route']))}&limit=0`
        const res = await fetch(url, {
          headers: process.env.FRAPPE_API_KEY && process.env.FRAPPE_API_SECRET
            ? { Authorization: `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}` }
            : undefined,
        })
        if (res.ok) {
          const json = await res.json()
          routes = (json?.data || []).map((r: any) => r[item.routeField]).filter(Boolean)
        }
      }
      
      const filename = `${item.name}-sitemap.xml`
      let urls: SitemapUrl[] = routes.map(route => ({
        loc: `${SITE_URL}${item.routePrefix || '/'}${route}`.replace(/\/+/, '/'),
        changefreq: item.changefreq,
        priority: item.priority,
      }))
      
      urls = applyFiltersAndTransform(urls, item)
      
      await writeSitemap(filename, urls)
      refs.push(buildSitemapRef(`${SITE_URL}/${filename}`))
      
    } else if (item.type === 'filesystemDir') {
      const routes = await getFlatPagesInDir(item.dir, { 
        includeRootIndex: item.includeRootIndex, 
        routePrefix: item.routePrefix 
      })
      
      const filename = `${item.name}-sitemap.xml`
      let urls: SitemapUrl[] = routes.map(route => ({
        loc: `${SITE_URL}${route}`,
        changefreq: item.changefreq,
        priority: item.priority,
      }))
      
      urls = applyFiltersAndTransform(urls, item)
      
      await writeSitemap(filename, urls)
      refs.push(buildSitemapRef(`${SITE_URL}/${filename}`))
    }
  }

  const indexRefs = refs
  await writeFile(path.join(OUT_DIR, 'sitemap.xml'), wrapSitemapIndex(indexRefs), 'utf8')
}

main().catch((err) => {
  console.error('Sitemap generation failed:', err)
  process.exitCode = 1
})
