<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com
Date: 2017/1/31
Time: 15:20-->
<template>
    <div class="ms-form">
        <form>
            <slot></slot>
        </form>
    </div>
</template>
<script>
    import Vue from "vue";
    import bus from "./FormEvents.js";
    export default {
        name:'ms-form',
        props: {
            rules:{
                type:Object
            }
        },
        data(){
            return {
                msFormId:_.uniqueId("ms_form_"),
                formData:{},
                items:[],
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
            bus.$on('ms-form-item-add',function(formId,formItem){
                if(me.msFormId == formId){
                    me.items.push(formItem);
                }
            });
        },
        methods:{
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
