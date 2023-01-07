<script setup>
import {onMounted} from 'vue';

const tg = window.Telegram.WebApp;

onMounted(() => {
  tg.ready();
});
const onClose = () => {
  tg.close();
};
</script>

<template>
  <div>
    work
    <button @click="onClose">Close</button>
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
