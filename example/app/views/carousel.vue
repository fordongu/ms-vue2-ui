<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/14
Time: 23:53-->
<template>
  <div class="">
    <carousel>
      <carousel-item v-for="(item,index) in data" :item="item">
        sssss
      </carousel-item>
    </carousel>
</div>
</template>
<script>
    import {Carousel,CarouselItem} from "../../../src/index";
  //  let CarouselItem = Carousel.CarouselItem
    export default {
        data(){
            return {
                data:[
                    {
                        pic:'s'
                    },
                    {
                        pic:'ddd'
                    }
                ]
            }
        },
      components: {
        Carousel,
        CarouselItem
      }
    }
</script>
<style>

</style>
