import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import yixinglabUI from '../src/index';
import zUI from '../src/components/vant';
import '../src/components/vant/style/lib/index.css';
// import yxUI from '../src/components/yx-ui/components';


Vue.use(VueRouter);
Vue.use(yixinglabUI);
Vue.use(zUI)
// Vue.use(yxUI);

// 开启debug模式
Vue.config.debug = true;

// 路由配置
const router = new VueRouter({
    routes: [
        {
            path: '/vanttest',
            component: require('./routers/vant/tabs_test.vue')
        },
        {
            path: '/dashboardtest',
            component: require('./routers/dashboard_test.vue')
        },
        {
            path: '/dashboardtest2',
            component: require('./routers/dashboard_test2.vue')
        },
        {
            path: '/dualcurvetest',
            component: require('./routers/dualcurve_test.vue')
        },
        {
            path: '/barchart_twodirection',
            component: require('./routers/barTwoDirection_test.vue')
        },
        {
            path: '/bubbleAnimateChartstest',
            component: require('./routers/bubbleAnimateCharts_test.vue')
        },
        {
            path: '/datatable_test',
            component: require('./routers/datatable_test.vue')
        }
    ]
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
