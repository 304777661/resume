import Vue from 'vue'
import Router from 'vue-router'
// import Index from '../view/index/Index.vue'
Vue.use(Router)
    // var pageUrl = path =>
    //     import (`./../view/${path}.vue`)
    // function pageUrl(path) {
    //     return import (`./../view/${path}.vue`)
    // }

export default new Router({
    routes: [{
        path: '/',
        name: '/',
        // components: pageUrl('index/Index')
        components: require('../view/index/Index.vue')
    }, {
        path: '/energyManage',
        name: '/EnergyManage',
        // components: pageUrl('index/Index')
        components: require('../view/energyManage/Index.vue')
    }]
})