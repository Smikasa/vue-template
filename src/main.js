import Vue from 'vue';
import App from './App.vue';
import router from './app/router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/styles/common.scss';
import '@/styles/reset.css';

// 注册全局组件
import CommonPart from './common';
// store
import store from './app/store';

Vue.use(CommonPart);
Vue.use(ElementUI, { size: 'small' });
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');