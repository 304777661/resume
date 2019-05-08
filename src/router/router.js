import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: [
        ////////////////////////登陆
        {
            path: '/Login',
            name: '/Login',
            components: require('../view/login/Login.vue')
        },
        {
            path: '/',
            name: '/',
            components: require('../view/index/Index.vue')
        }, {
            path: '/energyManage',
            name: '/EnergyManage',
            components: require('../view/energyManage/Index.vue')
        }
    ]
})