const http = require('http');
const https = require('https');
const url = require('url');

const PORT = 3456;

const server = http.createServer((req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type, Accept, User-Agent');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsed = url.parse(req.url, true);

  // Health check
  if (parsed.pathname === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true, time: new Date().toISOString() }));
    return;
  }

  // Proxy: /proxy?url=https://api.github.com/...
  let targetUrl;
  if (parsed.query.url) {
    targetUrl = parsed.query.url;
  } else if (parsed.pathname.startsWith('/api/')) {
    targetUrl = 'https://api.github.com' + parsed.pathname.replace('/api', '') + (parsed.search ? parsed.search : '');
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Use /proxy?url=<github-api-url> or /api/<path>' }));
    return;
  }

  const target = url.parse(targetUrl);

  // Forward headers
  const headers = {};
  if (req.headers['authorization']) headers['Authorization'] = req.headers['authorization'];
  if (req.headers['accept']) headers['Accept'] = req.headers['accept'];
  else headers['Accept'] = 'application/vnd.github+json';
  if (req.headers['content-type']) headers['Content-Type'] = req.headers['content-type'];
  headers['User-Agent'] = 'permaculture-cms-proxy';

  const options = {
    hostname: target.hostname,
    port: target.port || 443,
    path: target.path,
    method: req.method,
    headers: headers,
  };

  const proxyReq = https.request(options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res);
  });

  proxyReq.on('error', (e) => {
    res.writeHead(502, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: e.message }));
  });

  req.pipe(proxyReq);
});

server.listen(PORT, () => {
  console.log(`GitHub API proxy running on port ${PORT}`);
  console.log(`Test: http://localhost:${PORT}/api/zen`);
});
