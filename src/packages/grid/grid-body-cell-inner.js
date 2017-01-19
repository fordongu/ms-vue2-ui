/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 2017/1/13
 * Time: 09:55
 */
'use strict';
export default {
    name:'ms-grid-body-cell-inner',
    template:'<div>{{_record[_column.dataIndex]}}</div>',
    props:{
        "_column":{
            type:Object,
            default(){
                return {};
            }
        },
        "_record":{
            type:Object,
            default(){
                return {};
            }
        }
    }
}