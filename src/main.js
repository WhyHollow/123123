import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
Vue.config.productionTip = false

require('@/store/subscriber');

axios.defaults.baseURL = process.env.VUE_APP_baseURL;

store.dispatch('auth/attempt', localStorage.getItem('Token')).then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
});