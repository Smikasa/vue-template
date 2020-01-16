import Vue from 'vue';
import Router from 'vue-router';
import { ExampleRoute } from './example/example.route';
import { AdminRoute } from './admin/admin.route';

Vue.use(Router);

export default new Router({
    routes: [
        // example 模块  路由为： /example
        ExampleRoute('/example'),
        // admin 模块  路由为根路由： / 
        AdminRoute('/'),
        // 404 模块
        {
            path: '*',
            component: () =>
                import ('@/app/views/404.vue')
        }
    ]
});