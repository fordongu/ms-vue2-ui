<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com
Date: 2017/2/5
Time: 17:48-->
<template>
  <td :class="{'is-current-year':isCurrentYear}" @click="setYear"><span>{{year}}</span></td>
</template>
<script>
    import bus from "./DatepickerEvents";
    export default {
        name:'ms-datepicker-year',
        props: {
          "msDatepickerId":{
            type:String
          },
          year:{
            type:Number
          },
          currentYear:{
            type:Number
          }
        },
        computed: {
          isCurrentYear:function(){
            let me = this;
            return me.year == me.currentYear;
          }
        },
        methods:{
          setYear:function(){
            let me = this;
            bus.$emit('ms-datepicker-year-change',me.msDatepickerId,me.year);
          }
        },
        components: {}
    }
</script>
<style>

</style>
