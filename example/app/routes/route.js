/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 2016/12/6
 * Time: 15:04
 */
'use strict';
import Layout from "../views/layout.vue";
import Panel from "../views/panel.vue";
import Grid from "../views/grid.vue";
import Carousel from "../views/carousel.vue";
import Menu from "../views/menu.vue";
import Form from "../views/form.vue";
import Datepicker from "../views/datepicker.vue";
import DatepickerField from "../views/datepicker-field.vue";
import Tabs from "../views/tabs.vue";
import TreeView from "../views/tree-view.vue";

export default [
    { path:'/',component: require("../views/index.vue")},
    { path:'/layout', component: Layout},
    { path:'/panel', component: Panel},
    { path: '/grid', component: Grid },
    { path: '/carousel', component: Carousel },
    { path: '/menu', component: Menu },
    { path: '/form', component: Form },
    { path: '/datepicker', component: Datepicker },
    { path: '/datepicker-field', component: DatepickerField },
    { path: '/tabs',component: Tabs},
    { path: '/tree-view',component: TreeView}
]