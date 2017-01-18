<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/13
Time: 09:30-->
<template>
  <div class="ms-grid">
    <div class="ms-grid-box" :style="[boxHeightCompute]">
      <ms-grid-scope v-if="hasLeftCompute"
                     :tree-structure="treeStructure"
                     position="left"
                     :data="dataData "
                     :origin-columns="columns"
                     :columns="leftColumnsData"
                     :max-column-level="maxColumnLevel"
                     :max-head-height="maxHeadHeight"
                     :height="heightCompute"
                     :width="leftWidthData"
                     :scrollX="scrollX"
                     :scrollY="scrollY"
                     :ms-grid-id="msGridId"/>
      <ms-grid-scope ref="ms_grid_scope_center"
                     :tree-structure="treeStructure"
                     :data="dataData "
                     :origin-columns="columns"
                     :columns="centerColumnsData"
                     :max-column-level="maxColumnLevel"
                     :max-head-height="maxHeadHeight"
                     :height="heightCompute"
                     :width="centerWidthCompute"
                     :left="centerLeft"
                     :has-left="hasLeftCompute"
                     :scrollX="scrollX"
                     :scrollY="scrollY"
                     :ms-grid-id="msGridId" />
      <ms-grid-scope v-if="hasRightCompute"
                     :tree-structure="treeStructure"
                     position="right"
                     :data="dataData "
                     :origin-columns="columns"
                     :columns="rightColumnsData"
                     :max-column-level="maxColumnLevel"
                     :max-head-height="maxHeadHeight"
                     :height="heightCompute"
                     :width="rightWidthData"
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
          maxHeadHeight:0,
          dataData:[],
          leftColumnsData:[],
          centerColumnsData:[],
          rightColumnsData:[],
          leftWidthData:0,
          centerWidthData:0,
          rightWidthData:0,
          centerLeft:0,
          hasLeftData:false,
          gridWidth:0,
          boxHeight:0
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
        boxHeightCompute:function(){
          let me = this;
          return {height:me.boxHeight+"px"};
        },
        centerWidthCompute:function(){
          let me = this;
          if(me.componentReady){
              //let gridWidth = me.$el.clientWidth;
              return me.gridWidth-me.leftWidthData-me.rightWidthData;
          }
        },
        hasLeftCompute:function(){
          let me = this;
          if(me.leftColumnsData && me.leftColumnsData.length>0){
            return true;
          }
          return false;
        },
        hasRightCompute:function(){
          let me = this;
          if(me.rightColumnsData && me.rightColumnsData.length>0){
            return true;
          }
          return false;
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
          bus.$on('ms-grid-head-height',function(gridId,height){
            if(me.msGridId == gridId){
              if(me.maxHeadHeight < height){
                me.maxHeadHeight = height;
              }
            }
          });
          bus.$on('ms-grid-scope-width-compute',function(gridId,position,gridScopeWidth){
            if(me.msGridId == gridId){
              if(position == "left"){
                me.leftWidthData = gridScopeWidth;
                me.centerLeft = gridScopeWidth;
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
        me.gridWidth = me.$el.clientWidth;
        if(me.componentReady != undefined){
            me.componentReady = true;
        }
        $(window).resize(function(){
          me.gridWidth = me.$el.clientWidth;
        });
      },
      updated(){
        let me = this;
        if(me.componentReady){
          let boxHeight  = me.$refs.ms_grid_scope_center.$el.clientHeight;
          me.boxHeight = boxHeight;
        }
      },
      methods:{
        columnsSplit:function(){
          let me = this;
          let leftColumns = [];
          let centerColumns = [];
          let rightColumns = [];
          _.forEach(_.cloneDeep(me.columns),function(column){
             if(column.lockable){
                if(column.lockPosition=="right"){
                  rightColumns.push(column);
                }else{
                  leftColumns.push(column);
                }
             }else {
                centerColumns.push(column);
             }
          });

          me.leftColumnsData = leftColumns;
          me.rightColumnsData = rightColumns;
          me.centerColumnsData = centerColumns;
         // me.leftColumnsData = _.cloneDeep(me.columns);
          if(me.leftColumnsData && me.leftColumnsData.length>0){
            me.hasLeftData = true;
          }
          //me.rightColumnsData = _.cloneDeep(me.columns);
        },
      },
      components: {
        MsGridScope
      }
    }
</script>
<style>

</style>
