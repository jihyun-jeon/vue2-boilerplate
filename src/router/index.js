import Vue from 'vue'
import VueRouter from 'vue-router'
import MapView from '../view/MapView'

Vue.use(VueRouter)

const routes = [{ path: '/', component: MapView }]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
