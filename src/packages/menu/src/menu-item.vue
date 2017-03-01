<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com/
Date: 2017/1/25
Time: 16:32-->
<template>
  <li>
    <div class="ms-menu-item" :class="{'is-active':isActive}" @click="click">
      <a :target="target">
        <slot></slot>
      </a>
    </div>
  </li>
</template>
<script>
    export default {
        name:'ms-menu-item',
        props:{
          index:{
            type:String
          },
          target:{
            type:String
          },
          router:{
              type:[Object,String]
          },
          href:{
              type:String
          }
        },
        data(){
            return {
                msMenu:null
            };
        },
        computed:{
            isActive:function () {
                let me = this;
                if(me.msMenu.activeIndex == me.index){
                    return true;
                }
                return false;
            }
        },
        created(){
          let me = this;
          me.getMsMenu();
        },
        mounted(){
            let me = this;
        },
        updated(){
            let me = this;
        },
        methods:{
            getMsMenu:function(){
                let me = this;
                let msMenu = me.$parent;
                while (msMenu){
                  if(msMenu.$options.name == "ms-menu"){
                    me.msMenu = msMenu;
                    break;
                  }
                  msMenu = msMenu.$parent;
                }
            },
            click:function(){
                let me = this;
                if(me.msMenu && me.index){
                    me.msMenu.activeIndex = me.index;
                }
            }
        },
        components: {
        }
    }
</script>
<style>

</style>
