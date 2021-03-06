import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import HelloWorld from '@/components/HelloWorld'
import myElement from '@/components/myElement'
import myOption from '@/components/option'
import flex from '@/components/flex'
import myoption1 from '@/components/myoption1'
import test from '@/components/test'
import page1 from '@/components/page1'
import page2 from '@/components/page2'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      redirect : '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/myElement',
      name: 'myElement',
      component: myElement
    },
    {
      path: '/myOption',
      name: 'myOption',
      component: myOption
    },
    {
      path: '/flex',
      name: 'flex',
      component: flex
    },
    {
      path: '/test',
      name: 'myoption1',
      component: myoption1,
    },
    {
      path: '/test/:id/',
      name: 'test',
      component: test,
      children:[
        {
          path: 'page1/:id',
          name: 'page1',
          component: page1
        },
        {
          path: 'page1/:id',
          name: 'page2',
          component: page2
        },
      ]
    },
  ]
})
