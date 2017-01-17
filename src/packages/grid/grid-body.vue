<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/13
Time: 09:32-->
<template>
<div :style="[heightStyleCompute]">
  <table class="table">
    <colgroup>
      <ms-grid-col v-for="(col,index) in columns" :col="col" :flex-count="flexCount" :rest-width="restWidth" />
    </colgroup>
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
    import LifecycleMixin from "./mixins/LifecycleMixin";

    import MsGridBodyRow from "./grid-body-row.vue";
    import MsGridCol from "./grid-col.vue";
    export default {
      name:'ms-grid-body',
      mixins:[PropsMixin,MethodsMixin,LifecycleMixin],
      props:{

      },
      data(){
        return {
          bodyStyleData:{}
        }
      },
      computed:{
        heightStyleCompute:function(){
          let me = this;
          debugger;
          if( me.componentReady && me.scroll ){
            return {height:me.height+"px",overflowY:'auto'};
          }
        }
      },
      watch:{
        'data':{
          handler:function(){
          },
          deep: true
        }
      },
      created(){
        debugger
      },
      mounted(){
        let me = this;
    //    me.getBodyHeightStyle();
      },
      methods:{

      },
      components: {
        MsGridBodyRow,
        MsGridCol
      }
    }
</script>
<style>

</style>
