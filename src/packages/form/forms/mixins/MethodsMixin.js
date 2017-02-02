/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Blog: http://blog.fengxiaotx.com
 * Date: 2017/1/31
 * Time: 22:31
 */
'use strict';
export default {
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
