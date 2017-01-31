<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com/
Date: 2017/1/31
Time: 21:47-->
<template>
  <input :type="type" class="form-control"  :placeholder="placeholder">
</template>
<script>
    export default {
      name:'ms-input',
      props:{
        type:{
          type:String,
          default(){
            return "text";
          }
        },
        placeholder:{
          type:String
        }
      },
      components: {
      }
    }
</script>
<style>

</style>
