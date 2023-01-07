<template>
  <div class="list">
    <DirectionItem
        v-for="i in 15"
        :key="i"
        class="item"
        :active="activeItem === i"
        @click="activeItem = i"
    />
  </div>
</template>

<script setup>
import DirectionItem from './DirectionItem.vue';
import {ref} from 'vue';

const activeItem = ref(null);
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.item {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
