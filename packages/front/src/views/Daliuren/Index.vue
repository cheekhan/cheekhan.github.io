<script setup lang="ts">
import {
  currentInfo,
  dateTime,
  dateTimeInfo,
  monthIndex,
  diZhiOptions,
  diZhiSelect,
  useHour,
  guiRenOnBranch,
  qiKe,
} from "./index";
import {ref, onMounted, computed} from "vue";
import TimeFormate from "./components/TimeFormate.vue";
import {UsePan} from "./usePan.ts";

defineOptions({
  name: "DaliuRenIndex",
});

/** -----------  排盘需要的信息 ------------ */

// 点击清空时，重置盘面
function resetInfo(v: string): void {
  if (!v) {
    dateTime.value = currentInfo.value.formate;
  }
}

// 时间格式化

const sizhu = computed(() => {
  return {
    y: [dateTimeInfo.value.y[0].value, dateTimeInfo.value.y[1].value],
    m: [dateTimeInfo.value.m[0].value, dateTimeInfo.value.m[1].value],
    d: [dateTimeInfo.value.d[0].value, dateTimeInfo.value.d[1].value],
    h: [dateTimeInfo.value.h[0].value, dateTimeInfo.value.h[1].value],
  };
});

/** -- 渲染盘 --- */
let pan: UsePan;
const container = ref<HTMLDivElement | null>(null);
onMounted(() => {
  if (container.value) {
    pan = new UsePan(container.value);
    pan.handleClick(() => {
      const jiashi = useHour.value
          ? dateTimeInfo.value.h[1]
          : diZhiSelect.value;
      pan.handleStart(
          monthIndex.value,
          jiashi,
          dateTimeInfo.value.d[0],
          dateTimeInfo.value.h[1],
      );
      // const ke =
      qiKe(jiashi, monthIndex.value, guiRenOnBranch.value);

      // qiKe(jiashi!, monthLeader.value, diZhiList.value[4]);
    });
  }
});
</script>
<template>
  <div class="dlr-container flex-box">
    <div class="dlr-tool">
      <div class="radius-container">
        <TimeFormate v-bind="currentInfo"/>
        <div class="tool-item">
          <p>日期：</p>
          <el-date-picker
              v-model="dateTime"
              type="datetime"
              :clearable="true"
              placeholder="手动修改日期"
              @change="resetInfo"
          />
        </div>
        <div class="tool-item">
          <p>四柱：</p>
          <el-row style="margin: 10px 0 5px 0">
            <el-col :offset="4" :span="4">{{ sizhu.y[0] }}</el-col>
            <el-col :span="4">{{ sizhu.m[0] }}</el-col>
            <el-col :span="4">{{ sizhu.d[0] }}</el-col>
            <el-col :span="4">{{ sizhu.h[0] }}</el-col>
          </el-row>
          <el-row style="margin: 0 0 10px 0">
            <el-col :offset="4" :span="4">{{ sizhu.y[1] }}</el-col>
            <el-col :span="4">{{ sizhu.m[1] }}</el-col>
            <el-col :span="4">{{ sizhu.d[1] }}</el-col>
            <el-col :span="4">{{ sizhu.h[1] }}</el-col>
          </el-row>
        </div>
        <div class="tool-item flex-box flex-start">
          <p>月将：</p>
          <p style="color: var(--font-color-normal)">{{ monthIndex.value }}</p>
        </div>
        <div class="tool-item">
          <p>占时：</p>
          <div class="flex-box">
            <el-select
                v-model="diZhiSelect"
                value-key="id"
                placeholder="选择地支"
                style="width: 70px"
                :disabled="useHour"
                :size="'small'"
            >
              <el-option
                  v-for="item in diZhiOptions"
                  :key="item.id"
                  :label="item.value"
                  :value="item"
              />
            </el-select>
            <el-switch v-model="useHour" style="margin: 0 10px"/>
            <p :style="{ color: useHour ? '#9499ff' : '#98989f' }">
              {{ diZhiOptions[parseInt(currentInfo.month) - 1]?.value }}
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
    background-color: #1d1e1f;
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
