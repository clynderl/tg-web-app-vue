<template>
  <div class="header">
    <Button @click="onClose">Закрыть</Button>
    <span class="username">{{username}}</span>
    <img :src="photoUrl" alt="" class="img">
  </div>
</template>

<script setup>
import Button from './Button.vue';
import {computed} from 'vue';
import useTelegram from '../use/useTelegram.js';

const {tg, onClose} = useTelegram();

const username = computed(() => {
  return tg.initDataUnsafe?.user?.username;
});

const photoUrl = computed(() => {
  return tg.initDataUnsafe?.user?.photo_url;
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

.img {
  width: 30px;
  height: 30px;
  margin-left: 10px;
  border-radius: 50%;
}
</style>
