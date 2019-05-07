import Vue from 'vue'
import App from './App.vue'
import './assets/css/main.scss'
import './assets/css/index.scss'
import './assets/font/iconfont.css'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './assets/css/animate.css'

// 路由
import router from './router/router.js'

import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.use(iView);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')