<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/15
Time: 12:45-->
<template>
    <div :class="gridClass">
        <ms-grid-head :head-columns="headColumns"
                      :cols="leafColumns"
                      :max-column-level="maxColumnLevel"
                      :rest-width="restWidthData"
                      :flex-count="flexCountCompute" />
        <ms-grid-body :tree-structure="treeStructure"
                      :data="data"
                      :columns="leafColumns"
                      :rest-width="restWidthData"
                      :flex-count="flexCountCompute"  />
    </div>
</template>
<script>
    import Vue from "vue";
    import PropsMixin from "./mixins/PropsMixin";
    import MethodsMixin from "./mixins/MethodsMixin";

    import MsGridHead from "./grid-head.vue";
    import MsGridBody from "./grid-body.vue";

    import bus from "./GridEvents";
    export default{
        mixins:[PropsMixin,MethodsMixin],
        props:{
            position:{
                type:String,
                default(){
                    return "center";
                }
            },
            width:{
                type:Number,
                default(){
                    return 200;
                }
            },
            maxColumnLevel:{
                type:Number,
                default(){
                    return 1;
                }
            }
        },
        data(){
            return{
                restWidthData:0,
                flexCountData:0
            }
        },
        computed:{
            gridClass:function(){
                let me = this;
                if(me.position == "left"){

                }else if(me.position == "right"){

                }else {
                    return "ms-grid-center";
                }
            },
            headColumns:function(){
                let me = this;
                let columnsObject = me.headColumnsFormat(me.columns);
                let objectCount = _.keys(columnsObject).length;
                let result  = [];
                for(var i=1;i<=objectCount;i++){
                    result.push(columnsObject[i]);
                }
                return result;
            },
            leafColumns:function(){
                let me = this;
                return me.columnsLeafs(me.columns);
            },
            flexCountCompute:function(){
                let me = this;
                return me.getFlexCount(me.leafColumns);
            },
            restWidthCompute:function(){
            }
        },
        created(){
            let me = this;

        },
        mounted(){
            let me = this;
            let width = me.$el.clientWidth;
            me.restWidthData = me.getRestWidth(me.leafColumns,width);
        },
        methods:{
            headColumnsFormat:function (columns,parent,level) {
                let me = this;
                let tmp = {};
                _.forEach(columns,function (column) {
                    if(parent){
                        Vue.set(column,'_parent',parent);
                    }
                    let _level = 1;
                    if(level){
                        _level = level+1;
                    }
                    bus.$emit('ms-grid-max-level',_level);
                    Vue.set(column,'_level',_level);
                    Vue.set(column,'_leafCount',0);
                    if(column.columns && column.columns.length>0 ){
                        column._leafCount = column.columns.length;
                        let children = me.headColumnsFormat(column.columns,column,_level);
                        if(tmp[_level+1]){
                            tmp[_level+1] = _.concat(tmp[_level+1],children[[_level+1]]);
                        }else {
                            tmp[_level+1] = children[_level+1];
                        }
                        _.forEach(children[_level+1],function(child){
                            if(child._leafCount==0){
                                column._leafCount++;
                            }else {
                                column._leafCount += child._leafCount;
                            }
                        });
                    }
                    if(tmp[_level]){
                        tmp[_level].push(column);
                    }else {
                        let cs = [];
                        cs.push(column);
                        tmp[_level] = cs;
                    }
                });
                return tmp;
            },
            getRestWidth:function(columns,width){
                let widthDistribution = 0;
                _.forEach(columns,function(column){
                    if(column.width){
                        widthDistribution += column.width;
                    }
                });
                return width - widthDistribution;
            },
            getFlexCount:function(columns){
                let flexCount = 0;
                _.forEach(columns,function(column){
                    if(!column.width){
                       if(column.flex){
                            flexCount += column.flex
                       }else {
                            flexCount += 1;
                       }
                    }
                });
                return flexCount;
            }
        },
        components:{
            MsGridHead,
            MsGridBody
        }
    }
</script>
<style>

</style>

