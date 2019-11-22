import Alert from './components/Alert';
const components = [Alert];

const install = function(Vue, options) {
  // 注册组件
  components.forEach(item => {
    Vue.component(item.name, item);
  });
};

export default { install };
