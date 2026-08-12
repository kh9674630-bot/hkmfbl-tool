export default {
  fetch: async (request, env, ctx) => {
    const url = new URL(request.url);
    
    // Allow Next.js static assets through
    if (url.pathname.startsWith('/_next/static/')) {
      return fetch(request);
    }
    
    // Allow other static files
    if (url.pathname.startsWith('/assets/') || 
        url.pathname.endsWith('.js') || 
        url.pathname.endsWith('.css') ||
        url.pathname.endsWith('.ico') ||
        url.pathname.endsWith('.txt') ||
        url.pathname.endsWith('.xml') ||
        url.pathname.endsWith('.json')) {
      return fetch(request);
    }
    
    // Fallback to index.html for SPA routing
    return fetch(new Request(new URL('/index.html', request.url), request));
  },
};