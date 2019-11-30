import Vue from 'vue';
import App from './App.vue';
import './assets/css/index.scss';
import SVue from './index';
Vue.use(SVue);

new Vue({
  el: '#app',
  render: h => h(App)
});
