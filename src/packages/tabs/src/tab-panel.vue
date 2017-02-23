<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com/
Date: 2017/2/23
Time: 14:26-->
<template>
  <div>

  </div>
</template>
<script>
    export default {
        name:'ms-table-panel',
        props:{},
        data(){
            return {
                tabs:null
            }
        },
        created(){
            let me = this;
            me.getTabs();
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
