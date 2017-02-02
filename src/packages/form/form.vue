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
    import bus from "./FormEvents.js";
    import Vue from "vue";
    export default {
        name:'ms-form',
        props: {
            rules:{
                type:Object
            }
        },
        data(){
            return {
                formData:{},
                fields:{}
            };
        },
        computed: {

        },
        created(){
            let me = this;
            bus.$on('ms-form-set-data',function(field,value){
               // me.$set('formData',field,value);
               Vue.set(me.formData,field,value);
            });
        },
        methods:{
            getFieldsValue:function(arr){
                let me = this;
                if(arr){
                    let result = {};
                    _.forEach(arr,function(item){
                        result[item] = me.formData[item];
                    });
                    return result;
                }
                return me.formData;
            },
            getFieldValue:function(field){
                let me = this;
                if(field){
                    return me.formData[field];
                }
            },
            setFieldsValue:function (obj) {
                let me = this;
                me.formData = Object.assign({},me.formData,obj);
                console.log("setFields");
            },
            validateFields:function(){
                let me = this;
            },
            resetFields:function(){
                let me = this;
                let keys = _.keys(me.formData);
                _.forEach(keys,function(key){
                    me.$set(me.formData,key,null);
                });
            }
        },
        components: {}
    }
</script>
<style>

</style>
