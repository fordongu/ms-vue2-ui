<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/13
Time: 09:34-->
<template>
<div>
<ms-grid :data="data" :columns="columns" />
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
              sex:'男'
            },
            {
              name:'A',
              age:20,
              sex:'男'
            },
            {
              name:'A',
              age:20,
              sex:'男'
            }
          ],
          columns:[
            {
              text:'姓名',
              dataIndex:'name',
              flex:1
            },
            {
              text:'年龄',
              dataIndex:'age'
            },
            {
              text:'性别',
              dataIndex:'sex'
            }
          ]
        }
      },
      components: {
        MsGrid
      }
    }
</script>
<style>

</style>
