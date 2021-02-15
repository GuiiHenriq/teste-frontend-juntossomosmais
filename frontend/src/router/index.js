import Vue from 'vue'
import VueRouter from 'vue-router'
import UserList from '../components/UserList.vue'
import UserPage from '../components/UserPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/user/:id',
    name: 'UserPage',
    component: UserPage,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({top: 0, behavior: "smooth"})
  }
})

export default router
