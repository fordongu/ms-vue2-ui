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
        :grid-container="gridContainer"
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
        return {
          gridBodyRowHeight:0
        }
      },
      computed:{
        show:function(){
          let me = this;
          let record = me.record;
          let show = (record._parent?(record._parent._expanded && record._parent._show):true);
          bus.$emit('show-children',me.msGridId,me.rowIndex,show);
          Vue.nextTick(function(){
            let trHeight = me.$el.clientHeight;
            me.gridBodyRowHeight = trHeight;
          });
          return show;
        },
        heightStyleCompute:function(){
          let me = this;
          if(me.componentReady && me.show){
           // let trHeight = me.$el.clientHeight;
            if(me.record._height){
             // if(me.record._height < trHeight){
             //   me.record._height = trHeight;
             // }
             if(me.record._height < me.gridBodyRowHeight){
              me.record._height = me.gridBodyRowHeight;
             }
            }else {
             // Vue.set(me.record,'_height',trHeight);
              if(me.gridBodyRowHeight){
                Vue.set(me.record,'_height',me.gridBodyRowHeight);
              }
            }
            return {height:me.record._height+"px"};
          }
        }
      },
      mounted(){
        let me = this;
//me.setTrHeight();
      },
      beforeUpdate(){

      },
      updated(){
        let me = this;

      },
      methods:{
        setTrHeight:function(){
          let me = this;
          if(me.componentReady){
            let trHeight = me.$el.clientHeight;
            me.gridBodyRowHeight = trHeight;
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
