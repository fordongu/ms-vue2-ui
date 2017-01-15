<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/15
Time: 11:37-->
<template>
    <div class="item">
        <slot></slot>
    </div>
</template>
<script>
    import bus from "./CarouselEvents";
    export default{
        name:'ms-carousel-item',
        props:{
            item:{

            }
        },
        data(){
            return{
                index:0,
                currentIndex:0
            }
        },
        beforeCreate(){
            let me = this;

        },
        created(){
            let me = this;
            me.index = me.$parent.data.length;
            me.$parent.data.push(me.item);
            debugger
        },
        mounted(){
            debugger;
        },
        components:{

        }
    }
</script>
<style>

</style>

