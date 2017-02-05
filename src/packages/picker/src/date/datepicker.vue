<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com
Date: 2017/2/4
Time: 17:05-->
<template>
    <div class="ms-datepicker">
        <ms-date-panel :ms-datepicker-id="msDatepickerId" :current-year="currentYear" :current-month="currentMonth"></ms-date-panel>
        <ms-month-panel :ms-datepicker-id="msDatepickerId" :current-year="currentYear" :current-month="currentMonth"></ms-month-panel>
        <ms-year-panel :ms-datepicker-id="msDatepickerId" :current-year="currentYear"></ms-year-panel>
    </div>
</template>
<script>
    import MsDatePanel from "./date-panel.vue";
    import MsMonthPanel from "./month-panel.vue";
    import MsYearPanel from "./year-panel.vue";
    import bus from "./DatepickerEvents";
    export default {
        name:'ms-datepicker',
        props: {},
        data(){
            return {
                msDatepickerId:_.uniqueId("ms_datepicker_"),
                value:null,
                currentYear:(new Date()).getFullYear(),
                currentMonth:(new Date()).getMonth(),
            }
        },
        computed: {

        },
        created(){
            let me = this;
            bus.$on("ms-datepicker-year-change",function(id,year){
                if(me.msDatepickerId == id){
                    me.currentYear = year;
                }
            });
            bus.$on("ms-datepicker-month-change",function (id,month) {
                if(me.msDatepickerId == id){
                    me.currentMonth = month;
                }
            })
        },
        methods:{

        },
        components: {
            MsDatePanel,
            MsMonthPanel,
            MsYearPanel
        }
    }
</script>
<style>

</style>
