/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 2016/12/6
 * Time: 15:04
 */
'use strict';
import Grid from "../views/grid.vue";
const Bar = { template: '<div>bar</div>' }

export default [
    { path:'/',component: require("../views/index.vue")},
    { path: '/foo', component: Bar },
    { path: '/grid', component: Grid }
]