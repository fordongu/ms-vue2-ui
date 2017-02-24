<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com/
Date: 2017/2/23
Time: 14:26-->
<template>
  <div v-show="isActive" v-if="!closed">
    <div>{{content}}</div>
    <slot></slot>
  </div>
</template>
<script>
    export default {
        name:'ms-table-panel',
        props:{
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
                isActive:false,
                closed:false,
                tabs:null
            }
        },
        computed:{

        },
        created(){
            let me = this;
            me.getTabs();
            if(me.tabs){
                me.tabs.addItem(me);
            }
        },
        methods:{
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
