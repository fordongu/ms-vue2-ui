<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com
Date: 2017/2/4
Time: 17:15-->
<template>
    <div>
        <table class="ms-date-panel">
            <thead>
                <tr>
                    <th class="ms-date-panel-tools" colspan="7">
                        <button class="prev-year" tabindex="-1">&lt;&lt;</button>
                        <button class="prev-month" @click="prevMonth">&lt;</button>
                        <button>{{currentYear}}年</button>
                        <button>{{monthText}}月</button>
                        <button class="next-month">&gt;</button>
                        <button class="next-year">&gt;&gt;</button>
                    </th>
                </tr>
                <tr>
                    <th v-for="(weekDay,index) in weekDays">{{weekDay}}</th>
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
    export default {
        name:'ms-date-panel',
        mixins:[datepickerMixmin],
        props: {
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

            },
            prevMonth:function(){

            },
            nextMonth:function(){},
            nextYear:function(){}
        },
        components: {
            MsDate
        }
    }
</script>
<style>

</style>
