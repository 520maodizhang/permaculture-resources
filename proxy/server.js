const express = require('express');
const app = express();
app.use(express.raw({ type: '*/*', limit: '10mb' }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Authorization,Content-Type,Accept');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

app.get('/health', (req, res) => res.json({ ok: true }));

app.use('/api', async (req, res) => {
  const ghPath = req.path;
  const url = new URL('https://api.github.com' + ghPath);
  Object.keys(req.query).forEach(k => url.searchParams.append(k, req.query[k]));
  const headers = {
    'Accept': req.headers['accept'] || 'application/vnd.github+json',
    'User-Agent': 'permaculture-cms-proxy'
  };
  if (req.headers['authorization']) headers['Authorization'] = req.headers['authorization'];
  if (req.headers['content-type']) headers['Content-Type'] = req.headers['content-type'];
  try {
    const resp = await fetch(url.toString(), {
      method: req.method, headers,
      body: ['POST','PUT','PATCH','DELETE'].includes(req.method) && req.body.length ? req.body : undefined
    });
    const text = await resp.text();
    res.header('Content-Type', resp.headers.get('content-type') || 'application/json');
    res.status(resp.status).send(text);
  } catch (e) { res.status(502).json({ error: e.message }); }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Proxy on port ${port}`));
