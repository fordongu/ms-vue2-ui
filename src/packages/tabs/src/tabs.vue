<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com/
Date: 2017/2/23
Time: 11:14-->
<template>
<div class="ms-tabs">
  <div class="ms-tab-head ms-head-top">
    <ul>
      <ms-tab-title v-for="(tab,index) in items"
                    :index="index"
                    :tab="tab"
                    :activeIndex="tabActiveIndex"
                    :onTabClick="tabClick" :onTabClose="tabClose" />
    </ul>
  </div>
  <div class="ms-tab-body">
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
              items:[],
              tabActiveIndex:null
          }
      },
      watch:{
          activeIndex:{

          }
      },
      methods:{
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
