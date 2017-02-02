<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com
Date: 2017/1/31
Time: 15:21-->
<template>
  <div class="form-group">
    <label v-if="label"  :class="[labelClass]">{{label}}</label>
    <div :class="[wrapperClass]">
      <slot></slot>
    </div>
  </div>
</template>
<script>
    import Vue from "vue";
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
          }
        },
        data(){
          return {
            msForm:null,
            msField:null,
            value:null
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
          }
        },
        created(){
          let me = this;
          me.getForm();
          if(me.msForm && me.name){
            Vue.set(me.msForm.fields,me.name,me);
            Vue.set(me.msForm.formData,me.name,me.value);
            me.$watch('msForm.formData.'+me.name,function(newVal, oldVal){
                me.value = newVal;
                console.log(newVal);
            });
          }
        },
        beforeMount(){
          let me = this;

        },
        mounted(){
          let me = this;
          let children = me.$children;
          if(children.length >0 ){
            me.msField = children[0];
            me.value = me.msField.value;
            me.$watch('msField.value',function(newVal, oldVal){
              me.value = newVal;
             // bus.$emit('ms-form-set-data',me.name,newVal);
              //me.$set('msForm.formData',me.name,newVal);
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
                me.msField.handleChange(newVal);
              }
              bus.$emit('ms-form-set-data',me.name,newVal);
            },
            immediate: true
          }
        },
        methods:{
          getForm:function(){
            let me = this;
            if(me.$parent && me.$parent.$options.name=='ms-form'){
              me.msForm = me.$parent;
            }
          }
        },
        components: {}
    }
</script>
<style>

</style>
