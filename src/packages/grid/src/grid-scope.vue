<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/15
Time: 12:45-->
<template>
    <div :class="[gridClass]" :style="[styleCompute]">
        <div ref="ms_grid_scope_head">
            <ms-grid-head ref="ms_grid_head"
                          :position="position"
                          :head-columns="headColumns"
                          :cols="leafColumnsCompute"
                          :width="innerWidthCompute"
                          :max-column-level="maxColumnLevel"
                          :max-head-height="maxHeadHeight"
                          :scroll-x="scrollX"
                          :need-scroll-space="needScrollSpaceData"
                          :ms-grid-id="msGridId"
                          :ms-grid-scope-id="msGridScopeIdData"
            />
        </div>
        <div>
            <ms-grid-body :grid-container="gridContainer"
                          :tree-structure="treeStructure"
                          :data="data"
                          :position="position"
                          :bordered="bordered"
                          :columns="leafColumnsCompute"
                          :width="innerWidthCompute"
                          :height="bodyHeightCompute"
                          :scrollY="scrollY"
                          :scrollX="scrollX"
                          :need-scroll-space="needScrollSpaceData"
                          :need-scroll-x-space="needScrollXSpace"
                          :ms-grid-id="msGridId"
                          :ms-grid-scope-id="msGridScopeIdData"
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
                msGridScopeIdData:_.uniqueId("ms_grid_scope_"),
                restWidthData:0,
                flexCountData:0,
                bodyHeightData:0,
                necessaryWidthData:0,
                needScrollSpaceData:false
            }
        },
        computed:{
            innerWidthCompute:function(){
                let me = this;
                if(me.necessaryWidthData > me.width){
                    return me.necessaryWidthData;
                }else {
                    return me.width;
                }

            },
            styleCompute:function(){
                let me = this;
                let style = {};
                Object.assign(style,{width:me.width+"px"});
                if(me.left){
                    Object.assign(style,{left:me.left+"px"});
                }
                return style;
            },
            bodyHeightCompute:function(){
                let me = this;
                if(me.componentReady && me.scrollY){
                    let headHeight = me.$refs["ms_grid_scope_head"].offsetHeight;
                    //return me.height-me.maxHeadHeight;
                    return me.height - headHeight;
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
                    me.necessaryWidthData = allocatedWidthCount + unAllocatedWidthCount;
                    bus.$emit('ms-grid-scope-width-compute',me.msGridId,me.position,me.necessaryWidthData);
                }
                return leafs;
            }
        },
        created(){
            let me = this;
             bus.$on('ms-grid-scroll-space-y',function(gridId,needSpace){
               if(me.msGridId == gridId && me.position == "center"){
                if(me.needScrollSpaceData != needSpace){
                    me.needScrollSpaceData = needSpace;
                }
               }
            });
        },
        mounted(){
            let me = this;
        },
        updated(){
            let me = this;
            if(me.componentReady){
                if(me.position=="center"){
                    Vue.nextTick(function(){
                        bus.$emit('ms-grid-scope-height',me.msGridId,me.$el.offsetHeight);
                    });
                }
            }
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
                let me = this;
                let widthDistribution = 0;
                _.forEach(columns,function(column){
                    if(column.width){
                        widthDistribution += column.width;
                    }
                });
                if(me.needScrollSpaceData){
                    return width - widthDistribution-17;
                }else {
                    return width - widthDistribution;
                }

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

