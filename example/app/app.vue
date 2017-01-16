<template lang="html">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <ul class="list-group">
          <li class="list-group-item"><router-link to="/carousel">走马灯（Carousel）</router-link></li>
        </ul>
      </div>
      <div class="col-md-9">
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
