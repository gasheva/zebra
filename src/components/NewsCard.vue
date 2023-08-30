<script setup>

import BaseCard from '@/ui/card/BaseCard.vue';
import BaseTag from '@/ui/tag/BaseTag.vue';
import {useDate} from '@/composable/useDate';

const {getDay, getMonthAndYear} = useDate();

const props = defineProps({
    name: {type: String, default: ''},
    previewText: {type: String, default: ''},
    image: {type: String, default: ''},
    date: {type: Number, default: 0},
    link: {type: String, default: ''},
    type: {type: String, default: ''},
})

</script>

<template>
    <base-card :img-src="image">
        <template #default>
            <div :class="$style.content">
                <div :class="[$style.content_date, $style.date]">
                    <div :class="$style.date_day">{{ getDay(props.date) }}</div>
                    <div :class="$style.date_monthYear">
                        {{ getMonthAndYear(props.date) }}
                    </div>
                </div>
                <h3 :class="$style.card_header">{{ props.name }}</h3>
                <p :class="$style.card_text">{{ props.previewText }}</p>

                <div :class="$style.card_tag">
                    <base-tag :label="props.type"/>
                </div>
            </div>
        </template>
    </base-card>
</template>

<style module>
.content {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 32px;
}

.content_date {
}

.date {
    display: flex;
    color: var(--color-black-30);
}

.date_day {
    display: flex;
    align-items: end;
    margin-right: 4px;
    line-height: 36px;
    font-size: 36px;
}

.date_monthYear {
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 700;
    line-height: 16.5px;
    white-space: break-spaces;
}

.card_header {
    margin: 16px 0;
    font-size: 22px;
    line-height: 26px;
    color: var(--color-link);
}

.card_text {
    margin-bottom: 20px;
    font-size: 20px;
    line-height: 26px;
    color: var(--color-black-85);
}

.card_tag {
    margin-top: auto;
}
</style>