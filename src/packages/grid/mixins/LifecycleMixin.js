/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 2017/1/17
 * Time: 10:55
 */
'use strict';
export default {
    mounted(){
        let me = this;
        if(me.componentReady != undefined){
            me.componentReady = true;
        }
    }
}