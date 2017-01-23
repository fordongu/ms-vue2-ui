<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com/
Date: 2017/1/23
Time: 23:48-->
<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <div>
        <slot></slot>
      </div>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script>
    export default {
      name:'ms-layout',
      components: {
      }
    }
</script>
<style>

</style>
