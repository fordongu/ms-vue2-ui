<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com/
Date: 2017/2/23
Time: 11:14-->
<template>
<div class="ms-tabs" :style="[outStyle]">
  <div class="ms-tab-head ms-head-top" ref="ms_tabs_head">
    <ul>
      <ms-tab-title v-for="(tab,index) in items"
                    :index="index"
                    :tab="tab"
                    :activeIndex="tabActiveIndex"
                    :onTabClick="tabClick"
                    :onTabClose="tabClose" />
    </ul>
  </div>
  <div class="ms-tab-body" :style="[innerStyle]">
    <slot></slot>
  </div>
</div>
</template>
<script>
    import MsTabTitle from "./tab-title.vue";
    export default {
      name:'ms-tabs',
      props:{
          layout:{
              type:String
          },
          width:{
              type:Number
          },
          height:{
              type:Number
          },
          activeIndex:{},
          defaultActiveIndex:{},
          tabPosition:{
              type:String,
              default(){
                  return "top";
              }
          },
          onTabClick:{
              type:Function
          }
      },
      data(){
          return {
              "componentReady":false,
              items:[],
              tabActiveIndex:null,
              outWidth:this.width,
              outHeight:this.height,
              innerWidth:null,
              innerHeight:null
          }
      },
      computed:{
          outStyle:function () {
              let me = this;
              if(me.componentReady){
                  let style = {};
                  if(me.outWidth){
                      Object.assign(style,{width:me.outWidth+'px'});
                  }
                  if(me.outHeight){
                      Object.assign(style,{height:me.outHeight+'px'});
                  }
                  return style;
              }
          },
          innerStyle:function () {
              let me = this;
              if(me.componentReady){
                  let style = {};
                  if(me.tabPosition=="top" || me.tabPosition=="bottom"){
                      if(me.outHeight){
                          let headHeight = $(me.$refs["ms_tabs_head"]).height();
                          Object.assign(style,{height:(me.outHeight-headHeight)+'px'});
                      }
                  }
                  return style;
              }
          }
      },
      watch:{
          activeIndex:{

          }
      },
      mounted(){
          let me = this;
          me.componentReady = true;
          me.initSize();
      },
      methods:{
          initSize(){
              let me = this;
              if(me.layout == "fit"){
                  if(me.$el.parentElement){
                      me.outWidth = $(me.$el.parentElement).width();
                      me.outHeight = $(me.$el.parentElement).height();
                  }
                  $(me.$el.parentElement).resize(function(){
                      me.outWidth = $(me.$el.parentElement).width();
                      me.outHeight = $(me.$el.parentElement).height();
                  });
              }
          },
          addItem(item){
            let me = this;
            me.items.push(item);
          },
          change(tab){
            let me = this;
            if(me.onTabClick) {
                me.onTabClick();
            }
          },
          tabClick(tab){
              let me = this;
              me.tabActiveIndex = tab.tabIndex;
          },
          tabClose(tab){
              let me = this;
              tab.closed = true;
              let itemIndex  = _.indexOf(me.items,tab);
              if(itemIndex>=0
                  && me.items.length>1
                  && me.tabActiveIndex==tab.tabIndex
                  && itemIndex == me.items.length-1 ){
                  me.tabActiveIndex = me.items[itemIndex-1].tabIndex;
              }
              me.items.splice(itemIndex,1);
          }
      },
      components: {
          MsTabTitle
      }
    }
</script>
<style>

</style>
