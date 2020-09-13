import Vue from 'vue'
import App from '../src/static/app'
import "bootstrap";

document.addEventListener('DOMContentLoaded', (event) => {
  const app = new Vue({
    render: h => h(App)
  }).$mount("#vue-app")
})