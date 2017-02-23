/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 2017/1/15
 * Time: 12:40
 */
'use strict';
import {Layout} from "./packages/layout/index";
import {Panel} from "./packages/panel/index";
import {Grid} from "./packages/grid/index";
import {Tabs,TabPanel} from "./packages/tabs/index";
import {Carousel,CarouselItem} from "./packages/carousel/index";

import {Menu,SubMenu,MenuItem} from "./packages/menu/index";

import {Form,FormItem,Input,DatepickerField} from "./packages/form/index";

import {Datepicker} from "./packages/picker/index";

module.exports = {
    MsLayout:Layout,

    MsPanel:Panel,

    MsGrid:Grid,
    MsTabs:Tabs,
    MsTabPanel:TabPanel,
    MsCarousel:Carousel,
    MsCarouselItem:CarouselItem,

    MsMenu:Menu,
    MsSubMenu:SubMenu,
    MsMenuItem:MenuItem,

    MsForm:Form,
    MsFormItem:FormItem,
    MsInput:Input,
    MsDatepickerField:DatepickerField,

    MsDatepicker:Datepicker
}