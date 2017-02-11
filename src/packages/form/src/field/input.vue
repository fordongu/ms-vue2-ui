<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com
Date: 2017/2/4
Time: 10:08-->
<template>
<div class="ms-field-input">
    <input type="text"  class="form-control" v-model="fieldValue" :placeholder="placeholder"  />
</div>
</template>
<script>
    export default {
        name:'ms-input',
        props: {
            type:{
                type:String,
                default: 'text'
            },
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
        computed: {},
        components: {}
    }
</script>
<style>

</style>
