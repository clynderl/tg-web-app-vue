<template>
  <div class="list">
    <DirectionItem
        v-for="i in 15"
        :key="i"
        class="item"
        :active="activeItem === i"
        @click="emit('change', i)"
    />
  </div>
</template>

<script setup>
import DirectionItem from './DirectionItem.vue';

defineProps({
  activeItem: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(['change']);
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
