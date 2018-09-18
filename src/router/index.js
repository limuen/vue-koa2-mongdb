import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMall from '@/components/pages/ShoppingMall'
import Register from '@/components/pages/Register'
import Login from '@/components/pages/Login'
import Goods from '@/components/pages/Goods'
import CategoryList from '@/components/pages/CategoryList'
import Cart from '@/components/pages/Cart'
import Main from '@/components/pages/Main'
import MyIndex from '@/components/pages/MyIndex'
import index from '@/components/pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',name:'Main',component:Main,
      children:[
        {path:'/',name:'ShoppingMall',component:ShoppingMall},
        {path:'/CategoryList',name:'CategoryList',component:CategoryList},
        {path:'/Cart',name:'Cart',component:Cart},
        {path:'/MyIndex',name:'MyIndex',component:MyIndex}
      ]
    },
   
    {path:'/register',name:'Register',component:Register},
    {path:'/login',name:'Login',component:Login},
    {path:'/goods',name:'Goods',component:Goods},
    {path:'/index',name:'index',component:index}
    
  ]
})
