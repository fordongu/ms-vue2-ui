<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/13
Time: 09:33-->
<template>
  <tr v-show="show">
    <td v-for="(column,index) in columns"
        key="index"
        is="ms-grid-body-cell"
        :tree-structure="treeStructure"
        :row-index="rowIndex"
        :cell-index="index"
        :record="record"
        :column="column" >
    </td>
  </tr>
</template>
<script>
    import PropsMixin from "./mixins/PropsMixin";
    import MethodsMixin from "./mixins/MethodsMixin";

    import MsGridBodyCell from "./grid-body-cell.vue";
    import bus from "./GridEvents";
    export default {
      name:'ms-grid-body-row',
      mixins:[PropsMixin,MethodsMixin],
      data(){
        return {}
      },
      mounted(){

      },
      computed:{
        show:function(){
          let me = this;
          let record = me.record;
          let show = (record._parent?(record._parent._expanded && record._parent._show):true);
          debugger
          bus.$emit('show-children',me.rowIndex,show);
          return show;
        }
      },
      beforeUpdate(){
        debugger
      },
      watch:{

      },
      methods:{
        toggle:function(){
          console.log("toggle");
        }
      },
      components: {
        MsGridBodyCell
      }
    }
</script>
<style>

</style>
