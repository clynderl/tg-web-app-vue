<script setup async>
import {ref} from 'vue';
import FromDirections from './FromDirections.vue';

const directions = ref(null);
const directionsResponse = await fetch('https://dev7d8d3h4.sova.gg/api/v1/calculator/');
directions.value = await directionsResponse.json();
</script>

<template>
  <div class="exchange">
    <Suspense>
      <template #default>
        <FromDirections :directions="directions" />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<style scoped>
.exchange {
  background: var(--tg-theme-text-color);
  border-radius: 10px;
}
</style>
