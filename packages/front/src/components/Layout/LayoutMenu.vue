<script setup lang="ts">
import logoImg from "@/static/logo.jpg";
import {useRoute, useRouter} from "vue-router"
import {ref, watch} from "vue";

const route = useRoute()
const router = useRouter()

const menuItems = ref([
  {label: "起课排盘", path: "/daliuren", active: false},
  {label: "其他", path: "/sss", active: false},
])
watch(() => route.path, () => {
  menuItems.value.some(menuItem => {
    if (menuItem.path === route.path) {
      menuItem.active = true;
      return true;
    }
  })

})

/**
 * 点击操作时，除了跳转，还变样式
 * @param index
 */
function handleClick(index: number): void {
  menuItems.value.forEach((menuItem, itemIndex) => {
    if (index === itemIndex) {
      menuItem.active = true;
      router.push(menuItem.path);
    } else {
      menuItem.active = false;
    }
  })
}

</script>
<template>
  <div class="radius-container full-block">
    <div class="menu-top">
      <el-avatar :size="50" :src="logoImg"/>
      <p>决策稿</p>
      <el-divider/>
    </div>
    <div class="menu-body">
      <p v-for="(item,index) in menuItems" :key="index" :class="{'active-menu':item.active}"
         @click="handleClick(index)">{{ item.label }}</p>
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
    padding: 10px 30px 10px 10px;
    font-weight: bold;
    border-radius: 5px;
    background-color: var(--bg-dark-base);
    text-align: right;
    cursor: pointer;
    transition: all 0.5s;
  }

  & > p:hover {
    box-shadow: 0 0 5px 0 rgb(62, 107, 39);
  }
}

.active-menu {
  box-shadow: 0 0 5px 0 rgb(62, 107, 39);
}
</style>
