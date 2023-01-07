<script setup>
import {onMounted, ref, watch} from 'vue';
import Button from './components/Button.vue';
import useTelegram from './use/useTelegram.js';
import TheHeader from './components/TheHeader.vue';
import DirectionsList from './components/DirectionsList.vue';

const {tg, onToggleButton} = useTelegram();

onMounted(() => {
  tg.ready();
  setTimeout(() => {
    tg.BackButton.show();
  }, 2000);
});

const from = ref(null);

watch(from, (val) => {
  if (val) {
    onToggleButton();
  }
});
</script>

<template>
  <div>
    <TheHeader />
    work
    <Button type="button" @click="onToggleButton">Toggle</Button>

    <DirectionsList :active-item="from" @change="from = $event" />
  </div>
</template>
