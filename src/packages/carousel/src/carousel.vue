<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/15
Time: 12:20-->
<template>
    <div class="ms-carousel carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <ms-carousel-indicator v-for="(item,index) in data"
                                   :item="item"
                                   :index="index"
                                   :current-index="currentIndex">
            </ms-carousel-indicator>
        </ol>
        <div class="carousel-inner" role="listbox">
            <slot></slot>
        </div>
        <a v-if="arrowShow" class="left carousel-control"  role="button" data-slide="prev" @click="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a v-if="arrowShow" class="right carousel-control"  role="button" data-slide="next" @click="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>
<script>
    import bus from "./CarouselEvents";
    import MsCarouselIndicator from "./carousel-indicator.vue";
    export default{
        name:'ms-carousel',
        props:{
            interval:{
                type:Number,
                default(){
                    return 3000;
                }
            },
            autoPlay:{
                type:Boolean,
                default(){
                    return true;
                }
            },
            arrow:{
                type:String,
                default(){
                    return "always";
                }
            }
        },
        data(){
            return{
                data:[],
                currentIndex:0
            }
        },
        computed:{
            arrowShow:function() {
                let me = this;
                if(me.arrow=="never"){
                    return false;
                }
                return true;
            }
        },
        watch:{
            'currentIndex':{
                handler:function(newVal, oldVal){
                    let me = this;
                    if(newVal != oldVal){
                        bus.$emit('ms-carousel-select-item',newVal);
                    }
                }
            }
        },
        created(){
            let me = this;
            bus.$on('ms-carousel-select-item',function(index){
                if(me.currentIndex != index){
                    me.currentIndex = index;
                }
            });
        },
        mounted(){
            let me = this;
            if(me.autoPlay){
                setInterval(me.next,me.interval);
            }
        },
        methods:{
            prev:function(){
                let me = this;
                let itemCount = me.data.length;
                itemCount = (itemCount>0)?(itemCount-1):0;
                if(me.currentIndex==0) {
                    me.currentIndex = itemCount;
                }else {
                    me.currentIndex = me.currentIndex-1;
                }
            },
            next:function(){
                let me = this;
                let itemCount = me.data.length;
                itemCount = (itemCount>0)?(itemCount-1):0;
                if(me.currentIndex==itemCount) {
                    me.currentIndex = 0;
                }else {
                    me.currentIndex = me.currentIndex+1;
                }
            }
        },
        components:{
            MsCarouselIndicator
        }
    }
</script>
<style>

</style>

