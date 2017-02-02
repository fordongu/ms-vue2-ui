/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Blog: http://blog.fengxiaotx.com
 * Date: 2017/1/31
 * Time: 22:31
 */
'use strict';
import Vue from "vue";
export default {
    watch:{
        'value':{
            handler:function (newVal,oldVal) {
                console.log(newVal);
            }
        },
        'fieldValue':{
            handler:function (newVal,oldVal) {
                let me = this;
                Vue.set(me.msForm.formData,me.name,newVal);
            }
        }
    },
    methods:{
        getForm:function () {
            let me = this;
            let msForm = me.$parent;
            debugger;
            while (msForm){
                if(msForm.$options.name == "ms-form"){
                    me.msForm = msForm;
                    break;
                }
                msForm = msForm.$parent;
            }
        },
        onChange:function(){

        }
    }
}
