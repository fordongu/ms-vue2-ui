/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Blog: http://blog.fengxiaotx.com
 * Date: 2017/1/31
 * Time: 22:32
 */
'use strict';
import Vue from "vue";
export default {
    created(){
        let me = this;
        me.getForm();
        if(me.msForm && me.name){
            Vue.set(me.msForm.fields,me.name,me);
            Vue.set(me.msForm.formData,me.name,me.value);
            me.$watch('msForm.formData.'+me.name,function(newVal, oldVal){
                me.fieldValue = newVal;
                console.log(newVal);
            });
        }
    }
}