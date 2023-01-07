<script setup>
import {onMounted} from 'vue';
import Button from './components/Button.vue';
import useTelegram from './use/useTelegram.js';
import TheHeader from './components/TheHeader.vue';
import DirectionItem from './components/DirectionItem.vue';

const {tg, onToggleButton} = useTelegram();

onMounted(() => {
  tg.ready();
  setTimeout(() => {
    tg.BackButton.show();
  }, 2000);
});
</script>

<template>
  <div>
    <TheHeader />
    work
    <DirectionItem />
    <Button type="button" @click="onToggleButton">Toggle</Button>
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
