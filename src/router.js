import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from './pages/home.vue'
import ResultsPage from './pages/results.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/results', name: 'results', component: ResultsPage, props: true },
]

const router = new VueRouter({ mode: 'history', routes })

export default router
