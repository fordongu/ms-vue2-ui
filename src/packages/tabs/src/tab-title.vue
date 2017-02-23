<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com/
Date: 2017/2/23
Time: 14:58-->
<template>
  <li role="presentation" class="ms-tab-title" :class="[{'active':isActive}]" @click="tabClick"><a><span>{{tab.title}}</span><i class=""></i></a></li>
</template>
<script>
    export default {
        name:'ms-tab-title',
        props:{
            tab:{},
            index:{},
            activeIndex:{},
            onTabClick:{
                type:Function
            }
        },
        data(){
            return {

            };
        },
        computed:{
            isActive:function(){
                let me = this;
                if(me.activeIndex){
                    if(me.tab.tabIndex == me.activeIndex){
                        me.tab.isActive = true;
                        return true;
                    }else {
                        me.tab.isActive = false;
                    }
                }else {
                    if(me.index ==0){
                        me.tab.isActive = true;
                        return true;
                    }else {
                        me.tab.isActive = false;
                    }
                }
            }
        },
        created(){
            let me = this;

        },
        methods:{
          tabClick(){
            let me = this;
            if(me.onTabClick){
                me.onTabClick(me.tab);
            }
          }
        },
        components: {}
    }
</script>
<style>

</style>
