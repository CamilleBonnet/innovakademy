import Vue from 'vue';
import Router from 'vue-router';

import Home from './Home'
import About from './About'
import Contact from './Contact'
import References from './References'
import Solutions from './Solutions'

import ErrorPage from './shared/ErrorPage'

Vue.use(Router);

const routes = [
  // { path: '/', redirect: '/v3/shops/all/employees' },
  { path: '/' },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/solutions',
    name: 'solutions',
    component: Solutions,
  },
  {
    path: '/references',
    name: 'references',
    component: References,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '*',
    name: 'error-page',
    component: ErrorPage,
  },
];


const router = new Router({
  mode: 'history',
  routes,
});

export default router;
