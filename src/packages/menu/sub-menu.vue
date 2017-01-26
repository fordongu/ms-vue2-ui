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
      <i class="ms-menu-expand-icon glyphicon" :class="{'glyphicon-menu-down':!showData,'glyphicon-menu-up':showData}"></i>
    </div>
    <ul class="ms-sub-menu" v-show="showData">
      <slot></slot>
    </ul>
  </li>
</template>
<script>
    export default {
        name:'ms-sub-menu',
        props:{
            index:{

            }
        },
        data(){
            return {
                showData:false
            };
        },
        computed:{
            showCompute:function () {
                return false;
            }
        },
        methods:{
            expandedToggle:function(){
              let me = this;
              me.showData = !me.showData;
            }
        },
        components: {
        }
    }
</script>
<style>

</style>
