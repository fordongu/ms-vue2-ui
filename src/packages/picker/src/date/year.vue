<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com
Date: 2017/2/5
Time: 17:48-->
<template>
  <td :class="{'is-current-year':isCurrentYear}"><span>{{year}}</span></td>
</template>
<script>
    export default {
        name:'ms-datepicker-year',
        props: {
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
        components: {}
    }
</script>
<style>

</style>
