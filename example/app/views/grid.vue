<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/13
Time: 09:34-->
<template>
<div>
<m-s-grid />
</div>
</template>
<script>
    import {MSGrid} from "../../../src/index";
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
          ]
        }
      },
      components: {
        MSGrid
      }
    }
</script>
<style>

</style>
