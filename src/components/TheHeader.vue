<template>
  <div class="header">
    <Button @click="onClose">Закрыть</Button>
    <span class="username">{{username}}</span>
  </div>
</template>

<script setup>
import Button from '../App.vue';
import {computed} from 'vue';
import useTelegram from '../use/useTelegram.js';

const {tg, onClose} = useTelegram();

const username = computed(() => {
  return tg.initDataUnsafe?.user?.username;
});
</script>

<style scoped>
.header {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.username {
  margin-left: auto;
}
</style>
