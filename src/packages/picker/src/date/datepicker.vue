<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com
Date: 2017/2/4
Time: 17:05-->
<template>
    <div class="ms-datepicker">
        <ms-date-panel></ms-date-panel>
    </div>
</template>
<script>
    import MsDatePanel from "./date-panel.vue";
    export default {
        name:'ms-datepicker',
        props: {},
        data(){
            return {
                msDatepickerId:_.uniqueId("ms_datepicker_"),
            }
        },
        computed: {},
        methods:{

        },
        components: {
            MsDatePanel
        }
    }
</script>
<style>

</style>
