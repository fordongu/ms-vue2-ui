<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com/
Date: 2017/1/25
Time: 16:38-->
<template>
  <li>
    <div class="ms-menu-item" @click="expandedToggle">
      <slot name="title"></slot>
      <i class="ms-menu-expand-icon glyphicon" :class="[iconClassCompute]"></i>
    </div>
    <ul class="ms-sub-menu" v-show="isOpened">
      <slot></slot>
    </ul>
  </li>
</template>
<script>
    export default {
        name:'ms-sub-menu',
        props:{
            index:{
              type:String
            }
        },
        data(){
            return {
                isOpened:false,
                msMenu:null
            };
        },
        computed:{
            iconClassCompute:function () {
                let me = this;
                if(me.msMenu.mode == "horizontal"){

                }else {
                    if(me.isOpened){
                        return "glyphicon-menu-up";
                    }else {
                        return "glyphicon-menu-down";
                    }
                }
            }
        },
        created(){
            let me = this;
            me.getMsMenu();
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
            expandedToggle:function(){
              let me = this;
              me.isOpened = !me.isOpened;
            },

        },
        components: {
        }
    }
</script>
<style>

</style>
