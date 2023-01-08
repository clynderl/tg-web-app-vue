<script setup async>
import {ref, watch} from 'vue';
import FromDirections from './FromDirections.vue';
import useTelegram from '../use/useTelegram.js';

const directions = ref(null);
const directionsResponse = await fetch('https://dev7d8d3h4.sova.gg/api/v1/calculator/');
directions.value = await directionsResponse.json();

const fromActive = ref(null);

const {onToggleButton} = useTelegram();

watch(fromActive, (val) => {
  if (val) {
    onToggleButton();
  }
});
</script>

<template>
  <div class="exchange">
    <h1 class="title">1. Отдаете</h1>
    <Suspense>
      <template #default>
        <FromDirections :directions="directions" :active-item="fromActive" @change="fromActive = $event" />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<style scoped>
.exchange {

}

.title {
  font-size: 24px;
  margin-bottom: 20px;
  margin-left: 10px;
  color: var(--tg-theme-text-color);
}
</style>
