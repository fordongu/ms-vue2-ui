<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/15
Time: 12:45-->
<template>
    <div :class="gridClass" :style="[styleCompute]">
        <div >
            <ms-grid-head ref="ms_grid_head"
                          :position="position"
                          :head-columns="headColumns"
                          :cols="leafColumnsCompute"
                          :width="innerWidthData"
                          :max-column-level="maxColumnLevel"
                          :max-head-height="maxHeadHeight"
                          :scroll-x="scrollX"
                          :ms-grid-id="msGridId"
            />
        </div>
        <div>
            <ms-grid-body :tree-structure="treeStructure"
                          :data="data"
                          :position="position"
                          :columns="leafColumnsCompute"
                          :width="innerWidthData"
                          :height="bodyHeightCompute"
                          :scrollY="scrollY"
                          :scrollX="scrollX"
                          :ms-grid-id="msGridId"
                          :has-left="hasLeft" />
        </div>
    </div>
</template>
<script>
    import Vue from "vue";
    import PropsMixin from "./mixins/PropsMixin";
    import MethodsMixin from "./mixins/MethodsMixin";
    import LifecycleMixin from "./mixins/LifecycleMixin";

    import MsGridHead from "./grid-head.vue";
    import MsGridBody from "./grid-body.vue";

    import bus from "./GridEvents";
    export default{
        mixins:[PropsMixin,MethodsMixin,LifecycleMixin],
        props:{
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
            },
            maxHeadHeight:{
                type:Number,
                default(){
                    return 0;
                }
            },
            columnMinWidth:{
              type:Number,
              default(){
                return 100;
              }
            },
            left:{
              type:Number,
              default(){
                return 0;
              }
            }
        },
        data(){
            return{
                restWidthData:0,
                flexCountData:0,
                bodyHeightData:0,
                innerWidthData:0
            }
        },
        computed:{
            styleCompute:function(){
                let me = this;
                if(me.left){
                    return {left:me.left+"px"};
                }
            },
            bodyHeightCompute:function(){
                let me = this;
                if(me.componentReady && me.scrollY){
                   // let headHeight = me.$refs.ms_grid_head.$el.clientHeight;
                    return me.height-me.maxHeadHeight;
                }
            },
            gridClass:function(){
                let me = this;
                if(me.position == "left"){
                    return "ms-grid-left";
                }else if(me.position == "right"){
                    return "ms-grid-right";
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
            leafColumnsCompute:function(){
                let me = this;
                let leafs = me.columnsLeafs(me.columns);
                if(me.componentReady){
                    let restWidth = me.getRestWidth(leafs,me.width);
                    let flexCount = me.getFlexCount(leafs);
                    let allocatedWidthCount = 0;
                    let unAllocatedWidthCount = 0;
                    _.forEach(leafs,function(leaf){
                        if(leaf.width){
                            allocatedWidthCount += leaf.width;
                        }else {
                            let width = 0;
                            if(me.position == "center"){
                                let flex = 1;
                                if(leaf.flex){
                                    flex = leaf.flex;
                                }
                                width = (flex/flexCount) * restWidth;
                                if(width < me.columnMinWidth){
                                    width = me.columnMinWidth;
                                }
                            }else {
                                width = me.columnMinWidth;
                            }
                            unAllocatedWidthCount += width;
                            Vue.set(leaf,'_width',width);
                        }
                    });
                    me.innerWidthData = allocatedWidthCount + unAllocatedWidthCount;
                    bus.$emit('ms-grid-scope-width-compute',me.msGridId,me.position,me.innerWidthData);
                }
                return leafs;
            }
        },
        created(){
            let me = this;
        },
        mounted(){
            let me = this;
           // let width = me.$el.clientWidth;
            //me.restWidthData = me.getRestWidth(me.leafColumns,width);
            //me.bodyHeightData = me.getBodyHeight();

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

                    Vue.set(column,'_level',_level);
                    Vue.set(column,'_leafCount',0);
                    bus.$emit('ms-grid-max-level',_level); //传递头部层级
                    if(column.columns && column.columns.length>0 ){
                        column._leafCount = column.columns.length;
                        let children = me.headColumnsFormat(column.columns,column,_level);
                        //此处是用一个json object 存放columns，用层级作key
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

