<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/14
Time: 23:58-->
<template>
  <div class="ms-carousel carousel slide">
    <ol class="carousel-indicators">

    </ol>
    <div class="carousel-inner" role="listbox">
      <slot></slot>
    </div>
    <a class="left carousel-control" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>
<script>
    export default {
      name:'ms-carousel',
      props:{
        data:{
          type:Array,
          default(){
            return [];
          }
        }
      },
      components: {
      }
    }
</script>
<style>

</style>
