<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com/
Date: 2017/1/31
Time: 21:19-->
<template>
<div>
  <ms-form ref="form">
    <ms-form-item label="测试" :labelCol={span:2} :wrapperCol={span:10}>
      <ms-input name="email" v-model="a" :rules=[{max:10,required:true}] />
    </ms-form-item>
  </ms-form>
  <button @click="setFields">set</button>
</div>
</template>
<script>
    import {MsForm,MsFormItem,MsInput} from "../../../src/index";
    export default {
      data(){
        return {
          "a":"sss"
        }
      },
      methods:{
          setFields:function(){
              this.$refs['form'].setFieldsValue({'email':'ss'});
          }
      },
      components: {
        MsForm,
        MsFormItem,
        MsInput
      }
    }
</script>
<style>

</style>
