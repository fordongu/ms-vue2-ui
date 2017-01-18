<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/13
Time: 09:33-->
<template>
  <tr v-show="show" :style="[heightStyleCompute]">
    <td v-for="(column,index) in columns"
        key="index"
        is="ms-grid-body-cell"
        :position="position"
        :tree-structure="treeStructure"
        :row-index="rowIndex"
        :cell-index="index"
        :record="record"
        :column="column"
        :ms-grid-id="msGridId"
        :has-left="hasLeft" >
    </td>
  </tr>
</template>
<script>
    import Vue from "vue";

    import PropsMixin from "./mixins/PropsMixin";
    import MethodsMixin from "./mixins/MethodsMixin";
    import LifecycleMixin from "./mixins/LifecycleMixin";

    import MsGridBodyCell from "./grid-body-cell.vue";
    import bus from "./GridEvents";
    export default {
      name:'ms-grid-body-row',
      mixins:[PropsMixin,MethodsMixin,LifecycleMixin],
      props:{
        msGridHeadId:{
          type:String
        }
      },
      data(){
        return {}
      },
      computed:{
        show:function(){
          let me = this;
          let record = me.record;
          let show = (record._parent?(record._parent._expanded && record._parent._show):true);
          bus.$emit('show-children',me.msGridId,me.rowIndex,show);
          return show;
        },
        heightStyleCompute:function(){
          let me = this;
          if(me.componentReady && me.show){
            let trHeight = me.$el.clientHeight;
            if(me.record._height){
              if(me.record._height < trHeight){
                me.record._height = trHeight;
              }
            }else {
              Vue.set(me.record,'_height',trHeight);
            }
            return {height:me.record._height+"px"};
          }
        }
      },
      mounted(){
        let me = this;

      },
      beforeUpdate(){

      },
      methods:{
        setTrHeight:function(){
          let me = this;
          if(me.componentReady){
            let trHeight = me.$el.clientHeight;
            if(me.record._height){
             if(me.record._height < trHeight){
              me.record._height = trHeight;
             }
            }else {
              Vue.set(me.record,'_height',trHeight);
            }
          }
        }
      },
      components: {
        MsGridBodyCell
      }
    }
</script>
<style>

</style>
