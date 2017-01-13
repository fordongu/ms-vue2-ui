<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/13
Time: 09:30-->
<template>
  <div>
    <ms-grid-center />
  </div>
</template>
<script>
    import PropsMixin from "./mixins/PropsMixin";
    import MethodsMixin from "./mixins/MethodsMixin";

    import MSGridCenter from "./grid-center.vue";
    export default {
      name:'ms-grid',
      mixins:[PropsMixin,MethodsMixin],
      props:{

      },
      computed:{
        dataCompute:function() {

        }
      },
      components: {
        MSGridCenter
      }
    }
</script>
<style>

</style>
