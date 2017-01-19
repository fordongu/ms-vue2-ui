<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/13
Time: 09:32-->
<template>
<div class="ms-grid-body" :style="[divStyleCompute]" ref="ms_grid_body" @scroll="scroll">
  <div ref="ms_grid_body_inner">
    <table class="table" :style="[tableStyleCompute]" >
      <colgroup>
        <ms-grid-col v-for="(col,index) in columns" :col="col" />
      </colgroup>
      <tbody>
      <tr v-for="(record,index) in data"
          is="ms-grid-body-row"
          :grid-container="gridContainer"
          :position="position"
          :tree-structure="treeStructure"
          :record="record"
          :row-index="index"
          :columns="columns"
          :ms-grid-id="msGridId"
          :has-left="hasLeft">
      </tr>
      </tbody>
    </table>
  </div>
</div>
</template>
<script>
    import Vue from "vue";

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
          msGridBodyId:_.uniqueId("ms_grid_body_"),
          bodyStyleData:{}
        }
      },
      computed:{
        divStyleCompute:function(){
          let me = this;
          if( me.componentReady){
            let style = {height:me.height+"px"};
            if(me.scrollY){
              if(me.position == "center"){
                Object.assign(style,{overflowY:'auto'});
              }else {
                Object.assign(style,{overflowY:'hidden'});
              }
            }
            if(me.scrollY && me.position=="center"){
              Object.assign(style,{overflowX:'auto'});
            }else{
              Object.assign(style,{overflowX:'hidden'});
            }
            return style;
          }
        },
        tableStyleCompute:function(){
          let me = this;
          if( me.componentReady){
            let style = {};
            if(me.scrollX){
              if(me.needScrollSpace){
                Object.assign(style,{width:(me.width-15)+"px"});
              }else {
                Object.assign(style,{width:me.width+"px"});
              }
            }
            return Object.assign(style,{overflowX:'auto'});
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
        let me = this;
        bus.$on('ms-grid-body-scroll',function(gridId,e){
           if(me.msGridId == gridId){
              if(e.target!=me.$el && me.$el ){
                me.$el.scrollTop = e.target.scrollTop;
              }
           }
        });
      },
      mounted(){
        let me = this;
    //    me.getBodyHeightStyle();
              Vue.nextTick(function(){
                  me.checkScrollSpace();
              });
      },
      methods:{
        scroll:function(e){
          let me = this;
          bus.$emit('ms-grid-body-scroll',me.msGridId,e);
        },
        checkScrollSpace:function(){
          let me = this;
          if(me.componentReady && me.scrollY){
              let result = false;
              if(me.$el.offsetWidth > me.$refs.ms_grid_body_inner.offsetWidth){
                result = true;
              }
              bus.$emit('ms-grid-scroll-space',me.msGridId,result);
          }
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
