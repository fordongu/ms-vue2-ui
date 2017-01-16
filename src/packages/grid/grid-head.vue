<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/13
Time: 09:31-->
<template>
  <table class="ms-grid-head table table-bordered" >
    <colgroup>

    </colgroup>
    <thead>
      <tr v-for="(columnRow,rowIndex) in columnHeads">
        <td v-for="(column,cellIndex) in columnRow"
            is="ms-grid-head-item"
            :column="column"
            :max-column-level="maxColumnLevel">
        </td>
      </tr>
    </thead>
  </table>
</template>
<script>
    import MsGridHeadItem from "./grid-head-item.vue";
    export default {
      name:'ms-grid-head',
      props:{
        columnHeads:{
          type:Array
        },
        maxColumnLevel:{
          type:Number
        }
      },
      methods:{

      },
      components: {
        MsGridHeadItem
      }
    }
</script>
<style>

</style>
