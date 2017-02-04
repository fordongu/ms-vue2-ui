/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Blog: http://blog.fengxiaotx.com
 * Date: 2017/2/4
 * Time: 17:26
 */
'use strict';
export default {
    methods:{
        "getDates":function (startDate,n) {

            var dates = new Array(n), current = new Date(startDate), i = 0, date;
            while (i < n) {
                date = new Date(current);
                dates[i++] = date;
                current.setDate(current.getDate() + 1);
            }
            return dates;
        },
        "split":function (arr, size) {
            let arrays = [];
            while (arr.length > 0) {
                arrays.push(arr.splice(0, size));
            }
            return arrays;
        },
    }
}