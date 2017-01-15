/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 2016/12/6
 * Time: 14:48
 */
'use strict';
import "bootstrap/dist/css/bootstrap.css"

import Vue from "vue";
import VueRouter from 'vue-router';

import App from "./app.vue";

import routers from "./routes/route";
console.log(routers);
Vue.use(VueRouter);


const router = new VueRouter({
    routes:routers
});

new Vue({
    router,
    render: h=>h(App)
}).$mount('#app')
