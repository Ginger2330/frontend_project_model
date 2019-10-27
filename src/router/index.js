import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'

import Deshboard from '@/views/deshboard'
import Page1 from '@/views/page1'
import page_404 from '@/views/err-pages/404'

Vue.use(Router)

export default new Router({
    // mode:
    // linkActiveClass:
    routes: [
        {
            path: '/',
            redirect: 'deshboard'
        }, {
            path: '/deshboard',
            component: Layout,
            title: '首页',
            icon: 'el-icon-monitor',
            children: [
                {
                    path: '',
                    name: 'deshboard',
                    component: Deshboard,
                    meta: [{
                        title:'首页',
                        path: '/deshboard'
                    }]
                }
            ]
        }, {
            path: '/page1',
            component: Layout,
            title: '功能示例',
            icon: 'el-icon-data-line',
            children: [
                {
                    path: '',
                    name: 'page1',
                    component: Page1,
                    meta: [{
                        title: '首页',
                        path: '/deshboard'
                    }, {
                        title: '功能示例',
                        path: '/page1'
                    }]
                }
            ]
        }, {
            path: '/404',
            component: page_404,
            name: '404'
        }, {
            path: '*',
            redirect: '404'
        }
    ]
})