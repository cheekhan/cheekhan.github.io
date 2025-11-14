<script setup lang="ts">
  import logoImg from "@/static/logo.jpg";
</script>
<template>
  <div class="radius-container full-block">
    <div class="menu-top">
      <el-avatar :size="50" :src="logoImg" />
      <p>决策稿</p>
      <el-divider />
    </div>
    <div class="menu-body">
      <p>起课</p>
    </div>
  </div>
</template>
<style scoped>
  .menu-top {
    margin-top: 15px;
    text-align: center;
    & > p {
      margin: 10px 0;
      padding: 0;
    }
  }
  .menu-body {
    text-align: left;
    & > p {
      margin: 20px 10px 20px 10px;
      padding: 10px;
      font-weight: bold;
      border-radius: 5px;
      background-color: #161618;
    }
  }
</style>
