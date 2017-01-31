<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com/
Date: 2017/1/31
Time: 21:19-->
<template>
<div>
  <ms-form>
    <ms-form-item  :labelCol={span:2} :wrapperCol={span:10}>
      <ms-input/>
    </ms-form-item>
  </ms-form>
</div>
</template>
<script>
    import {MsForm,MsFormItem,MsInput} from "../../../src/index";
    export default {
      components: {
        MsForm,
        MsFormItem,
        MsInput
      }
    }
</script>
<style>

</style>
