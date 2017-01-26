<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com/
Date: 2017/1/25
Time: 16:31-->
<template>
  <div class="ms-menu" :class="[modeClass]">
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>
<script>
    export default {
        name:'ms-menu',
        props:{
            defaultActive:{
              type:String
            },
            mode:{
                type:String,
                default(){
                    return "vertical";
                }
            },
            router:{
              type:Boolean,
              default(){
                  return false;
              }
            }
        },
        data(){
            return {
                activeIndex:null
            }
        },
        computed:{
            modeClass:function () {
                let me = this;
                if(me.mode == "vertical"){
                    return "ms-menu-vertical";
                }else if(me.mode == "horizontal"){
                    return "ms-menu-horizontal";
                }
                return "ms-menu-horizontal";
            }
        },
        created(){
            let me = this;
            if(me.defaultActive){
                me.activeIndex = me.defaultActive;
            }
        },
        components: {
        }
    }
</script>
<style>

</style>
