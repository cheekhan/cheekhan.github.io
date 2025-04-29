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
                <p style="margin-right:38px;">本命：{{ data.user.root }}</p>
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
            <p class="table-title-p">四课：</p>
            <table>
                <tbody>
                    <tr>
                        <td></td>
                        <td>{{ data.sike[1].god }}</td>
                        <td></td>
                        <td>{{ data.sike[2].god }}</td>
                        <td></td>
                        <td>{{ data.sike[3].god }}</td>
                        <td></td>
                        <td>{{ data.sike[4].god }}</td>
                    </tr>
                    <tr>
                        <td>{{ data.sike[1].topAttr }}</td>
                        <td>{{ data.sike[1].top }}</td>
                        <td>{{ data.sike[2].topAttr }}</td>
                        <td>{{ data.sike[2].top }}</td>
                        <td>{{ data.sike[3].topAttr }}</td>
                        <td>{{ data.sike[3].top }}</td>
                        <td>{{ data.sike[4].topAttr }}</td>
                        <td>{{ data.sike[4].top }}</td>
                    </tr>
                    <tr>
                        <td>{{ data.sike[1].bottomAttr }}</td>
                        <td>{{ data.sike[1].bottom }}</td>
                        <td>{{ data.sike[2].bottomAttr }}</td>
                        <td>{{ data.sike[2].bottom }}</td>
                        <td>{{ data.sike[3].bottomAttr }}</td>
                        <td>{{ data.sike[3].bottom }}</td>
                        <td>{{ data.sike[4].bottomAttr }}</td>
                        <td>{{ data.sike[4].bottom }}</td>
                    </tr>
                </tbody>
            </table>
            <p class="table-title-p">三传：</p>
            <table>
                <tbody>
                    <tr>
                        <td>{{ data.sanchuan[1].lq }}</td>
                        <td>{{ data.sanchuan[1].dun }}</td>
                        <td>{{ data.sanchuan[1].chuan }}</td>
                        <td>{{ data.sanchuan[1].god }}</td>
                        <td>{{ data.sanchuan[1].isEmpty ? '☉' : '◎' }}</td>
                        <td>{{ data.sanchuan[1].sha }}</td>
                        <td>{{ data.sanchuan[1].wu }}</td>
                        <td>{{ data.sanchuan[1].shier }}</td>
                    </tr>
                    <tr>
                        <td>{{ data.sanchuan[2].lq }}</td>
                        <td>{{ data.sanchuan[2].dun }}</td>
                        <td>{{ data.sanchuan[2].chuan }}</td>
                        <td>{{ data.sanchuan[2].god }}</td>
                        <td>{{ data.sanchuan[2].isEmpty ? '☉' : '◎' }}</td>
                        <td>{{ data.sanchuan[2].sha }}</td>
                        <td>{{ data.sanchuan[2].wu }}</td>
                        <td>{{ data.sanchuan[2].shier }}</td>
                    </tr>
                    <tr>
                        <td>{{ data.sanchuan[3].lq }}</td>
                        <td>{{ data.sanchuan[3].dun }}</td>
                        <td>{{ data.sanchuan[3].chuan }}</td>
                        <td>{{ data.sanchuan[3].god }}</td>
                        <td>{{ data.sanchuan[3].isEmpty ? '☉' : '◎' }}</td>
                        <td>{{ data.sanchuan[3].sha }}</td>
                        <td>{{ data.sanchuan[3].wu }}</td>
                        <td>{{ data.sanchuan[3].shier }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <p class="result">{{ data.result }}</p>
</template>

<style scoped>
.flex {
    display: flex;
    justify-content: space-between;
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

.vp-doc table {
    margin: 10px auto 0;
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

.table-title-p {
    text-align: left;
    background-color: rgb(132.5, 64, 64);
    padding-left: 20px;
    border-radius: 4px;
    margin-top: 10px;
}

.result {
    background-color: #0A0A0A;
    text-align: left;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #000000;
    margin-top: 10px;
}
</style>