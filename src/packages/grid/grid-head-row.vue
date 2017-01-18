<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/18
Time: 16:25-->
<template>
  <tr>
    <td v-for="(column,cellIndex) in columnRow"
        is="ms-grid-head-item"
        :column="column"
        :max-column-level="maxColumnLevel"
        :max-head-height="maxHeadHeight"
        :ms-grid-head-id="msGridHeadId"
        :allocated-height="allocatedHeight">
    </td>
  </tr>
</template>
<script>
    import PropsMixin from "./mixins/PropsMixin";
    import MethodsMixin from "./mixins/MethodsMixin";
    import LifecycleMixin from "./mixins/LifecycleMixin";

    import MsGridHeadItem from "./grid-head-item.vue";

    import bus from "./GridEvents";
    export default {
      name:'ms-grid-head-row',
      mixins:[PropsMixin,MethodsMixin,LifecycleMixin],
      props:{
        msGridHeadId:{
          type:String
        },
        headColumns:{
          type:Array
        },
        columnRow:{
          type:Array
        },
        headRowIndex:{
          type:Number
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
      mounted(){
        let me = this;
        let columnsRowCount = me.headColumns.length;
        if(me.headRowIndex < columnsRowCount-1){
          bus.$emit('ms-grid-head-row-ready',me.msGridId,me.msGridHeadId,me.$el.clientHeight);
        }
      },
      components: {
        MsGridHeadItem
      }
    }
</script>
<style>

</style>
