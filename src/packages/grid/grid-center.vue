<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/15
Time: 12:45-->
<template>
    <div>
        <ms-grid-body :tree-structure="treeStructure"
                      :data="data"
                      :columns="columns">
        </ms-grid-body>
    </div>
</template>
<script>
    import PropsMixin from "./mixins/PropsMixin";
    import MethodsMixin from "./mixins/MethodsMixin";

    import MsGridBody from "./grid-body.vue";
    export default{
        mixins:[PropsMixin,MethodsMixin],
        data(){
            return{
            }
        },
        components:{
            MsGridBody
        }
    }
</script>
<style>

</style>

