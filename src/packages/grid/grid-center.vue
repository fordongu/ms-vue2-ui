<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/13
Time: 09:30-->
<template>
  <div>
    <div></div>
    <div>
      <ms-grid-body :tree-structure="treeStructure" :data="data" :columns="columns"  />
    </div>
  </div>
</template>
<script>
    import PropsMixin from "./mixins/PropsMixin";
    import MethodsMixin from "./mixins/MethodsMixin";

    import MsGridBody from "./grid-body.vue";
    export default {
      name:'ms-grid-center',
      mixins:[PropsMixin,MethodsMixin],
      props:{
        centerColumns:{
          type:Array,
          default:function() {
            return [];
          }
        }
      },
      mounted(){
        debugger
      },
      components: {
        MsGridBody
      }
    }
</script>
<style>

</style>
