<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com/
Date: 2017/1/31
Time: 21:47-->
<template>
  <div>
    <input type="text" class="form-control" v-model="fieldValue" :placeholder="placeholder" />
  </div>
</template>
<script>
    import {PropsMixin,LifecycleMixin,MethodsMixin} from "./mixins/index.js";
    export default {
      name:'ms-input',
      mixins:[PropsMixin,LifecycleMixin,MethodsMixin],
      props:{
        placeholder:{
          type:String
        }
      },
      data(){
        return {

        }
      },
      updated(){
          let me = this;
          console.log(me.value);
      },
      components: {
      }
    }
</script>
<style>

</style>
