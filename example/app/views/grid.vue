<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/13
Time: 09:34-->
<template>
<div>

<ms-grid :tree-structure=true
         :data="data"
         :columns="columns"
         :height=200
         :bordered=true
         :scroll-x=true
         :scroll-y=true />

</div>
</template>
<script>
    import {MsGrid} from "../../../src/index";
    export default {
      data(){
        return {
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
              lockPosition:"right",
              render:function(){
                return '<button>删除</button>';
              }
            }
          ]
        }
      },
      methods:{
        t(){
          alert("sss");
        }
      },
      components: {
        MsGrid
      }
    }
</script>
<style>

</style>
