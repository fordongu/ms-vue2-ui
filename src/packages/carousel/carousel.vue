<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/15
Time: 12:20-->
<template>
    <div class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li v-for="(item,index) in data" class="active"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
            <slot></slot>
        </div>
        <a class="left carousel-control"  role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control"  role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>
<script>

    export default{
        name:'ms-carousel',
        data(){
            return{
                data:[]
            }
        },
        components:{

        }
    }
</script>
<style>

</style>

