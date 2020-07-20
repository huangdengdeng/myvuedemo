import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import New from '@/components/New'

Vue.use(Router)

// 把路由对应的组件定义成异步组件,推荐写法1
// const HelloWorld = resolve => {
//   require.ensure(['@/components/HelloWorld'], () => {
//     resolve(require('@/components/HelloWorld'))
//   })
// }
// const New = resolve => {
//   require.ensure(['@/components/New.vue'], () => {
//     resolve(require('@/components/New.vue'))
//   })
// }
// const Mine = r => require.ensure([], () => r(require('../components/mine/index.vue')), 'mine')

// 把路由对应的组件定义成异步组件,推荐写法
const HelloWorld = () => import(/* webpackChunkName: "HelloWorld" */ '@/components/HelloWorld')
const New = () => import(/* webpackChunkName: "New" */ '@/components/New')
const Home = () => import(/* webpackChunkName: "home" */ '@/views/home')
const Page1 = () => import(/* webpackChunkName: "page1" */ '@/views/page1')
const Page2 = () => import(/* webpackChunkName: "page2" */ '@/views/page2')
const Page3 = () => import(/* webpackChunkName: "page3" */ '@/views/page3')
const Page4 = () => import(/* webpackChunkName: "page4" */ '@/views/page4')
const Page5 = () => import(/* webpackChunkName: "page5" */ '@/views/page5')
const Page6 = () => import(/* webpackChunkName: "page6" */ '@/views/page6')
const Page7 = () => import(/* webpackChunkName: "page7" */ '@/views/page7')
const Page8 = () => import(/* webpackChunkName: "page8" */ '@/views/page8')
const Page9 = () => import(/* webpackChunkName: "page9" */ '@/views/page9')
const Page10 = () => import(/* webpackChunkName: "page10" */ '@/views/page10')
const Page11 = () => import(/* webpackChunkName: "page11" */ '@/views/page11')
const Page12 = () => import(/* webpackChunkName: "page12" */ '@/views/page12')
const MyEltable = () => import(/* webpackChunkName: "MyEltable" */ '@/views/MyEltable')
const vueProvideInject = () => import(/* webpackChunkName: "vueProvideInject" */ '@/views/vueProvideInject')
const err = () => import(/* webpackChunkName: "404" */ '@/views/404')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/new',
      name: 'New',
      component: New
    },
    {
      path: '/page1',
      name: 'Page1',
      component: Page1,
      props: true
    },
    {
      path: '/page2',
      name: 'Page2',
      alias: '/page2343o253p43i',
      component: Page2
    },
    {
      path: '/page3',
      name: 'Page3',
      components: {
        default: Page3,
        'his': Page4
      }
    },
    {
      path: '/page4',
      name: 'Page4',
      component: Page4
    },
    {
      path: '/page5',
      name: 'Page5',
      component: Page5
    },
    {
      path: '/page6',
      name: 'Page6',
      component: Page6
    },
    {
      path: '/page7',
      name: 'Page7',
      component: Page7
    },
    {
      path: '/page8',
      name: 'Page8',
      component: Page8
    },
    {
      path: '/page9',
      name: 'Page9',
      component: Page9
    },
    {
      path: '/page10',
      name: 'Page10',
      component: Page10
    },
    {
      path: '/page11',
      name: 'Page11',
      component: Page11
    },
    {
      path: '/page12',
      name: 'Page12',
      component: Page12
    },
    {
      path: '/myEltable',
      name: 'myEltable',
      component: MyEltable
    },
    {
      path: '/vueProvideInject',
      name: 'vueProvideInject',
      component: vueProvideInject
    },
    {
      path: '*',
      component: err
    }
  ]
})
