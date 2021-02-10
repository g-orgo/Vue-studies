import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(BootstrapVue)

new Vue({
  render: root => root(App),
}).$mount('#app');