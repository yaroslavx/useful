import { createApp } from 'vue';
import { createStore } from 'vuex';
import * as Router from 'vue-router';
import './index.scss';

import App from './App.vue';
import Home from './Home.vue';
import About from 'remote/About';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
];
const router = Router.createRouter({
  history: Router.createWebHashHistory(),
  routes,
});

const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    addOne(state) {
      console.log('addOne');
      state.count++;
    },
  },
});

createApp(App).use(router).use(store).mount('#app');
