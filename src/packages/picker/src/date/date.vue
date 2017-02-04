<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com
Date: 2017/2/4
Time: 17:06-->
<template>
    <td :class="[dateClass]"><span>{{dateText}}</span></td>
</template>
<script>
    export default {
        props: {
            date:{},
            currentMonth:{
                type:Number,
                default(){
                    return (new Date()).getMonth();
                }
            }
        },
        computed: {
            dateText:function () {
                let me = this;
                return me.date.getDate();
            },
            dateClass:function(){
                let me = this;
                let dateMonth = me.date.getMonth();
                if(dateMonth < me.currentMonth){
                    return "prev-month";
                }else if(dateMonth > me.currentMonth){
                    return "next-month";
                }else {
                    return "current-month";
                }
            }
        },
        components: {}
    }
</script>
<style>

</style>
