<script setup>
import Yin from "./yin.vue";
import yang from "./yang.vue";
const props = defineProps({
    data: Object
})
</script>

<template>
    <table class="liuyao-case-container">
        <tbody>
            <tr>
                <td colspan="2" />
                <td colspan="3">{{ data.from }}</td>
                <td></td>
                <td colspan="3">{{ data.to }}</td>
            </tr>
            <tr v-for="(_i, item) in 6">
                <td>{{ data.show[item] }}</td>
                <td>{{ data.fuIndex == item ? data.fu : '' }}</td>
                <td>{{ data.yao[item].lq }}</td>
                <td>
                    <component :is="data.yao[item].yy ? yang : Yin" />
                </td>
                <td>{{ data.yao[item].type == '1' ? '世' : data.yao[item].type == '2' ? '应' : '' }}</td>
                <td>{{ data.yao[item].move ? '->' : '' }}</td>
                <td>{{ data.yao2[item].lq }}</td>
                <td>
                    <component :is="data.yao2[item].yy ? yang : Yin" />
                </td>
                <td>{{ data.yao2[item].type == '1' ? '世' : data.yao2[item].type == '2' ? '应' : '' }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
.liuyao-case-container {
    margin: auto
}
</style>
