<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/13
Time: 09:31-->
<template>
  <div class="ms-grid-head"  :style="[elStyleCompute]" >
    <div :class="{'ms-scroll-space':needScrollSpace}" :style="[divInnerStyleCompute]">
      <table class="table table-bordered" :style="[tableStyleCompute]" ref="ms_grid_head_table" >
        <thead>
          <tr v-for="(columnRow,rowIndex) in headColumns"
              is="ms-grid-head-row"
              :head-columns="headColumns"
              :head-row-index="rowIndex"
              :column-row="columnRow"
              :max-column-level="maxColumnLevel"
              :max-head-height="maxHeadHeight"
              :ms-grid-id="msGridId"
              :ms-grid-head-id="msGridHeadId"
              :allocated-height="allocatedHeight">
          </tr>
        </thead>
      </table>
    </div>
  </div>
</template>
<script>
    import Vue from "vue";
    import PropsMixin from "./mixins/PropsMixin";
    import MethodsMixin from "./mixins/MethodsMixin";
    import LifecycleMixin from "./mixins/LifecycleMixin";

    import MsGridHeadRow from "./grid-head-row.vue";
    import MsGridCol from "./grid-col.vue";

    import BrowserType from "../../utils/BrowserType.js";
    import bus from "./GridEvents";
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
        },
        maxHeadHeight:{
            type:Number,
            default(){
                return 0;
            }
        },
      },
      data(){
        return {
          msGridHeadId:_.uniqueId("ms_grid_head_"),
          allocatedHeight:0,
          headRowsHeight:0, //所有头部行的高度
        }
      },
      computed:{
        tableStyleCompute:function(){
          let me = this;
          if( me.componentReady ){
            let style = {};
            if(me.scrollX){
              if(me.needScrollSpace){
                Object.assign(style,{width:(me.width-17)+"px"});
              }else {
                Object.assign(style,{width:me.width+"px"});
              }
            }else {
              if(me.needScrollSpace){
                Object.assign(style,{width:(me.width-17)+"px"});
              }
            }
            return style;
          }
        },
        scrollStyleCompute:function(){
          let me = this;
          if( me.componentReady && me.scrollX ){
            return {overflowX:'hidden'};
          }
        },
        elStyleCompute:function(){
          let me = this;
          if( me.componentReady){
            let style = {};
            if( me.scrollX ){
              Object.assign(style,{overflowX:'hidden'});
            }
            return style;
          }
        },
        divInnerStyleCompute:function(){
          let me = this;
          if(me.componentReady){
            let style = {};
            if(me.scrollX){
              Object.assign(style,{width:me.width+"px"});
            }else {
              let elWidth = me.width;
              Object.assign(style,{width:elWidth+"px"});
            }
            return style;
          }
        }
      },
      created(){
        let me = this;

        bus.$on('ms-grid-body-scroll',function(gridId,gridScopeId,e){
          if(gridId==me.msGridId && gridScopeId==me.msGridScopeId && me.$el){
            if(me.$el.scrollLeft != e.target.scrollLeft){
                me.$el.scrollLeft = e.target.scrollLeft;
            }
          }
        });
        bus.$on('ms-grid-head-row-ready',function(gridId,gridHeadId,isLastRow,height){
            if(gridId==me.msGridId && gridHeadId==me.msGridHeadId){
                me.headRowsHeight += height;
                if(!isLastRow){
                  me.allocatedHeight += height;
                }
            }
        });
      },
      methods:{

      },
      mounted(){
        let me = this;

      },
      updated(){
        let me = this;
        if(me.componentReady){
          Vue.nextTick(function(){
            console.log(me.$refs.ms_grid_head_table.clientHeight);
            if(BrowserType.isIE() || BrowserType.isEdge()){
              bus.$emit('ms-grid-head-height',me.msGridId,$(me.$refs.ms_grid_head_table).height());
            }else {
              bus.$emit('ms-grid-head-height',me.msGridId,me.$refs.ms_grid_head_table.clientHeight);
            }

          });
        }
      },
      components: {
        MsGridHeadRow,
        MsGridCol
      }
    }
</script>
<style>

</style>
