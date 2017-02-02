<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com/
Date: 2017/1/31
Time: 21:47-->
<template>
  <div>
    <input type="text" class="form-control" v-model="value" :placeholder="placeholder"  />
  </div>
</template>
<script>
    import {PropsMixin,LifecycleMixin,MethodsMixin} from "./mixins/index.js";
    export default {
      name:'ms-input',
      //mixins:[PropsMixin,LifecycleMixin,MethodsMixin],
      props:{
        value:{},
        placeholder:{
          type:String
        }
      },
      data(){
        return {

        }
      },
      methods:{
        handleChange:function(value){
          let me = this;
          me.value = value;
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
