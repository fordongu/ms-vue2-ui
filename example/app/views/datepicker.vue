<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com
Date: 2017/2/4
Time: 17:11-->
<template>
    <div>
        <ms-datepicker :value="value"></ms-datepicker>
    </div>
</template>
<script>
    import {MsDatepicker} from "../../../src/index";
    export default {
        props: {},
        data(){
            return {
                "value": "2017-03-01"
            }
        },
        computed: {},
        components: {
            MsDatepicker
        }
    }
</script>
<style>

</style>
