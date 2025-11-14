<script setup lang="ts">
  import type { CurrenTimeInfo } from "../types";
  import { currentInfo } from "../index";
  defineOptions({
    name: "TimeFormate",
  });
  const {
    year = currentInfo.year,
    month = currentInfo.month,
    day = currentInfo.day,
    time = currentInfo.time,
  } = defineProps<Partial<CurrenTimeInfo>>();
</script>
<template>
  <div class="flex-box tf-box">
    <div>
      <p class="p-y">{{ year }}</p>
      <p class="p-m">{{ month }}月{{ day }}日</p>
    </div>
    <p class="p-t">{{ time }}</p>
  </div>
</template>
<style scoped>
  .tf-box {
    p {
      padding: 0;
      margin: 0;
      text-align: right;
    }
    .p-y {
      margin: 10px 0;
      font-size: 24px;
    }
    .p-m {
      margin-bottom: 10px;
    }
    .p-t {
      margin-left: 10px;
      font-size: 36px;
      font-weight: bold;
      color: #cfd3dc;
    }
  }
</style>
