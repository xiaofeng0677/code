// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
// 公共工具
import  request from './plugins/request/request'
// 图片懒加载
import VueLazyLoad from 'vue-lazyload/vue-lazyload'
// 注册为全局组件
import registerAsGlobal from './components/registerAsGlobal/index'
import store from './store/store'
// MuseUI
// import './plugins/museUI/index'

import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

Vue.use(MuseUI);
Vue.use(request)
Vue.use(VueLazyLoad, {
  error: '',
  loading: './static/img/public/loading.gif'
})
Vue.use(registerAsGlobal)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
