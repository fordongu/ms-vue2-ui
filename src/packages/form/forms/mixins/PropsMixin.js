/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Blog: http://blog.fengxiaotx.com
 * Date: 2017/1/31
 * Time: 22:29
 */
'use strict';
export default {
    props:{
        name:{
            type:String
        },
        value:{

        },
        rules:{
            type:Array
        },
        change:{
            type:Function
        }
    },
    data(){
        return {
            msForm:null
        };
    }
}