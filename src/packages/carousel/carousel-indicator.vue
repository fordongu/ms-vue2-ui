<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/15
Time: 15:10-->
<template>
  <li :data-slide-to="index"
      :class="{active:isActive}" @click="selectItem"></li>
</template>
<script>
    import bus from "./CarouselEvents";
    export default {
      props:{
        item:{

        },
        index:{
          type:Number,
          default(){
            return 0;
          }
        },
        currentIndex:{
          type:Number,
          default(){
            return 0;
          }
        }
      },
      computed:{
        isActive:function(){
          let me = this;
          return me.index == me.currentIndex;
        }
      },
      methods:{
        selectItem:function(){
          let me = this;
          bus.$emit('ms-carousel-select-item',me.index);
        }
      },
      components: {
      }
    }
</script>
<style>

</style>
