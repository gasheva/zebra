<script setup>
const props = defineProps({
    label: {type: String, required: true}
})
</script>

<template>
    <span :class="$style.tag">{{ props.label }}</span>
</template>

<style module>
.tag {
    display: inline-block;
    padding: 4px 16px 4px 16px;
    border-radius: 360px;
    background-color: var(--color-background-blue-pale);
    color: var(--color-link-dark);
    font-size: 14px;
    line-height: 19.6px;
}
</style>