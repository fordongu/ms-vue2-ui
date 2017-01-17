<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/13
Time: 09:32-->
<template>
<div :style="[heightStyleCompute]" ref="ms_grid_body" @scroll="scroll">
  <table class="table" :style="[widthStyleCompute]" ref="ms_grid_body_table">
    <colgroup>
      <ms-grid-col v-for="(col,index) in columns" :col="col" />
    </colgroup>
    <tbody>
      <tr v-for="(record,index) in data"
          is="ms-grid-body-row"
          :tree-structure="treeStructure"
          :record="record"
          :row-index="index"
          :columns="columns" :ms-grid-id="msGridId" >
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
    import bus from "./GridEvents";
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
          if( me.componentReady && me.scrollY ){
            return {height:me.height+"px",overflowY:'auto'};
          }
        },
        widthStyleCompute:function(){
          let me = this;
          if( me.componentReady && me.scrollX ){
            return {width:me.width+"px",overflowX:'auto'};
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

      },
      mounted(){
        let me = this;
    //    me.getBodyHeightStyle();

      },
      methods:{
        scroll:function(e){
          let me = this;
          bus.$emit('ms-grid-body-scroll',me.msGridId,e);
        }
      },
      components: {
        MsGridBodyRow,
        MsGridCol
      }
    }
</script>
<style>

</style>
