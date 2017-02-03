<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com/
Date: 2017/1/31
Time: 21:47-->
<template>
  <div>
    <input type="text" class="form-control" :class="{'is-error':isError}" v-model="fieldValue" :placeholder="placeholder"  />
  </div>
</template>
<script>
    export default {
      name:'ms-input',
      props:{
        value:{},
        placeholder:{
          type:String
        }
      },
      data(){
        return {
            'fieldValue':this.value
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
