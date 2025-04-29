<script setup>
import { ref, computed } from "vue"
// 传入数据
const props = defineProps({
    data: {
        type: Object
    }
})

const stem = computed(() => {
    const arr = [
        "子",
        "丑",
        "寅",
        "卯",
        "辰",
        "巳",
        "午",
        "未",
        "申",
        "酉",
        "戌",
        "亥",
    ]
    const step = props.data.stemIndex;
    const map = {}
    let index = step;
    while (arr.length) {
        if (index > 12) index = 1;
        map[index] = arr.shift();
        index += 1
    }
    return map
})

const gods = computed(() => {
    let arr = [
        "贵",
        "蛇",
        "雀",
        "合",
        "勾",
        "龙",
        "空",
        "虎",
        "常",
        "玄",
        "阴",
        "后",
    ]
    const step = props.data.godsIndex;
    const godsLayout = props.data.godsLayout;
    if (!godsLayout) {
        arr.reverse();
        arr.unshift(arr.pop())
    }
    const map = {}
    let index = step;
    while (arr.length) {
        if (index > 12) index = 1;
        map[index] = arr.shift();
        index += 1
    }
    return map
})

</script>

<template>
    <div class="case-container flex">
        <div style="width:50%">
            <div class="flex">
                <p>{{ data.dateTime.Y }}年{{ data.dateTime.M }}月{{ data.dateTime.D }}日，{{ data.dateTime.H }}:{{
                    data.dateTime.m }}</p>
                <p>本命:{{ data.user.root }}</p>
            </div>
            <table>
                <tbody>
                    <!-- 1 -->
                    <tr>
                        <td class="bg-1">巳</td>
                        <td class="bg-1" colspan="2" />
                        <td class="bg-1">午</td>
                        <td class="bg-1">未</td>
                        <td class="bg-1" colspan="2" />
                        <td class="bg-1">申</td>
                    </tr>
                    <!-- 2 -->
                    <tr>
                        <td class="bg-1" rowspan="2" />
                        <td class="bg-2" colspan="2">{{ stem[6] }}</td>
                        <td class="bg-2">{{ stem[7] }}</td>
                        <td class="bg-2">{{ stem[8] }}</td>
                        <td class="bg-2" colspan="2" style="text-align: right;">{{ stem[9] }}</td>
                        <td class="bg-1" rowspan="2" />
                    </tr>
                    <!-- 3 -->
                    <tr>
                        <td class="bg-2" />
                        <td class="bg-3">{{ gods[6] }}</td>
                        <td class="bg-3">{{ gods[7] }}</td>
                        <td class="bg-3">{{ gods[8] }}</td>
                        <td class="bg-3">{{ gods[9] }}</td>
                        <td class="bg-2" />
                    </tr>
                    <!-- 4 -->
                    <tr>
                        <td class="bg-1">辰</td>
                        <td class="bg-2">{{ stem[5] }}</td>
                        <td class="bg-3">{{ gods[5] }}</td>
                        <td class="bg-4" />
                        <td class="bg-4" />
                        <td class="bg-3">{{ gods[10] }}</td>
                        <td class="bg-2">{{ stem[10] }}</td>
                        <td class="bg-1">酉</td>
                    </tr>
                    <!-- 5 -->
                    <tr>
                        <td class="bg-1">卯</td>
                        <td class="bg-2">{{ stem[4] }}</td>
                        <td class="bg-3">{{ gods[4] }}</td>
                        <td class="bg-4" />
                        <td class="bg-4" />
                        <td class="bg-3">{{ gods[11] }}</td>
                        <td class="bg-2">{{ stem[11] }}</td>
                        <td class="bg-1">戌</td>
                    </tr>
                    <!-- 6 -->
                    <tr>
                        <td class="bg-1" rowspan="2" />
                        <td class="bg-2" />
                        <td class="bg-3">{{ gods[3] }}</td>
                        <td class="bg-3">{{ gods[2] }}</td>
                        <td class="bg-3">{{ gods[1] }}</td>
                        <td class="bg-3">{{ gods[12] }}</td>
                        <td class="bg-2" />
                        <td class="bg-1" rowspan="2" />
                    </tr>
                    <!-- 7 -->
                    <tr>
                        <td class="bg-2">{{ stem[3] }}</td>
                        <td class="bg-2" />
                        <td class="bg-2">{{ stem[2] }}</td>
                        <td class="bg-2">{{ stem[1] }}</td>
                        <td class="bg-2" />
                        <td class="bg-2">{{ stem[12] }}</td>
                    </tr>
                    <!-- 8 -->
                    <tr>
                        <td class="bg-1">寅</td>
                        <td class="bg-1" colspan="2" />
                        <td class="bg-1">丑</td>
                        <td class="bg-1">子</td>
                        <td class="bg-1" colspan="2" />
                        <td class="bg-1">亥</td>
                    </tr>

                </tbody>
            </table>
        </div>
        <div style="width:50%">
            <div class="flex">
                <p>{{ data.dateTimeZh.Y }}年</p>
                <!-- <p>{{ data.dateTimeZh.M }}月</p> -->
                <p>{{ data.dateTimeZh.D }}日</p>
                <p>{{ data.dateTimeZh.H }}时</p>
                <p>{{ data.dateTimeZh.m }}将</p>
                <p>流年{{ data.user.flow }}</p>
            </div>

        </div>
    </div>
</template>

<style scoped>
.flex {
    display: flex;
}

.vp-doc th,
.vp-doc td {
    padding: 8px 12px;
}

.vp-doc tr,
.vp-doc th,
.vp-doc td {
    border-width: 0;
}

.case-container {
    width: 100%;
}

p {
    margin: 0;
    padding: 0;
    text-align: center;
}

.bg-1 {
    background-color: rgb(24.4, 33.8, 43.5);
}

.bg-2 {
    background-color: rgb(44.9, 72.2, 31.4);
}

.bg-3 {
    background-color: rgb(33.2, 61.4, 90.5);
}

.bg-4 {
    background-color: #1D1D1D;
}
</style>