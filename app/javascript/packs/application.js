import Vue from 'vue'
import App from '../src/static/app'
import router from '../src/static/static-routes';


document.addEventListener('DOMContentLoaded', (event) => {
  const app = new Vue({
    router,
    render: h => h(App)
  }).$mount("#vue-app")
})