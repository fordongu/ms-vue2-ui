<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/13
Time: 09:32-->
<template>
<div class="ms-grid-body" :class="[{'ms-grid-body-bottom':showBottom}]" :style="[divStyleCompute]" ref="ms_grid_body" @scroll="scroll" >
  <div ref="ms_grid_body_inner" :style="[boxStyleCompute]">
      <table ref="ms_grid_body_table" class="table" :class="{'table-bordered':bordered}" :style="[tableStyleCompute]" >
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

    import BrowserType from "../../../utils/BrowserType.js";

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
        showBottom:function(){
           let me = this;
          if(me.needScrollXSpace && me.position!="center"){
            return true;
          }
          return false;
        },
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
            if(me.needScrollXSpace && me.position!="center" ){
                Object.assign(style,{borderBottomWidth:me.scrollWidth+"px"});
            }
            return style;
          }
        },
        boxStyleCompute:function(){
          let me = this;
          if( me.componentReady){
            let style = {};
            if(me.scrollX){
              if(me.needScrollSpace){
                Object.assign(style,{width:(me.width-me.scrollWidth)+"px"});
              }else {
                Object.assign(style,{width:me.width+"px"});
              }
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
                Object.assign(style,{width:(me.width-me.scrollWidth)+"px"});
              }else {
                Object.assign(style,{width:me.width+"px"});
              }
            }
            return style;
          }
        }
      },
      watch:{

      },
      created(){
        let me = this;
        bus.$on('ms-grid-body-scroll',function(gridId,gridScopeId,e){
           if(me.msGridId == gridId){
              if(e.target!=me.$el && me.$el ){
                me.$el.scrollTop = e.target.scrollTop;
              }
           }
        });
        bus.$on('ms-grid-body-mouse-scroll-y',function(gridId,gridScopeId,value){
          if(me.msGridId == gridId){
            me.$el.scrollTop = me.$el.scrollTop-value;
          }
        });
      },
      mounted(){
        let me = this;
        me.registerMouseScroll();
      },
      updated(){
        let me = this;
        Vue.nextTick(function(){
           me.checkScrollSpace();
        });
      },
      methods:{
        registerMouseScroll:function(){
          let me = this;
          if(BrowserType.isFirefox()){
            me.$el.addEventListener('DOMMouseScroll',me.mouseScroll,false);
          }else {
             me.$el.onmousewheel=me.$el.onmousewheel=me.mouseScroll;
          }
        },
        mouseScroll:function(e){
          let me = this;
          let value = 0;
          if(BrowserType.isFirefox()){
            value =  e.detail * 4;
          }else {
            if(BrowserType.isChrome()){
              value = e.wheelDelta/120 * 4;
            }else if(BrowserType.isSafari()){
              value = e.wheelDelta/12 * 4;
            }
          }
          bus.$emit('ms-grid-body-mouse-scroll-y',me.msGridId,me.msGridScopeId,value);
        },
        scroll:function(e){
          let me = this;
          console.log("-------");
          bus.$emit('ms-grid-body-scroll',me.msGridId,me.msGridScopeId,e);
        },
        checkScrollSpace:function(){
          let me = this;
          if(me.componentReady && me.position=="center"){
              if(me.scrollY){
                let result = false;
                if(me.$el.offsetWidth > me.$el.clientWidth){
                    bus.$emit('ms-grid-scroll-width',me.msGridId,(me.$el.offsetHeight-me.$el.clientHeight));
                    result = true;
                }
                bus.$emit('ms-grid-scroll-space-y',me.msGridId,result);
              }
              if(me.scrollX){
                let result = false;
                if(me.$el.offsetHeight>me.$el.clientHeight){
                    bus.$emit('ms-grid-scroll-width',me.msGridId,(me.$el.offsetHeight-me.$el.clientHeight));
                    result = true;
                }
                bus.$emit('ms-grid-scroll-space-x',me.msGridId,result);
              }
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
