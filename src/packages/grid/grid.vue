<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/13
Time: 09:30-->
<template>
  <div class="ms-grid">
    <ms-grid-scope :tree-structure="treeStructure"
                    :data="dataData "
                    :origin-columns="columns"
                    :columns="centerColumnsData"  />
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
        }
      },
      data(){
        let me = this;
        return {
          dataData:[],
          leftColumnsData:[],
          centerColumnsData:[],
          rightColumnsData:[]
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
        }
      },
      beforeCreate(){
        let me = this;
        //me.columnsSplit();
      },
      created(){
          let me = this;
          me.dataData = me.dataFormat(me.data);
          me.columnsSplit();

          bus.$on('ms-children-expand-toggle',function(rowIndex){
            let record = me.dataData[rowIndex];
            record._expanded = !record._expanded;
          });
          bus.$on('show-children',function(rowIndex,show){
            Vue.set(me.dataData[rowIndex],'_show',show);
          });
      },
      methods:{
        columnsSplit:function(){
          let me = this;
          me.centerColumnsData = me.columns;
        },
      },
      components: {
        MsGridScope
      }
    }
</script>
<style>

</style>
