<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com
Date: 2017/2/5
Time: 16:04-->
<template>
    <td :class="{'is-current-month':isCurrentMonth}" @click="setMonth"><span>{{month}}</span></td>
</template>
<script>
    import bus from "./DatepickerEvents";
    export default {
        name:'ms-datepicker-month',
        props: {
            "msDatepickerId":{
                type:String
            },
            month:{

            },
            currentMonth:{
                type:Number
            },
            rowIndex:{
                type:Number
            },
            cellIndex:{
                type:Number
            }
        },
        computed: {
            isCurrentMonth:function(){
                let me = this;
                return (me.currentMonth==(me.rowIndex*3+me.cellIndex));
            }
        },
        methods:{
            "setMonth":function(){
                let me = this;
                let monthIndex = me.rowIndex*3+me.cellIndex;
                bus.$emit("ms-datepicker-month-change",me.msDatepickerId,monthIndex);
            }
        },
        components: {}
    }
</script>
<style>

</style>
