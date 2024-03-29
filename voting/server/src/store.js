import { createStore } from 'redux';
import reducer from './reducer.js';

const makeStore = () => createStore(reducer);

export default makeStore;
