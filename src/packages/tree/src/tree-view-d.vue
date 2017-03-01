<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com/
Date: 2017/2/28
Time: 09:55-->
<template>
  <ul class="ms-tree-view">
    <li v-for="(item,index) in data">
      <div @click="itemClick(item)">
        <span v-if="!item._leaf" v-show="!item._expanded" class="glyphicon glyphicon-plus"
              @click.stop="toggle(item)"></span>
        <span v-if="!item._leaf" v-show="item._expanded" class="glyphicon glyphicon-minus" @click.stop="toggle(item)"></span>
        <span v-if="item._leaf"  class="glyphicon glyphicon-space"></span>
        <label @click.stop><input type="checkbox" @change="selectChange(item,$event)" ></label>
        <span>{{item['name']}}</span>
      </div>
      <div v-if="!item._leaf" v-show="item._expanded">
        <ms-tree-view :data="item['children']" />
      </div>
    </li>
  </ul>
</template>
<script>
    import Vue from "vue";
    import _ from "lodash";
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
            onItemClick:{
                type:Function
            },
            onSelectChange:{
                type:Function
            }
        },
        data(){
            return {
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
                      me.dataFormat(me.data);
                  }
                },
                immediate: true
            }
        },
        created(){
          let me = this;

        },
        methods:{
            dataFormat(data,level){
              let me = this;
                _.forEach(data,function (item) {
                    if(item[me.childrenIndex] &&  item[me.childrenIndex].length>0){
                        Vue.set(item,'_leaf',false);
                        if(item._expanded == undefined){
                            Vue.set(item,'_expanded',true);
                        }
                        me.dataFormat(item[me.childrenIndex],level);
                    }else {
                        Vue.set(item,'_leaf',true);
                    }
                });
            },
            toggle(item){
                let me = this;
                item._expanded = !item._expanded;
            },
            itemClick(item){
                let me = this;
                if(me.onItemClick){
                    me.onItemClick(item);
                }
            },
            selectChange(item,e){
                let me = this;
                if(e.target.checked){
                    me.selectItems.push(item);
                }else {
                    let index = _.indexOf(me.selectItems,item);
                    me.selectItems.splice(index,1)
                }
                if(me.onSelectChange){
                    me.onSelectChange(item,me.selectItems);
                }
            }
        },
        components: {}
    }
</script>
<style>

</style>
