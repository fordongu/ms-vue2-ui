<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com/
Date: 2017/1/25
Time: 16:47-->
<template>
  <div>
    <ms-menu>
      <sub-menu>
        <ms-menu-item>第一级</ms-menu-item>
        <ms-menu-item>第二级</ms-menu-item>
        <sub-menu>
          <ms-menu-item>第一级</ms-menu-item>
          <ms-menu-item>第二级</ms-menu-item>
        </sub-menu>
      </sub-menu>
      <sub-menu>
        <ms-menu-item>第一级</ms-menu-item>
        <ms-menu-item>第二级</ms-menu-item>
      </sub-menu>
    </ms-menu>
  </div>
</template>
<script>
    import {Menu,SubMenu,MenuItem} from "../../../src/index";
    export default {
      components: {
        MsMenu:Menu,
        SubMenu,
        MsMenuItem:MenuItem
      }
    }
</script>
<style>

</style>
