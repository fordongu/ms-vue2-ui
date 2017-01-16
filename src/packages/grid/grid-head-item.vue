<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/16
Time: 14:04-->
<template>
  <td :colspan="colspan" :rowspan="rowspan">{{column.text}}</td>
</template>
<script>
    export default {
      name:'ms-grid-head-item',
      props:{
        column:{
          type:Object
        },
        maxColumnLevel:{
          type:Number
        }
      },
      computed:{
        colspan:function(){
          let me = this;
          if(me.column._leafCount == 0){
            return 1;
          }else {
            return me.column._leafCount;
          }
        },
        rowspan:function(){
          let me = this;
          if(me.column.columns && me.column.columns.length>0){
            return 1;
          }else {
            return me.maxColumnLevel - me.column._level +1;
          }
        }
      },
      components: {
      }
    }
</script>
<style>

</style>
