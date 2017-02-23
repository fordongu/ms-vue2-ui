<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com/
Date: 2017/2/23
Time: 13:43-->
<template>
  <div>
    <ms-tabs tabPosition="left">
      <ms-tab-panel title="Tab1" tabIndex="1" content="121211"></ms-tab-panel>
      <ms-tab-panel title="Tab2测试" tabIndex="2" content="121211ddddddd"></ms-tab-panel>
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
