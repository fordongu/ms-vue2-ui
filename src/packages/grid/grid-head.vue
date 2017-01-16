<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/13
Time: 09:31-->
<template>
  <table class="ms-grid-head table table-bordered" >
    <colgroup>
      <ms-grid-col v-for="(col,index) in cols" :col="col" :flex-count="flexCount" :rest-width="restWidth" />
    </colgroup>
    <thead>
      <tr v-for="(columnRow,rowIndex) in headColumns">
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
    import MsGridCol from "./grid-col.vue";
    export default {
      name:'ms-grid-head',
      props:{
        headColumns:{
          type:Array
        },
        cols:{
          type:Array
        },
        maxColumnLevel:{
          type:Number
        },
        restWidth:{
          type:Number
        },
        flexCount:{
          type:Number
        }
      },
      methods:{

      },
      components: {
        MsGridHeadItem,
        MsGridCol
      }
    }
</script>
<style>

</style>
