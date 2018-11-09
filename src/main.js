import Vue from 'vue'

// import ElementUI from 'element-ui'
import VueLazyload from 'vue-lazyload'

// Vue.use(ElementUI);
Vue.use(VueLazyload, {
  loading:require('./statics/site/images/01.gif')
})
import App from './App.vue'


//按需导入ElementUI
import {
  Button,
  Pagination,
  Input,
  InputNumber,
  Switch,
  Form,
  FormItem,
  Radio,
  RadioGroup,
  MessageBox,
  Message,
  Carousel,
  CarouselItem,
  Row,
  Col
} from 'element-ui'

Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Button) //自动导入element-ui/lib/theme-chalk/button.css
Vue.use(Pagination)
Vue.use(InputNumber)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Input)
Vue.use(Switch)
Vue.use(Row)
Vue.use(Col)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm


import 'element-ui/lib/theme-chalk/index.css';

import './statics/site/css/style.css'
import store from './store/index.js'


Vue.config.productionTip = false

// 导入过滤器
import './filters'

import router from './router'

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
