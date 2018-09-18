// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import {NoticeBar,Button,Row,Col,Swipe,SwipeItem,Lazyload,List,Field,NavBar,Tab,Tabs,PullRefresh,Stepper,Tabbar,TabbarItem,Cell,CellGroup} from 'vant'

Vue.use(NoticeBar).use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(List).use(Field).use(NavBar).use(Tab).use(Tabs).use(PullRefresh).use(Stepper).use(Tabbar).use(TabbarItem).use(Cell).use(CellGroup)

Vue.config.productionTip = false

Vue.prototype.$http = axios;




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
