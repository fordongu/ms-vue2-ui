/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 2016/12/6
 * Time: 15:04
 */
'use strict';
import Layout from "../views/layout.vue";
import Grid from "../views/grid.vue";
import Carousel from "../views/carousel.vue";
import Menu from "../views/menu.vue";
import Form from "../views/form.vue";
import Datepicker from "../views/datepicker.vue";

export default [
    { path:'/',component: require("../views/index.vue")},
    { path:'/layout', component: Layout},
    { path: '/grid', component: Grid },
    { path: '/carousel', component: Carousel },
    { path: '/menu', component: Menu },
    { path: '/form', component: Form },
    { path: '/datepicker', component: Datepicker }
]