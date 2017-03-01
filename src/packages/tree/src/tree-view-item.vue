<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com/
Date: 2017/2/28
Time: 15:18-->
<template>
<div class="ms-tree-view-item" v-show="show" @click="itemClick">
  <span v-for="space in record._level" class="glyphicon glyphicon-space"></span>
  <span v-if="!isLeaf" v-show="!record._expanded"  class="glyphicon glyphicon-plus"
        @click.stop="toggle"></span>
  <span v-if="!isLeaf" v-show="record._expanded" class="glyphicon glyphicon-minus" @click.stop="toggle"></span>
  <span v-if="isLeaf"  class="glyphicon glyphicon-space"></span>
  <label v-if="checkbox" @click.stop><input type="checkbox" @change="checkedChange"></label>
  {{record[textIndex]}}
</div>
</template>
<script>
    export default {
        name:'ms-tree-view-item',
        props:{
            msTreeViewId:{
                type:String
            },
            checkbox:{
                type:Boolean
            },
            record:{
                type:Object
            },
            index:{
                type:Number
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
            onExpandToggle:{
                type:Function
            },
            onItemClick:{
                type:Function
            },
            onSelectChange:{
                type:Function
            },
            onShowChildren:{
                type:Function
            }
        },
        computed:{
            show:function () {
              let me = this;
              let record = me.record;
              let show = (record._parent?(record._parent._expanded && record._parent._show):true);
                if(me.onShowChildren){
                    me.onShowChildren(me.index,show);
                }
              return show;
            },
            isLeaf:function () {
                let me = this;
                return (!me.record[me.childrenIndex] || me.record[me.childrenIndex].length==0 );
            }
        },
        methods:{
            checkedChange(e){
              let me = this;
              if(me.onSelectChange){
                  me.onSelectChange(me.index,e.target.checked);
              }
            },
            toggle(){
                let me = this;
                if(me.onExpandToggle){
                    me.onExpandToggle(me.index);
                }
            },
            itemClick(){
                let me = this;
                if(me.onItemClick){
                    me.onItemClick(me.index);
                }
            }
        },
        components: {}
    }
</script>
<style>

</style>
