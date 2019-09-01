// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from "axios"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from "./store"
import VueResource from "vue-resource"

Vue.use(VueAwesomeSwiper)
Vue.use(VueResource)

Vue.prototype.$axios = Axios
Axios.defaults.baseURL = "https://www.apiopen.top"
Axios.defaults.headers.post['Content-Type'] = 'applocation/x-www-form-urlencoded'

Vue.config.productionTip = false

Axios.interceptors.request.use(function(config) {
  if (config.method == "post") {
    config.data = qs.stringify(config.data)
  }
  return config;
},  function(error) {
  return Promise.reject(error);
});
Axios.interceptors.response.use(function(response){
      return response;
}, function(error) {
     return Promise.reject(error);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
