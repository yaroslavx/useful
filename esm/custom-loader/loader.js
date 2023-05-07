import { URL } from 'url';
import { readFile } from 'fs/promises';

function checkUrl(url) {
  return !!['.html', '.htm', '.md', '.css', '.svg', '.json'].find((res) => {
    return url.endsWith(res);
  });
}

export async function load(url, context, defaultLoad) {
  if (checkUrl(url)) {
    const content = (await readFile(new URL(url))).toString();
    return {
      format: 'module',
      source: `export default ${
        url.endsWith('.json') ? content : JSON.stringify(content)
      }`,
      shortCircuit: true,
    };
  }
  return defaultLoad(url, context, defaultLoad);
}
