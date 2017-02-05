<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com
Date: 2017/2/4
Time: 17:15-->
<template>
    <div class="ms-date-panel">
        <table>
            <thead>
                <tr>
                    <td class="ms-date-panel-tools" colspan="7">
                        <button type="button" class="prev-year" @click="prevYear">&lt;&lt;</button>
                        <button type="button" class="prev-month" @click="prevMonth">&lt;</button>
                        <button type="button">{{currentYear}}年</button>
                        <button type="button">{{monthText}}月</button>
                        <button type="button" class="next-year" @click="nextYear">&gt;&gt;</button>
                        <button type="button" class="next-month" @click="nextMonth">&gt;</button>
                    </td>
                </tr>
                <tr>
                    <td v-for="(weekDay,index) in weekDays">{{weekDay}}</td>
                </tr>
            </thead>
            <tbody>
            <tr v-for="(days,dayIndex) in dayArr">
                <td is="MsDate" v-for="(date,index) in days" :date="date" :current-month="currentMonth"></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import MsDate from "./date.vue";
    import datepickerMixmin from "./mixins/datepickerMixin";
    import bus from "./DatepickerEvents";
    export default {
        name:'ms-date-panel',
        mixins:[datepickerMixmin],
        props: {
            "msDatepickerId":{
                type:String
            },
            "currentDate":{
                default(){
                    return new Date();
                }
            },
            "currentYear":{
                default(){
                    return (new Date()).getFullYear();
                }
            },
            "currentMonth":{
                default(){
                    return (new Date()).getMonth();
                }
            }
        },
        computed: {
            monthText:function(){
                let me = this;
                return me.currentMonth + 1;
            },
            dayArr:function () {
                let me = this;
                let panelStartDate = new Date(me.currentYear,me.currentMonth,1);
                let weekDay = panelStartDate.getDay();
                panelStartDate.setDate(panelStartDate.getDate()-weekDay);
                let days = me.getDates(panelStartDate,42);
                return me.split(days,7);
            }
        },
        methods:{
            prevYear:function(){
                let me = this;
                bus.$emit("ms-datepicker-year-change",me.msDatepickerId,(me.currentYear-1));
            },
            prevMonth:function(){
                let me = this;
                let month = 0;
                if(me.currentMonth == 0){
                    month = 11;
                    me.prevYear();
                }else{
                    month = me.currentMonth-1;
                }
                bus.$emit("ms-datepicker-month-change",me.msDatepickerId,month);
            },
            nextMonth:function(){
                let me = this;
                let month = 0;
                if(me.currentMonth == 11){
                    month = 0;
                    me.nextMonth();
                }else{
                    month = me.currentMonth+1;
                }
                bus.$emit("ms-datepicker-month-change",me.msDatepickerId,month);
            },
            nextYear:function(){
                let me = this;
                bus.$emit("ms-datepicker-year-change",me.msDatepickerId,(me.currentYear+1));
            }
        },
        components: {
            MsDate
        }
    }
</script>
<style>

</style>
