<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/13
Time: 09:30-->
<template>
  <div class="ms-grid">
    <div style="position:relative;">
      <ms-grid-scope :tree-structure="treeStructure" position="left"
                     :data="dataData "
                     :origin-columns="columns"
                     :columns="leftColumnsData"
                     :max-column-level="maxColumnLevel"
                     :height="heightCompute"
                     :width="leftWidthData"
                     :scrollX="scrollX"
                     :scrollY="scrollY"
                     :ms-grid-id="msGridId"/>
      <ms-grid-scope :tree-structure="treeStructure"
                     :data="dataData "
                     :origin-columns="columns"
                     :columns="centerColumnsData"
                     :max-column-level="maxColumnLevel"
                     :height="heightCompute"
                     :width="centerWidthCompute"
                     :scrollX="scrollX"
                     :scrollY="scrollY"
                     :ms-grid-id="msGridId"/>

    </div>
  </div>
</template>
<script>
    import Vue from "vue";
    import MethodsMixin from "./mixins/MethodsMixin";

    import MsGridScope from "./grid-scope.vue";
    import bus from "./GridEvents";
    export default {
      name:'ms-grid',
      mixins:[MethodsMixin],
      props:{
        treeStructure:{
            type:Boolean,
            default:function() {
                return false;
            }
        },
        data:{
          type:Array,
          default:function(){
            return [];
          }
        },
        columns:{
          type:Array,
          default:function() {
            return [];
          }
        },
        height:{
          type:Number
        },
        scrollX:{
          type:Boolean,
          default(){
            return false;
          }
        },
        scrollY:{
          type:Boolean,
          default(){
            return false;
          }
        },
        columnMinWidth:{
          type:Number,
          default(){
            return 100;
          }
        }
      },
      data(){
        let me = this;
        return {
          msGridId:_.uniqueId("ms_grid_"),
          componentReady:false,
          maxColumnLevel:1,
          dataData:[],
          leftColumnsData:[],
          centerColumnsData:[],
          rightColumnsData:[],
          leftWidthData:0,
          centerWidthData:0,
          rightWidthData:0
        }
      },
      computed:{
        dataCompute:function() {
          let me = this;
          if(me.treeStructure){
            return me.dataFormat(me.data);
          }
          return me.data;
        },
        heightCompute:function(){
          let me = this;
          if(me.scrollY){
            return me.height;
          }
        },
        centerWidthCompute:function(){
          let me = this;
          if(me.componentReady){
              let gridWidth = me.$el.clientWidth;
              return gridWidth-me.leftWidthData-me.rightWidthData;
          }
        }
      },
      beforeCreate(){
        let me = this;
        //me.columnsSplit();
      },
      created(){
          let me = this;
          me.dataData = _.cloneDeep(me.dataFormat(me.data));
          me.columnsSplit();
          bus.$on('ms-grid-max-level',function(level){
            if(me.maxColumnLevel<level){
              me.maxColumnLevel = level;
            }
          });
          bus.$on('ms-grid-scope-width-compute',function(gridId,position,gridScopeWidth){
            if(me.msGridId == gridId){
              if(position == "left"){
                me.leftWidthData = gridScopeWidth;
              }
              if(position == "right"){
                me.rightWidthData = gridScopeWidth;
              }
            }
          });
          bus.$on('ms-children-expand-toggle',function(rowIndex){
            let record = me.dataData[rowIndex];
            record._expanded = !record._expanded;
          });
          bus.$on('show-children',function(gridId,rowIndex,show){
            Vue.set(me.dataData[rowIndex],'_show',show);
          });
      },
      mounted(){
        let me = this;
        if(me.componentReady != undefined){
            me.componentReady = true;
           // let gridWidth = me.$el.clientWidth;
        }
      },
      methods:{
        columnsSplit:function(){
          let me = this;
          me.centerColumnsData = _.cloneDeep(me.columns);
          me.leftColumnsData = _.cloneDeep(me.columns);
        },
      },
      components: {
        MsGridScope
      }
    }
</script>
<style>

</style>
