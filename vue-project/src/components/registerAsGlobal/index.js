// // 注册header为全局组件
import headerNavigation from '../headerNavigation/headerNavigation.vue'
// import headerNavigation from '../headerNavigation/test.vue'
// // 注册noData为全局组件
// import noData from '../noData/index.vue'
// // 注册clikcLoading为全局组件
// import clickLoading from '../clickLoading/index.vue'
// // 注册pageDataLoading为全局组件
// import pageDataLoading from '../pageDataLoading/index.vue'
// // 注册滑动组件为全局组件(主要使用要在class="pageFullScreen"里面实现浏览器往下拉不显示域名)
// import scroll from '../scroll/index.vue'
export default (Vue) => {
    Vue.component('headerNavigation', headerNavigation)
}
