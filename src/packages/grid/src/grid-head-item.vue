<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/16
Time: 14:04-->
<template>
  <td :ms-grid-head-item-id="msGridHeadItemId"
      :colspan="colspan"
      :rowspan="rowspan"
      :style="[tdStyleCompute]">{{column.text}}</td>
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
      data(){
        return {
          msGridHeadItemId:_.uniqueId("ms_grid_head_item_")
        }
      },
      computed:{
        tdStyleCompute:function(){
          let me = this;
          let style = {};
          if(me.column.width){
            Object.assign(style,{width:me.column.width+'px'});
          }else if(me.column._width){
            Object.assign(style,{width:me.column._width+'px'});
          }
          if(me.componentReady){
            if(
              !me.column.columns
              || me.column.columns.length==0
            ){
              if(me.maxColumnLevel > me.column._level ){
                  let tdHeight = me.maxHeadHeight- me.allocatedHeight;
                  Object.assign(style,{height:tdHeight+'px'});
              }
            }
          }
          return style;
        },
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
      },
      updated(){
        let me = this;
        console.log(me.msGridHeadItemId+"|"+me.$el.clientHeight+"|"+me.$el.offsetHeight+"|"+$(me.$el).height());
      },
      components: {
      }
    }
</script>
<style>

</style>
