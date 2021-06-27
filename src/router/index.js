import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import CatalogueView from '../views/CatalogueView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/Home',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/Catalogue',
    name: 'Catalogue',
    component: CatalogueView
  }
]

const router = new VueRouter({
  routes
})

export default router
