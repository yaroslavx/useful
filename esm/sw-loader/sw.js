function checkUrl(url) {
  return !!['.html', '.htm', '.md', '.css', '.svg', '.json'].find((res) => {
    return url.endsWith(res);
  });
}

async function handleRequest(req) {
  let content = await (await self.fetch(req.url)).text();
  let res = new Response(
    `export default ${
      req.url.endsWith('.json') ? content : JSON.stringify(content)
    };`,
    {
      headers: { 'Content-Type': 'text/javascript' },
    }
  );
  return res;
}

self.addEventListener('fetch', (event) => {
  if (event.request.destination === 'script' && checkUrl(event.request.url)) {
    event.respondWith(handleRequest(event.request));
  }
});

// import html from './index.html';
// import doc from './doc.md';
// import css from './styles.css';
// import svg from './image.svg';
// import data from './data.json';
// console.log(html, doc, css, svg, data);

// navigator.serviceWorker.register('./sw.js');
