import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import home from '../views/HomeView.vue'

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    component:home
  }
];

const router = new VueRouter({
  routes
});

export default router;
