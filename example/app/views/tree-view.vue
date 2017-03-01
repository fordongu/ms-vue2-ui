<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com/
Date: 2017/2/28
Time: 10:01-->
<template>
  <ms-tree-view :data="treeData" text-index="name" />
</template>
<script>
    import {MsTreeView} from "../../../src/index";
    export default {
        data(){
            return {
                treeData:[
                    {
                      name:'A',
                        children:[
                            {
                                name:'C'
                            },
                            {
                                name:'D'
                            }
                        ]
                    },
                    {
                        name:'B'
                    }
                ]
            }
        },
        components: {
            MsTreeView
        }
    }
</script>
<style>

</style>
