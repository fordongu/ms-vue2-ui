<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com
Date: 2017/2/4
Time: 17:06-->
<template>
    <td><span>{{dateText}}</span></td>
</template>
<script>
    export default {
        props: {
            date:{}
        },
        computed: {
            dateText:function () {
                let me = this;
                return me.date.getDate();
            }
        },
        components: {}
    }
</script>
<style>

</style>
