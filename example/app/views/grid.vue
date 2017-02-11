<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/13
Time: 09:34-->
<template>
<div style="height:500px;">
  <div style="height:500px;">
    <ms-grid layout="fit" :tree-structure=true
             :data="data"
             :columns="columns"
             :bordered=true
             :scroll-x=true
             :scroll-y=true />
  </div>

</div>
</template>
<script>
    import {MsGrid} from "../../../src/index";
    import myButton from "./my-button.vue";
    export default {
      props:{
        p:{
          type:String,
          default(){
            return "props";
          }
        }
      },
      data(){
        return {
          test:'data',
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
                return '<my-button></my-button>';
              }
            }
          ]
        }
      },
      methods:{
        t:function(){
          alert(this.test);
        },
        dian:function(){
          this.test = "SSS";
        }
      },
      components: {
        MsGrid,
        myButton
      }
    }
</script>
<style>

</style>
