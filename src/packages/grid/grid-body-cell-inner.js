/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 2017/1/13
 * Time: 09:55
 */
'use strict';
import _ from "lodash";
export default {
    name:'ms-grid-body-cell-inner',
    template:'<div>{{_record[_column.dataIndex]}}</div>',
    props:{
        "gridContainer":{
            type:Object
        },
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
    },
    data(){
        //将容器中的props,data 都传递到当前组件中
        let me = this;
        let containerOptions = me.gridContainer.$options;
        let result = {};
        let data = containerOptions.data();
        if(data){
            Object.assign(result,containerOptions.data());
        }
        let props = containerOptions.props;
        if(props){
            let methodKeys = _.keys(props);
            let propsData = {};
            _.forEach(methodKeys,function(key){
                propsData[key] = me.gridContainer[key];
            });
            Object.assign(result,propsData);
        }
        return result;
    },
    beforeCreate(){
        let me = this;

    },
    created(){
        let me = this;
        if(me._column.render){
            let containerOptions = me.gridContainer.$options;
            let tmpTemplate  = me._column.render(me._record);
            me.$options.template = '<div>'+tmpTemplate+'</div>';

            //监听 props值的变化
            let props = containerOptions.props;
            if(props){
                let methodKeys = _.keys(props);
                _.forEach(methodKeys,function(key){
                    me.$watch('gridContainer.'+key,function(newVal, oldVal){
                        me[key] = newVal;
                    },{
                        deep:true
                    });
                });
            }
            //监听data的变化
            let data = containerOptions.data();
            if(data){
                let methodKeys = _.keys(data);
                _.forEach(methodKeys,function(key){
                    me.$watch('gridContainer.'+key,function(newVal, oldVal){
                        me[key] = newVal;
                    },{
                        deep:true
                    });
                });
            }

            if(containerOptions.methods){ //将容器的methods 加入到当前组件
                let methodKeys = _.keys(containerOptions.methods);
                _.forEach(methodKeys,function(key){
                    me[key] = me.gridContainer[key];
                });
            }

            if(containerOptions.components){ //合并components
                Object.assign(me.$options.components,containerOptions.components);
            }


        }

    },
    mounted(){
        let me = this;
    },
    methods:{

    },
    components:{

    }
}