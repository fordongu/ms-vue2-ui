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

    export default{
        name:'ms-carousel-item',
        props:{
            item:{

            }
        },
        data(){
            return{

            }
        },
        beforeCreate(){
            let me = this;

        },
        created(){
            let me = this;
           // me.$parent.data.push(me.item);
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

