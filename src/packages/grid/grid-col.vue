<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/16
Time: 10:34-->
<template>
  <col :width="width">
</template>
<script>
    export default {
      name:'ms-grid-col',
      props:{
        col:{
          type:Object
        },
        flexCount:{
          type:Number,
          default(){
            return 0;
          }
        },
        restWidth:{
          type:Number,
          default(){
            return 0;
          }
        }
      },
      computed:{
        width:function(){
          let me = this;
          if(me.col.width){
            return me.col.width;
          }else {
            return me.col._width;
          }
        }
      },
      components: {
      }
    }
</script>
<style>

</style>
