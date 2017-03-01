<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com/
Date: 2017/1/25
Time: 16:47-->
<template>
  <div>
    <ms-menu default-active="1">
      <ms-menu-item index="1">测试1</ms-menu-item>
      <ms-sub-menu>
        <template slot="title">测试2</template>
        <ms-menu-item index="2">第一级</ms-menu-item>
        <ms-menu-item index="3">第二级</ms-menu-item>
      </ms-sub-menu>
    </ms-menu>
  </div>
</template>
<script>
    import {MsMenu,MsSubMenu,MsMenuItem} from "../../../src/index";
    export default {
      components: {
        MsMenu,
        MsSubMenu,
        MsMenuItem
      }
    }
</script>
<style>

</style>
