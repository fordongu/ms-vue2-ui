<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com
Date: 2017/2/4
Time: 17:15-->
<template>
    <table class="ms-date-panel">
        <tbody>
            <tr v-for="(days,index) in dayArr">
                <td is="MsDate" v-for="(date,index) in days" :date="date"></td>
            </tr>
        </tbody>
    </table>
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
            dayArr:function () {
                let me = this;
                let panelStartDate = new Date(me.currentYear,me.currentMonth,1);
                let weekDay = panelStartDate.getDay();
                panelStartDate.setDate(panelStartDate.getDate()-weekDay);
                let days = me.getDates(panelStartDate,42);
                return me.split(days,7);
            }
        },
        components: {
            MsDate
        }
    }
</script>
<style>

</style>
