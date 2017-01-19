<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/13
Time: 09:48-->
<template>
  <td>
    <span v-if="spaceIconShow" v-for="space in record._level" class="ms-space"></span>
    <button v-if="toggleIconShow" @click="childrenExpandToggle">
      <span v-if="!record._expanded">+</span>
      <span v-if="record._expanded">-</span>
    </button>
    <ms-grid-body-cell-inner :_column="column" :_record="record" />
  </td>
</template>
<script>
    import Vue from "vue";

    import PropsMixin from "./mixins/PropsMixin";
    import MethodsMixin from "./mixins/MethodsMixin";

    import MsGridBodyCellInner from "./grid-body-cell-inner";

    import bus from "./GridEvents";
    export default {
      name:'ms-grid-body-cell',
      mixins:[PropsMixin,MethodsMixin],
      props:{
      },
      computed:{
        spaces:function(){
          let me = this;
          let record = me.record;
          let spaces = [];
          for(var i=0;i<record._level;i++){
            spaces.push(i);
          }
          return spaces;
        },
        spaceIconShow:function(){
          let me = this;
          if(
            me.treeStructure && me.cellIndex==0
            && ((!me.hasLeft && me.position=="center") || me.position=="left")
            && me.position!="right"
          ){
            return true;
          }
          return false;
        },
        toggleIconShow:function() {
          let me = this;
          if(me.treeStructure
          && me.cellIndex==0
          && me.record.children
          && me.record.children.length>0
          && ((!me.hasLeft && me.position=="center") || me.position=="left")
          && me.position!="right"
          ){
            return true;
          }
          return false;
        },
      },
      mounted(){

      },
      methods:{
        childrenExpandToggle:function(){
          let me = this;
          bus.$emit('ms-children-expand-toggle',me.rowIndex);
        }
      },
      components: {
        MsGridBodyCellInner
      }
    }
</script>
<style>

</style>
