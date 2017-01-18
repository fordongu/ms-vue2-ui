<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/16
Time: 14:04-->
<template>
  <td :colspan="colspan" :rowspan="rowspan" :style="[tdHeightCompute]">{{column.text}}</td>
</template>
<script>
    import PropsMixin from "./mixins/PropsMixin";
    import MethodsMixin from "./mixins/MethodsMixin";
    import LifecycleMixin from "./mixins/LifecycleMixin";
    export default {
      name:'ms-grid-head-item',
      mixins:[PropsMixin,MethodsMixin,LifecycleMixin],
      props:{
        columnRow:{
          type:Array
        },
        column:{
          type:Object
        },
        maxColumnLevel:{
          type:Number
        },
        maxHeadHeight:{
            type:Number,
            default(){
                return 0;
            }
        },
        allocatedHeight:{
            type:Number,
            default(){
                return 0;
            }
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
        },
        tdHeightCompute:function(){
          let me = this;
          if(me.componentReady){
            if(
              !me.column.columns
              || me.column.columns.length==0
            ){
              if(me.maxColumnLevel > me.column._level ){
                  let tdHeight = me.maxHeadHeight- me.allocatedHeight;
                  return {height:tdHeight+'px'};
              }
            }
          }
        }
      },
      components: {
      }
    }
</script>
<style>

</style>
