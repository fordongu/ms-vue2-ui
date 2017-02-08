<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com
Date: 2017/2/5
Time: 17:49-->
<template>
    <div class="ms-year-panel">
        <table>
            <thead>
                <tr>
                    <td colspan="5">
                        <button type="button" class="prev" >&lt;&lt;</button>
                        <button type="button">{{yearScope.start}}~{{yearScope.end}}</button>
                        <button type="button" class="next" >&gt;&gt;</button>
                    <td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(years,rowIndex) in yearArr">
                    <td v-for="(year,cellIndex) in years" is="ms-year"
                        :ms-datepicker-id="msDatepickerId"
                        :year="year"
                        :current-year="currentYear">
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import MsYear from "./year.vue";
    import datepickerMixmin from "./mixins/datepickerMixin";
    export default {
        name:'ms-datepicker-year-panel',
        mixins:[datepickerMixmin],
        props: {
            "msDatepickerId":{
                type:String
            },
            "currentYear":{
                default:function () {
                    return (new Date()).getFullYear();
                }
            },
        },
        data(){
            return {
                "yearScope":{
                    "start":null,
                    "end":null
                }
            }
        },
        computed: {
            "yearArr":function () {
                let me = this;
                let remainder = me.currentYear%20;
                if(remainder == 0){
                    me.yearScope.start = me.currentYear-20+1;
                    me.yearScope.end = me.currentYear;
                }else {
                    me.yearScope.start = me.currentYear-remainder+1;
                    me.yearScope.end = me.currentYear+(20-remainder);
                }
                let years = [];
                for(var i = me.yearScope.start ; i<=me.yearScope.end;i++ ){
                    years.push(i);
                }
                return me.split(years,5);
            }
        },
        components: {
            MsYear
        }
    }
</script>
<style>

</style>
