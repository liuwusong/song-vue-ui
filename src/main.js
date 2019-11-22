import Vue from 'vue';
import App from './App.vue';
import SVue from './index';
import './assets/css/index.scss';
Vue.use(SVue);

new Vue({
  el: '#app',
  render: h => h(App)
});
