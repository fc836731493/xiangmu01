import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout'
import Details from "@/pages/details"
import Car from "@/pages/details/car"
import Earth from "@/pages/details/earth"
import Hill from "@/pages/details/hill"
import Loud from "@/pages/details/loud"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
      path:"/details",
      name:"details",
      component:Details,
      redirect:"/details/earth",
      children:[
        {
          name:"Car",
          path:"car",
          component:Car
        },
        {
          name:"Earth",
          path:"earth",
          component:Earth
        },
        {
          name:"Hill",
          path:"hill",
          component:Hill
        },
        {
          name:"Loud",
          path:"loud",
          component:Loud
        }
      ]
    }
  ]
})
