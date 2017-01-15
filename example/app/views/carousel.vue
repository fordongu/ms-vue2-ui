<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/14
Time: 23:53-->
<template>
<div class="carousel">
    <carousel>

    </carousel>
</div>
</template>
<script>
    import {Carousel} from "../../../src/index";
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
        Carousel
      }
    }
</script>
<style>

</style>
