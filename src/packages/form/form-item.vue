<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com
Date: 2017/1/31
Time: 15:21-->
<template>
  <div class="ms-form-item form-group" :class="{'is-error':isError}">
    <label v-if="label"  :class="[labelClass]">{{label}}</label>
    <div :class="[wrapperClass]">
      <slot></slot>
      <div class="validate-message">{{validateMessage}}</div>
    </div>
  </div>
</template>
<script>
    import Vue from "vue";
    import schema from "async-validator";
    import bus from "./FormEvents.js";
    export default {
        name:'ms-form-item',
        props: {
          label:{
            type:String
          },
          name:{
            type:String
          },
          labelCol:{
            type:Object
          },
          wrapperCol:{
            type:Object
          },
          rules:{
              type:[Object,Array]
          }
        },
        data(){
          return {
            msForm:null,
            msField:null,
            value:null,
            isError:false,
            validateStatus:'success',
            validateMessage:null
          }
        },
        computed: {
          labelClass:function(){
            let me = this;
            if(me.labelCol){
              let col = "col-sm-";
              if(me.labelCol.span){
                col = col+me.labelCol.span;
              }else {
                col = col+"2";
              }
              return col+" control-label";
            }
          },
          wrapperClass:function(){
            let me = this;
            if(me.wrapperCol){
              let col = "col-sm-";
              if(me.wrapperCol.span){
                col = col+me.wrapperCol.span;
              }else {
                col = col+"10";
              }
              return col;
            }
          },
          fieldRules:function () {
            let me = this;
            if(me.rules){
                return me.rules;
            }
            if(me.form && me.form.rules){
                return me.form.rules[me.name];
            }
            return null;
          },
          form:function(){
              let me = this;
              let msForm = me.$parent;
              while (msForm){
                  if(msForm.$options.name == "ms-form"){
                      return msForm;
                  }
                  msForm = msForm.$parent;
              }

          }
        },
        created(){
          let me = this;
          if(me.form){
              bus.$emit('ms-form-item-add',me.form.msFormId,me);
              me.$watch('form.formData.'+me.name,function(newVal, oldVal){
                  me.value = newVal;
              });
          }
        },
        beforeMount(){
          let me = this;

        },
        mounted(){
          let me = this;
          let children = me.$children;
          if( children.length >0 ){
            me.msField = children[0];
            if( me.msField.fieldValue ){
              me.value = me.msField.fieldValue;
            }
            me.$watch('msField.fieldValue',function(newVal, oldVal){
              me.value = newVal;
            },{
              deep:true
            });
          }
        },
        watch:{
          'value':{
            handler:function(newVal,oldVal){
              let me = this;
              if(me.msField){
                  me.$set(me.msField,'fieldValue',newVal);
              }
              me.validate();
              bus.$emit('ms-form-set-data',me.name,newVal);
            }
          }
        },
        methods:{
            validate:function () {
                let me = this;
                let descriptor = {};
                descriptor[me.name] = me.fieldRules;
                let validator = new schema(descriptor);
                let val = {};
                val[me.name] = me.value;
                validator.validate(val, { firstFields: true }, (errors, fields) => {
                  if(errors) {
                    me.isError = true;
                    me.validateStatus = "error";
                    me.validateMessage = errors[0].message;
                  }else {
                    me.isError = false;
                    me.validateStatus = "success";
                    me.validateMessage = null;
                  }
                });
            }
        },
        components: {}
    }
</script>
<style>

</style>
