import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import mainRouter from "./main.router"


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    ...mainRouter
  ]
})

export default router
