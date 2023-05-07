import makeStore from './src/store.js';
import startServer from './src/server.js';

export const store = makeStore();
startServer(store);

store.dispatch({
  type: 'SET_ENTRIES',
  entries: require('./entries.json'),
});

store.dispatch({ type: 'NEXT' });
