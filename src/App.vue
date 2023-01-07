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
    tg.BackButton.show();
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

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
