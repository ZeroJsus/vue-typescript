import Vue,{AsyncComponent} from 'vue'
import Router from 'vue-router'
// import HelloWorld :any from '@/components/HelloWorld'

const HelloWorld : AsyncComponent = (): any => import('@/components/HelloWorld.vue');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
