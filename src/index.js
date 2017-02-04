/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 2017/1/15
 * Time: 12:40
 */
'use strict';
import {Layout} from "./packages/layout/index";
import {MsGrid} from "./packages/grid/index";
import {Carousel,CarouselItem} from "./packages/carousel/index";

import {Menu,SubMenu,MenuItem} from "./packages/menu/index";

import {Form,FormItem,Input} from "./packages/form/index";

import {Datepicker} from "./packages/picker/index";

module.exports = {
    Layout,
    MsGrid,
    Carousel,
    CarouselItem,

    Menu,
    SubMenu,
    MenuItem,

    MsForm:Form,
    MsFormItem:FormItem,
    MsInput:Input,

    MsDatepicker:Datepicker
}