<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/13
Time: 09:31-->
<template>
  <div :style="[widthStyleCompute]">
    <table class="ms-grid-head table table-bordered" >
      <colgroup>
        <ms-grid-col v-for="(col,index) in cols" :col="col"  />
      </colgroup>
      <thead>
      <tr v-for="(columnRow,rowIndex) in headColumns">
        <td v-for="(column,cellIndex) in columnRow"
            is="ms-grid-head-item"
            :column="column"
            :max-column-level="maxColumnLevel">
        </td>
      </tr>
      </thead>
    </table>
  </div>
</template>
<script>
    import PropsMixin from "./mixins/PropsMixin";
    import MethodsMixin from "./mixins/MethodsMixin";
    import LifecycleMixin from "./mixins/LifecycleMixin";

    import MsGridHeadItem from "./grid-head-item.vue";
    import MsGridCol from "./grid-col.vue";
    export default {
      name:'ms-grid-head',
      mixins:[PropsMixin,MethodsMixin,LifecycleMixin],
      props:{
        headColumns:{
          type:Array
        },
        cols:{
          type:Array
        },
        maxColumnLevel:{
          type:Number
        }
      },
      computed:{
        widthStyleCompute:function(){
          let me = this;
          if( me.componentReady && me.scrollX ){
            return {width:me.width+"px"};
          }
        }
      },
      methods:{

      },
      components: {
        MsGridHeadItem,
        MsGridCol
      }
    }
</script>
<style>

</style>
