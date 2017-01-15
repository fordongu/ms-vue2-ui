<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/14
Time: 23:53-->
<template>
<<<<<<< HEAD:example/app/views/carousel.vue

=======
  <div>
    <div></div>
    <div>
      <ms-grid-body :tree-structure="treeStructure" :data="data" :columns="columns"  />
    </div>
  </div>
>>>>>>> feature/grid:src/packages/grid/grid-center.vue
</template>
<script>
    import PropsMixin from "./mixins/PropsMixin";
    import MethodsMixin from "./mixins/MethodsMixin";

    import MsGridBody from "./grid-body.vue";
    export default {
<<<<<<< HEAD:example/app/views/carousel.vue
=======
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
>>>>>>> feature/grid:src/packages/grid/grid-center.vue
      components: {
        MsGridBody
      }
    }
</script>
<style>

</style>
