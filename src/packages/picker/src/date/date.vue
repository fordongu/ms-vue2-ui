<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com
Date: 2017/2/4
Time: 17:06-->
<template>
    <td :class="[{'is-current-date':isCurrentDate},dateClass]" @click="setDate">
        <span>{{dateText}}</span>
    </td>
</template>
<script>
    import bus from "./DatepickerEvents";
    export default {
        name:'ms-datepicker-date',
        props: {
            "msDatepickerId":{
                type:String
            },
            date:{},
            currentDate:{
                default(){
                    return new Date();
                }
            },
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
            },
            isCurrentDate:function(){
                let me = this;
                return (me.date.getFullYear() == me.currentDate.getFullYear()
                && me.date.getMonth() == me.currentDate.getMonth()
                && me.date.getDate() == me.currentDate.getDate()
                );
            }
        },
        methods:{
            setDate:function(){
                let me = this;
                bus.$emit("ms-datepicker-date-change",me.msDatepickerId,me.date);
            }
        },
        components: {}
    }
</script>
<style>

</style>
