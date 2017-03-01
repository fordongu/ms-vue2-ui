<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com
Date: 2017/1/31
Time: 15:20-->
<template>
    <form class="form-horizontal ms-form" :style="[outStyle]">
        <slot></slot>
    </form>
</template>
<script>
    import "ms-jquery-resize";
    import Vue from "vue";
    import schema from "async-validator";
    import bus from "./FormEvents.js";
    export default {
        name:'ms-form',
        props: {
            layout:{
                type:String
            },
            title:{
                type:String
            },
            rules:{
                type:Object
            }
        },
        data(){
            return {
                msFormId:_.uniqueId("ms_form_"),
                "componentReady":false,
                outWidth:null,
                outHeight:null,
                formData:{},
                fields:[],
                errors:[]
            };
        },
        computed: {
            outStyle:function () {
                let me = this;
            }
        },
        created(){
            let me = this;
            bus.$on('ms-form-set-data',function(field,value){
               // me.$set('formData',field,value);
               Vue.set(me.formData,field,value);
            });
            bus.$on('ms-form-item-add',function(formId,formItem){
                if(me.msFormId == formId){
                    me.fields.push(formItem);
                }
            });
        },
        beforeMount(){
            let me = this;
        },
        mounted(){
            let me = this;
            me.componentReady = true;
        },
        methods:{
            initSize(){
                let me = this;
                if(me.layout == "fit"){
                    if(me.$el.parentElement){
                        me.outWidth = $(me.$el.parentElement).width();
                        me.outHeight = $(me.$el.parentElement).height();
                    }
                    $(me.$el.parentElement).resize(function(){
                        me.outWidth = $(me.$el.parentElement).width();
                        me.outHeight = $(me.$el.parentElement).height();
                    });
                }
            },
            getFieldsValue:function(keys){
                let me = this;
                if(keys){
                    let result = {};
                    _.forEach(keys,function(key){
                        result[key] = me.formData[key];
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
            validateFields:function(callback){
                let me = this;
                let descriptor =  {};
                if(me.rules){
                    descriptor = me.rules;
                }else {
                    let rules = {};
                    _.forEach(me.fields,function(field){
                        if(field.rules && field.rules.length>0){
                            rules[field.name] = field.rules;
                        }
                    });
                    descriptor = rules;
                }
                let validator = new schema(descriptor);
                validator.validate(me.formData, (errors, fields) => {
                    callback(errors,me.formData);
                });

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
