<script setup>
const props = defineProps({
    label: {type: String, required: true},
});
const emit = defineEmits(['click']);
</script>

<template>
    <button :class="$style.button" @click="emit('click')">{{ props.label }}</button>
</template>

<style module>
.button {
    display: block;
    padding: 16px 32px 16px 32px;
    border: 1px solid var(--color-button-bordered-default);
    border-radius: 8px;
    color: var(--color-button-bordered-default);
    font-size: 20px;
    line-height: 24px;
    background-color: inherit;

    cursor: pointer;
}
</style>