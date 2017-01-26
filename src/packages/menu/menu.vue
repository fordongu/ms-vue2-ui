<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com/
Date: 2017/1/25
Time: 16:31-->
<template>
  <div class="ms-menu">
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
            }
        },
        data(){
            return {
                activeIndex:null
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
