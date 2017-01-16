<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/13
Time: 09:32-->
<template>
<div>
  <table class="table">
    <tbody>
      <tr v-for="(record,index) in data"
          is="ms-grid-body-row"
          :tree-structure="treeStructure"
          :record="record"
          :row-index="index"
          :columns="columns" >
      </tr>
    </tbody>
  </table>
</div>
</template>
<script>
    import PropsMixin from "./mixins/PropsMixin";
    import MethodsMixin from "./mixins/MethodsMixin";

    import MsGridBodyRow from "./grid-body-row.vue";
    export default {
      name:'ms-grid-body',
      mixins:[PropsMixin,MethodsMixin],
      props:{

      },
      watch:{
        'data':{
          handler:function(){
          },
          deep: true
        }
      },
      methods:{

      },
      mounted(){
      },
      components: {
        MsGridBodyRow
      }
    }
</script>
<style>

</style>
