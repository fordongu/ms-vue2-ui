<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com/
Date: 2017/1/31
Time: 21:19-->
<template>
<div>
  <ms-form ref="form" title="测试">
    <ms-form-item name="email" label="测试" :labelCol={span:2} :wrapperCol={span:10} :rules="rules"  >
      <ms-input name="email"  />
    </ms-form-item>
    <ms-form-item name="ee" label="测试" :labelCol={span:2} :wrapperCol={span:10} :rules="rules"  >
      <ms-input name="ee" v-model="a" />
    </ms-form-item>
    <div slot="buttons">
      <button>试试</button>
    </div>
  </ms-form>
  <div>
    <button @click="setFields">set</button>
    <button @click="resetFields">reset</button>
  </div>
</div>
</template>
<script>
    import {MsForm,MsFormItem,MsInput} from "../../../src/index";
    export default {
      data(){
        return {
          "a":"",
            "rules":[
                {required:true,message:'必须'}
            ]
        }
      },
      methods:{
          setFields:function(){
              let form = this.$refs['form'];
              form.setFieldsValue({'email':'ss'});
              form.validateFields((error)=>{
                  console.log(error);
              });
          },
          resetFields:function(){
            let me = this;
            let form = me.$refs['form'];
            form.resetFields();
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
