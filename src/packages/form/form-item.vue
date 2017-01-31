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
    export default {
        name:'ms-form-item',
        props: {
          label:{
            type:String
          },
          labelCol:{
            type:Object
          },
          wrapperCol:{
            type:Object
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
        components: {}
    }
</script>
<style>

</style>
