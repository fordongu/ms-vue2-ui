/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 2017/1/13
 * Time: 10:41
 */
'use strict';
export default {
    props:{
        treeStructure:{
            type:Boolean,
            default:function() {
                return false;
            }
        },
        data:{
            type:Array,
            default:function () {
                return [];
            }
        },
        columns:{
            type:Array,
            default:function() {
                return [];
            }
        },
        centerColumns:{
            type:Array,
            default(){
                return [];
            }
        },
        leftColumns:{
            type:Array,
            default:function () {
                return [];
            }
        },
        rightColumns:{
            type:Array,
            default(){
                return [];
            }
        }
    }
}