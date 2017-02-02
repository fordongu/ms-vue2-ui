<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com
Date: 2017/1/31
Time: 15:20-->
<template>
    <form>
        <slot></slot>
    </form>
</template>
<script>
    export default {
        name:'ms-form',
        props: {},
        data(){
            return {
                formData:{},
                fields:{}
            };
        },
        computed: {},
        methods:{
            setFieldsValue:function (obj) {
                let me = this;
                me.formData = Object.assign({},me.formData,obj);
                console.log("setFields");
            }
        },
        components: {}
    }
</script>
<style>

</style>
