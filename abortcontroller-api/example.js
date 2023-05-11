import fetch from 'node-fetch';

const cancelFetch = new AbortController();
const promiseOne = fetch('http://123.123.123.144', {
  signal: cancelFetch.signal,
});

console.time('fetch');

promiseOne
  .then((res) => {
    console.log('success');
  })
  .catch((err) => console.error(err.message))
  .finally(() => {});

setTimeout(() => {
  console.log('time is over');
  cancelFetch.abort();
}, 1000);

console.timeEnd('fetch');
