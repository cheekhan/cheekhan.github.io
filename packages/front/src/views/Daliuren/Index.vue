<script setup lang="ts">
import {currentInfo, useDate} from "./index";
import {ref, onMounted, computed} from "vue";
import TimeFormate from "./components/TimeFormate.vue";
import {GanZhi} from "@cheekhan/utils";
import {UsePan} from "./usePan.ts";

defineOptions({
  name: "DaliuRenIndex",
});
// 当前时间
const currentTime = ref(currentInfo);
// 地支列表
const diZhiList = ref(GanZhi.useDizhiList());
const diZhiSelectValue = ref(diZhiList.value[0]);
// 切换活数或正时
const useHour = ref(true);

/** -----------  排盘需要的信息 ------------ */
const date = ref(useDate());
const ymdInfo = computed(() => GanZhi.useYmdhInfo(date.value))
const sizhu = computed(() => {
  return {
    y: [ymdInfo.value.y[0].value, ymdInfo.value.y[1].value],
    m: [ymdInfo.value.m[0].value, ymdInfo.value.m[1].value],
    d: [ymdInfo.value.d[0].value, ymdInfo.value.d[1].value],
    h: [ymdInfo.value.h[0].value, ymdInfo.value.h[1].value],
  }
})
const monthLeader = computed(() => ymdInfo.value.yuejiang)

// 点击清空时，重置盘面
function resetInfo(v: string): void {
  if (!v) {
    date.value = useDate()
  }
}

/** -- 渲染盘 --- */
const pan = ref<UsePan | null>(null);
const container = ref<HTMLDivElement | null>(null);
onMounted(() => {
  if (container.value) {
    pan.value = new UsePan(container.value)
    pan.value.handleClick(() => {
      // 计算出月将加时、贵人所在，的 id
      pan.value?.handleStart(1, 1, 1)
    })
  }
})
</script>
<template>
  <div class="dlr-container flex-box">
    <div class="dlr-tool">
      <div class="radius-container">
        <TimeFormate v-bind="currentTime"/>
        <div class="tool-item">
          <p>日期：</p>
          <el-date-picker
              v-model="date"
              type="datetime"
              :clearable="true"
              placeholder="手动修改日期"
              @change="resetInfo"
          />
        </div>
        <div class="tool-item">
          <p>四柱：</p>
          <el-row style="margin:10px 0 5px 0">
            <el-col :offset="4" :span="4">{{ sizhu.y[0] }}</el-col>
            <el-col :span="4">{{ sizhu.m[0] }}</el-col>
            <el-col :span="4">{{ sizhu.d[0] }}</el-col>
            <el-col :span="4">{{ sizhu.h[0] }}</el-col>
          </el-row>
          <el-row style="margin:0 0 10px 0">
            <el-col :offset="4" :span="4">{{ sizhu.y[1] }}</el-col>
            <el-col :span="4">{{ sizhu.m[1] }}</el-col>
            <el-col :span="4">{{ sizhu.d[1] }}</el-col>
            <el-col :span="4">{{ sizhu.h[1] }}</el-col>
          </el-row>
        </div>
        <div class="tool-item flex-box flex-start">
          <p>月将：</p>
          <p style="color: var(--font-color-normal)">{{ monthLeader.value }}</p>
        </div>
        <div class="tool-item">
          <p>占时：</p>
          <div class="flex-box">
            <el-select
                v-model="diZhiSelectValue"
                value-key="id"
                placeholder="选择地支"
                style="width: 70px"
                :disabled="useHour"
                :size="'small'"
            >
              <el-option
                  v-for="item in diZhiList"
                  :key="item.id"
                  :label="item.value"
                  :value="item"
              />
            </el-select>
            <el-switch v-model="useHour" style="margin: 0 10px"/>
            <p :style="{ color: useHour ? '#9499ff' : '#98989f' }">
              {{ diZhiList[parseInt(currentTime.month) - 1]?.value }}
            </p>
          </div>
        </div>
      </div>
      <div class="radius-container dlr-info flex-box flex-start top-10">
        <div class="wx-box wx-bg-jin"></div>
        <p>金：庚、辛、申、酉、</p>
      </div>
      <div class="radius-container dlr-info flex-box flex-start">
        <div class="wx-box wx-bg-shui"></div>
        <p>水：壬、癸、子、亥</p>
      </div>
      <div class="radius-container dlr-info flex-box flex-start">
        <div class="wx-box wx-bg-mu"></div>
        <p>木：甲、乙、寅、卯</p>
      </div>
      <div class="radius-container dlr-info flex-box flex-start">
        <div class="wx-box wx-bg-huo"></div>
        <p>火：丙、丁、巳、午</p>
      </div>
      <div class="radius-container dlr-info flex-box flex-start bottom-border">
        <div class="wx-box wx-bg-tu"></div>
        <p>土：戊、己、丑、辰、未、戌</p>
      </div>
    </div>
    <div class="radius-container dlr-pan" ref="container"/>
  </div>
</template>
<style scoped>
/* 整体容器 */
.dlr-container {
  display: flex;
  min-width: 900px;
  margin: auto;
  padding-top: 10px;

  .dlr-tool {
    width: 260px;
  }

  .dlr-pan {
    width: 493px;
    height: 493px;
    margin-left: 20px;
    background-color: #1D1E1F;
    border: 2px solid #363637;
  }
}

/* 左侧信息区域 */
.tool-item {
  text-align: center;

  & > p {
    margin: 15px 0 5px 20px;
    font-size: 14px;
    color: var(--font-color-title);
    text-align: left;
  }
}

.dlr-info {
  /* margin-top: 10px; */
  height: 25px;
  border-radius: 0;

  & > p {
    margin: 0;
    padding: 0;
    font-size: 14px;
  }
}

.wx-box {
  display: inline-block;
  height: 25px;
  width: 40px;
  margin-right: 10px;
}

.wx-bg-jin {
  background-color: var(--wx-jin);
}

.wx-bg-shui {
  background-color: var(--wx-shui);
}

.wx-bg-mu {
  background-color: var(--wx-mu);
}

.wx-bg-huo {
  background-color: var(--wx-huo);
}

.wx-bg-tu {
  background-color: var(--wx-tu);
}

.top-10 {
  margin-top: 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.bottom-border {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
