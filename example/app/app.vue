<template lang="html">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <ul class="list-group">
          <li class="list-group-item"><router-link to="/layout">布局（Layout）</router-link></li>
          <li class="list-group-item"><router-link to="/panel">面板（Panel）</router-link></li>
          <li class="list-group-item"><router-link to="/carousel">走马灯（Carousel）</router-link></li>
          <li class="list-group-item"><router-link to="/grid">表格（Grid）</router-link></li>
          <li class="list-group-item"><router-link to="/menu">导航菜单（Menu）</router-link></li>
          <li class="list-group-item"><router-link to="/form">表单（Form）</router-link></li>
          <li class="list-group-item"><router-link to="/datepicker">日期选择器（Datepicker）</router-link></li>
          <li class="list-group-item"><router-link to="/datepicker-field">日期选择器(表单)（DatepickerField）</router-link></li>
          <li class="list-group-item"><router-link to="/tabs">标签页（Tabs）</router-link></li>
          <li class="list-group-item"><router-link to="/tree-view">树形视图（TreeView）</router-link></li>
        </ul>
      </div>
      <div class="col-md-9" style="min-height:300px;">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
      name: 'app'
    }
</script>
