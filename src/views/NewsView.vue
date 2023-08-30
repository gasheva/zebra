<script setup>
import NewsCard from '@/components/NewsCard.vue';
import {useNewsRequests} from '@/composable/useNewsRequests';
import {onMounted, ref} from 'vue';
import BaseButton from '@/ui/button/BaseButton.vue';

const {get: getNews} = useNewsRequests();

const error = ref(null);
const news = ref([]);
const totalPageCount = ref(null);
const currentPageNumber = ref(1);

onMounted(async () => {
    const result = await getNews();
    if(result.failed) {
        error.value = result.error;
        return;
    }
    news.value = result.data.items;
    totalPageCount.value = result.data.nav.total;
});

const onLoad = async () => {
    currentPageNumber.value++;
    const result = await getNews(currentPageNumber.value);
    if(result.failed) {
        error.value = result.error;
        return;
    }
    news.value = [...news.value, ...result.data.items];
}

</script>

<template>
    <div>
        <template v-if="!error">
            <div :class="$style.news">
                <news-card v-for="n in news" :key="n.code" v-bind="n" :type="n.type.value"/>
            </div>
            <div v-if="currentPageNumber < totalPageCount" :class="$style.news_footer">
                <base-button :class="$style.news_button" label="Загрузить ещё" @click="onLoad"/>
            </div>
        </template>
        <div :class="$style.error" v-else>{{error}}</div>
    </div>
</template>

<style module>
.news {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 64px;
    max-width: 100%;
    margin-top: 64px;
}
.news_footer {
    margin: 72px 0;
}
.news_button {
    margin: 0 auto;
}
.error {
    margin-top: 64px;
    font-size: 24px;
    line-height: 28px;
    color: var(--color-red);
}
</style>