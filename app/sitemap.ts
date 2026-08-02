import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hkmfbl.top';

  const tools = [
    { path: '/tools/json-formatter', priority: 0.9 },
    { path: '/tools/csv-to-json', priority: 0.9 },
    { path: '/tools/timestamp-converter', priority: 0.9 },
    { path: '/tools/base64-encode', priority: 0.9 },
    { path: '/tools/uuid-generator', priority: 0.9 },
    { path: '/tools/url-encode', priority: 0.9 },
    { path: '/tools/image-compressor', priority: 0.8 },
    { path: '/tools/qr-generator', priority: 0.8 },
    { path: '/tools/word-counter', priority: 0.8 },
    { path: '/tools/md-preview', priority: 0.8 },
    { path: '/tools/cron-generator', priority: 0.8 },
    { path: '/tools/jwt-decode', priority: 0.8 },
  ];

  const guides = [
    { path: '/guide/how-to-format-json-online', priority: 0.7 },
    { path: '/guide/how-to-convert-csv-to-json', priority: 0.7 },
    { path: '/guide/timestamp-converter-guide', priority: 0.7 },
    { path: '/guide/base64-encoding-guide', priority: 0.7 },
    { path: '/guide/uuid-generator-guide', priority: 0.7 },
    { path: '/guide/url-encoding-guide', priority: 0.7 },
    { path: '/guide/image-compression-guide', priority: 0.7 },
    { path: '/guide/qr-code-generator-guide', priority: 0.7 },
    { path: '/guide/word-counter-guide', priority: 0.7 },
    { path: '/guide/markdown-editor-guide', priority: 0.7 },
    { path: '/guide/cron-expression-guide', priority: 0.7 },
    { path: '/guide/jwt-decoder-guide', priority: 0.7 },
  ];

  const staticPages = [
    { path: '/', priority: 1.0 },
    { path: '/about', priority: 0.6 },
    { path: '/contact', priority: 0.5 },
    { path: '/privacy', priority: 0.5 },
    { path: '/terms', priority: 0.5 },
  ];

  return [
    ...staticPages.map((p) => ({
      url: `${baseUrl}${p.path}`,
      lastModified: new Date('2026-08-02'),
      changeFrequency: 'monthly' as const,
      priority: p.priority,
    })),
    ...tools.map((t) => ({
      url: `${baseUrl}${t.path}`,
      lastModified: new Date('2026-08-02'),
      changeFrequency: 'weekly' as const,
      priority: t.priority,
    })),
    ...guides.map((g) => ({
      url: `${baseUrl}${g.path}`,
      lastModified: new Date('2026-08-02'),
      changeFrequency: 'monthly' as const,
      priority: g.priority,
    })),
  ];
}
