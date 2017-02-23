<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com/
Date: 2017/2/9
Time: 21:51-->
<template>
<div style="height:300px;">
<!--  <div >
    <ms-panel layout="fit" :resize="bodyResize">
      <div slot="heading" >panel</div>
      <div>ddd</div>
    </ms-panel>
  </div>-->
  <ms-panel layout="fit" :resize="bodyResize">
    <div slot="heading" >panel</div>
    <ms-grid :tree-structure=true
             :height="bodyHeight"
             :data="data"
             :columns="columns"
             :bordered=true
             :scroll-x=true
             :scroll-y=true />
  </ms-panel>
</div>
</template>
<script>
    import {MsPanel,MsGrid} from "../../../src/index";
    export default {
    data(){
      return {
        bodyHeight:0,
                  data:[
            {
              name:'A',
              age:20,
              sex:'男',
            },
            {
              name:'B',
              age:20,
              sex:'男',
              children:[
                {
                  name:'D',
                  age:32,
                  sex:'女',
                  children:[
                    {
                      name:'F',
                      age:23,
                      sex:'男'
                    }
                  ]
                },
                {
                  name:'E',
                  age:33,
                  sex:'女'
                }
              ]
            },
            {
              name:'C',
              age:20,
              sex:'男'
            },
                        {
              name:'C',
              age:20,
              sex:'男'
            },
                        {
              name:'C',
              age:20,
              sex:'男'
            },
                        {
              name:'C',
              age:20,
              sex:'男'
            },
                        {
              name:'C',
              age:20,
              sex:'男'
            },
                        {
              name:'C',
              age:20,
              sex:'男'
            }
          ],
          columns:[
            {
              text:'姓名',
              dataIndex:'name',
              width:150,
              lockable:true,
            },
            {
              text:'姓名',
              dataIndex:'name',
              flex:1,
            },
            {
              text:'测试',
              columns:[
                {
                  text:'年龄',
                  dataIndex:'age',
                  width:800
                },
                {
                  text:'性别',
                  dataIndex:'sex',
                  width:100
                }
              ]
            },
            {
              text:'年龄',
              dataIndex:'age',
            },
            {
              text:'操作',
              width:100,
              lockable:true,
              lockPosition:"right"
            }
          ]
      }
    },
    methods:{
      bodyResize:function(width,height){
        let me = this;
        me.bodyHeight = height;
      }
    },
      components: {
        MsPanel,
        MsGrid
      }
    }
</script>
<style>

</style>
