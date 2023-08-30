<script setup>
const props = defineProps({
    imgSrc: {type: String, default: ''},
})
</script>

<template>
    <div :class="$style.card">
        <img v-if="props.imgSrc" :src="imgSrc">
        <slot/>
    </div>
</template>

<style module>
.card {
    display: flex;
    flex-direction: column;
    width: 536px;
    min-height: 570px;
    border: 1px solid #0F62FE;
    border-radius: 16px;
    overflow: hidden;
}
</style>