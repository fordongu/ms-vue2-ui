<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/13
Time: 09:30-->
<template>
  <div class="ms-grid">
    <div>
      <ms-grid-scope :tree-structure="treeStructure"
                     :data="dataData "
                     :origin-columns="columns"
                     :columns="centerColumnsData"
                     :max-column-level="maxColumnLevel"
                     :height="heightCompute"
                     :width="centerWidthData"
                     :scrollX="scrollX"
                     :scrollY="scrollY" :ms-grid-id="msGridId"/>
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
          maxColumnLevel:1,
          dataData:[],
          leftColumnsData:[],
          centerColumnsData:[],
          rightColumnsData:[],
          centerWidthData:0
        }
      },
      computed:{
        dataCompute:function() {
           let me = this;
           debugger
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
        me.centerWidthData = me.$el.clientWidth;
      },
      methods:{
        columnsSplit:function(){
          let me = this;
          me.centerColumnsData = _.cloneDeep(me.columns);
        },
      },
      components: {
        MsGridScope
      }
    }
</script>
<style>

</style>
