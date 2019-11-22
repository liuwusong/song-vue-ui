import Vue from 'vue';
import App from './App.vue';
import './assets/css/index.scss';
import SVue from '../dist/build.min.js';
Vue.use(SVue);

new Vue({
  el: '#app',
  render: h => h(App)
});
