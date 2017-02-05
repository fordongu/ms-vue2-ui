<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com
Date: 2017/2/5
Time: 16:08-->
<template>
    <div class="ms-month-panel">
        <table>
            <thead>
                <tr>
                    <td colspan="4">
                        <button type="button" class="prev-year" @click="prevYear">&lt;&lt;</button>
                        <button type="button">{{currentYear}}年</button>
                        <button type="button" class="next-year" @click="nextYear">&gt;&gt;</button>
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(months,rowIndex) in monthArr">
                    <td is="ms-month" v-for="(month,cellIndex) in months"
                        :ms-datepicker-id="msDatepickerId"
                        :month="month"
                        :current-month="currentMonth"
                        :row-index="rowIndex"
                        :cell-index="cellIndex"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import MsMonth from "./month.vue";
    import datepickerMixmin from "./mixins/datepickerMixin";
    import bus from "./DatepickerEvents";
    export default {
        name:'ms-datepicker-month-panel',
        mixins:[datepickerMixmin],
        props: {
            "msDatepickerId":{
                type:String
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
            monthArr:function () {
                let me = this;
                return me.split(me.months,3);
            }
        },
        methods:{
            prevYear:function () {
                let me = this;
                bus.$emit("ms-datepicker-year-change",me.msDatepickerId,(me.currentYear-1));
            },
            nextYear:function () {
                let me = this;
                bus.$emit("ms-datepicker-year-change",me.msDatepickerId,(me.currentYear+1));
            }
        },
        components: {
            MsMonth
        }
    }
</script>
<style>

</style>
