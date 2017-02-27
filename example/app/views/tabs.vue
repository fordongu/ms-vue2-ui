<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com/
Date: 2017/2/23
Time: 13:43-->
<template>
  <div style="height: 300px;">
    <ms-tabs tabPosition="top" layout="fit">
      <ms-tab-panel title="Tab1" tabIndex="1" :closable=true content="1"></ms-tab-panel>
      <ms-tab-panel layout="fit" title="Tab2测试" tabIndex="2" :closable=true content="2"></ms-tab-panel>
      <ms-tab-panel title="Tab3测试" tabIndex="3" :closable=true content="3"></ms-tab-panel>
      <ms-tab-panel title="Tab4测试" tabIndex="4" :closable=true content="4"></ms-tab-panel>
    </ms-tabs>
  </div>
</template>
<script>
    import {MsTabs,MsTabPanel} from "../../../src/index";
    export default {
        components: {
            MsTabs,
            MsTabPanel
        }
    }
</script>
<style>

</style>
