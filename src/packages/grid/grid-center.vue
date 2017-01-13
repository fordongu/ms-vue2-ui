<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/13
Time: 09:30-->
<template>
  <div>ss</div>
</template>
<script>
    import PropsMixin from "./mixins/PropsMixin";
    import MethodsMixin from "./mixins/MethodsMixin";
    export default {
      name:'ms-grid-center',
      mixins:[PropsMixin,MethodsMixin],
      props:{
        centerColumns:{
          type:Array,
          default:function() {
            return [];
          }
        }
      },
      components: {
      }
    }
</script>
<style>

</style>
