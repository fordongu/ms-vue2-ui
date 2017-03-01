<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com/
Date: 2017/2/23
Time: 14:26-->
<template>
  <div v-show="isActive" v-if="!closed" :style="[outStyle]">
    <div v-if="content">{{content}}</div>
    <slot v-if="!content"></slot>
  </div>
</template>
<script>
    export default {
        name:'ms-table-panel',
        props:{
            layout:{
                type:String
            },
            title:{},
            tabIndex:{},
            content:{},
            closable:{
                type:Boolean,
                default(){
                    return false;
                }
            },
        },
        data(){
            return {
                "componentReady": false,
                isActive: false,
                closed: false,
                tabs: null,
                outWidth: null,
                outHeight: null,
            }
        },
        computed:{
            outStyle:function () {
                let me = this;
                if(me.componentReady){
                    let style = {};
                    if(me.outWidth){
                        Object.assign(style,{width:me.outWidth+'px'});
                    }
                    if(me.outHeight){
                        Object.assign(style,{height:me.outHeight+'px'});
                    }
                    return style;
                }
            }
        },
        created(){
            let me = this;
            me.getTabs();
            if(me.tabs){
                me.tabs.addItem(me);
            }
        },
        mounted() {
            let me = this;
            me.componentReady = true;
            me.initSize();
        },
        methods:{
            initSize() {
                let me = this;
                if(me.layout == "fit"){
                    if(me.$el.parentElement){
                        me.outWidth = $(me.$el.parentElement).width();
                        me.outHeight = $(me.$el.parentElement).height();
                    }
                    $(me.$el.parentElement).resize(function(){
                        me.outWidth = $(me.$el.parentElement).width();
                        me.outHeight = $(me.$el.parentElement).height();
                    });
                }
            },
            getTabs(){
                let me = this;
                let tabs = me.$parent;
                while(tabs){
                    if(tabs.$options.name == "ms-tabs"){
                        me.tabs = tabs;
                    }
                    tabs = tabs.$parent;
                }
            }
        },
        components: {}
    }
</script>
<style>

</style>
