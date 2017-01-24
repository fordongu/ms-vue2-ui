<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com/
Date: 2017/1/23
Time: 23:51-->
<template>
  <layout>
    <h1 slot="north">这里可能是一个页面标题</h1>
    <div slot="east">实打实的</div>
    <p>主要内容的一个段落。</p>
    <p>另一个主要段落。</p>
    <p slot="south">这里有一些联系信息</p>
  </layout>
</template>
<script>
    import {Layout} from "../../../src/index";
    export default {
      components: {
        Layout
      }
    }
</script>
<style>

</style>
