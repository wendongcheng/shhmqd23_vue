import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import axios from 'axios'
axios.defaults.baseURL = 'http://47.106.148.205:8899/'
axios.defaults.withCredentials = true//让ajax携带cookie
Vue.prototype.$axios = axios

// 导入组件
// import goodslist from '../components/goods/goodslist.vue'
// import goodsinfo from '../components/goods/goodsinfo.vue'
// import shopcart from '../components/shopcart/shopcart.vue'
// import order from '../components/order/order.vue'
// import login from '../components/account/login.vue'
// import payorder from '../components/pay/payorder.vue'
// import paySuccess from '../components/pay/paySuccess.vue'
// import vipCenter from '../components/vip/vipCenter.vue'
// import myOrders from '../components/vip/myOrders.vue'
// import orderInfo from '../components/vip/orderInfo.vue'

const goodslist = () => import(/* webpackChunkName: "goodslist" */ '../components/goods/goodslist.vue')
const goodsinfo = () => import(/* webpackChunkName: "goodsinfo" */ '../components/goods/goodsinfo.vue')
const shopcart = () => import(/* webpackChunkName: "shopcart" */ '../components/shopcart/shopcart.vue')
const order = () => import(/* webpackChunkName: "order" */ '../components/order/order.vue')
const login = () => import(/* webpackChunkName: "login" */ '../components/account/login.vue')
const payorder = () => import(/* webpackChunkName: "payorder" */ '../components/pay/payorder.vue')
const paySuccess = () => import(/* webpackChunkName: "paySuccess" */ '../components/pay/paySuccess.vue')
const vipCenter = () => import(/* webpackChunkName: "vipCenter" */ '../components/vip/vipCenter.vue')
const myOrders = () => import(/* webpackChunkName: "myOrders" */ '../components/vip/myOrders.vue')
const orderInfo = () => import(/* webpackChunkName: "orderInfo" */ '../components/vip/orderInfo.vue')





const router = new VueRouter({
    routes:[
        {path: '/',redirect: '/goodslist'},
        {name: 'GOODSLIST',path: '/goodslist',component:goodslist},
        {path: '/goodsinfo/:goodsId',component:goodsinfo},
        {path: '/shopcart',component: shopcart},
        {path: '/login',component: login},
        {path: '/order',component:order,meta: { checkoutLogin: true }},
        {path:'/pay',component:payorder,meta: { checkoutLogin: true }},
        {path:'/paySuccess',component:paySuccess,meta: { checkoutLogin: true }},
        {path:'/vipCenter',component:vipCenter,meta: { checkoutLogin: true }},
        {path:'/myOrders',component:myOrders,meta: { checkoutLogin: true }},
        {path:'/orderInfo',component:orderInfo,meta: { checkoutLogin: true }}
    ]
})

router.beforeEach((to, from, next) => {

  if(to.path !=='/login'){
      localStorage.setItem('wantVisitPath',to.fullPath)
  }

  if(to.meta.checkoutLogin){
     axios.get('site/account/islogin').then(response=>{
         if(response.data.code === 'logined'){
              next()
         }else{
             router.push({path: '/login'})
         }
     })
  }else{
    next()
  }
})
export default router




