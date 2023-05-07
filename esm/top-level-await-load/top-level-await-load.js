let result = null;
const path = import.meta.url.split('#')[1];

if (path) {
  let content;
  if (typeof window === 'object') {
    content = await (await fetch(path)).text();
  } else {
    const fs = (await import('fs')).default;
    content = fs.readFileSync(path).toString();
  }
  result = path.includes('.json') ? JSON.parse(content) : content;
}

export default result;

// import html from './load.js?#./index.html';
// import doc from './load.js?#./doc.md';
// import css from './load.js?#./styles.css';
// import svg from './load.js?#./image.svg';
// import data from './load.js?#./data.json';
// console.log(html, doc, css, svg, data);
