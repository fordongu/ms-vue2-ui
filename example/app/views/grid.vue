<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/13
Time: 09:34-->
<template>
<div>
<ms-grid />
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
