<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com/
Date: 2017/2/28
Time: 14:57-->
<template>
  <div class="ms-tree-view">
    <ms-tree-view-item
            :ms-tree-view-id="msTreeViewId"
            v-for="(record,index) in treeData"
            :record="record"
            :index="index"
            :textIndex="textIndex"
            :onShowChildren="showChildren"
            :onSelectChange="selectChange"
            :onExpandToggle="expandToggle"/>
  </div>
</template>
<script>
    import Vue from "vue";
    import _ from "lodash";
    import MsTreeViewItem from "./tree-view-item.vue";
    export default {
        name:'ms-tree-view',
        props:{
            data:{
                type:[Array,Object]
            },
            textIndex:{
                type:String,
                default(){
                    return "text";
                }
            },
            childrenIndex:{
                type:String,
                default(){
                    return "children";
                }
            },
            expandAll:{
                type: Boolean
            },
            onItemClick:{
                type:Function
            },
            onSelectChange:{
                type:Function
            }
        },
        data(){
            return {
                msTreeViewId:_.uniqueId("ms_tree_view_"),
                treeData:[],
                selectItems:[]
            }
        },
        computed:{

        },
        watch:{
            data:{
                handler:function (newVal,oldVal) {
                    let me = this;
                    if(newVal){
                        me.treeData = me.dataFormat(me.data);
                    }
                },
                immediate: true
            }
        },
        created(){
            let me = this;

        },
        methods:{
          dataFormat(data,parent,level){
              let me = this;
              let tmp = [];
              _.forEach(data,function (record) {
                  if(record._expanded == undefined){
                      if(me.expandAll){
                          Vue.set(record,'_expanded',true);
                      }else {
                          Vue.set(record,'_expanded',false);
                      }
                  }
                  if(parent){
                      Vue.set(record,'_parent',parent);
                  }
                  if(me.expandAll){
                      if(record._show == undefined){
                          Vue.set(record,'_show',true);
                      }
                  }
                  let _level = 0;
                  if(level!=undefined && level!=null){
                      _level = level+1;
                  }
                  Vue.set(record,'_level',_level);
                  tmp.push(record);
                  if(record[me.childrenIndex] && record[me.childrenIndex].length>0 ){
                      let children = me.dataFormat(record[me.childrenIndex],record,_level);
                      tmp = _.concat(tmp,children);
                  }
              });
              return tmp;
          },
            showChildren(rowIndex,show){
              let me = this;
                if(me.treeData[rowIndex]._show != undefined || me.treeData[rowIndex]['_show']!=show){
                    Vue.set(me.treeData[rowIndex],'_show',show);
                }
            },
            expandToggle(rowIndex){
              let me = this;
                me.treeData[rowIndex]._expanded = !me.treeData[rowIndex]._expanded;
            },
            selectChange(rowIndex,checked){
              let me = this;
              if( me.treeData[rowIndex]._checked == undefined || me.treeData[rowIndex]._checked!=checked ){
                  Vue.set(me.treeData[rowIndex],"_checked",checked);
              }
              if(me.onSelectChange){
                  let selectedItems = [];
                  _.forEach(me.treeData,function(item){
                      if(item._checked){
                          selectedItems.push(item);
                      }
                  });
                  me.onSelectChange(me.treeData[rowIndex],selectedItems);
              }
            },
            itemClick(rowIndex){
                let me = this;
                if(me.onItemClick){
                    me.onItemClick(me.treeData[rowIndex]);
                }
            }
        },
        components: {
            MsTreeViewItem
        }
    }
</script>
<style>

</style>
