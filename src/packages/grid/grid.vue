<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/13
Time: 09:30-->
<template>
  <div>
    <ms-grid-center :tree-structure="treeStructure"
                    :data="dataCompute " :columns="columns" />
  </div>
</template>
<script>
    import MethodsMixin from "./mixins/MethodsMixin";

    import MsGridCenter from "./grid-center.vue";
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
      computed:{
        dataCompute:function() {
           let me = this;
          if(me.treeStructure){
            return me.dataFormat(me.data);
          }
          return me.data;
        }
      },
      components: {
        MsGridCenter
      }
    }
</script>
<style>

</style>
