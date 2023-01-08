<template>
  <div class="list">
    <DirectionItem
        v-for="item in directions"
        :key="item.title"
        :title="item.name"
        :img="item.logo.simple"
        :active="activeItem?.name === item.name"
        class="item"
        @click="emit('change', item)"
    />
  </div>
</template>

<script setup>
import DirectionItem from './DirectionItem.vue';

defineProps({
  activeItem: {
    type: Object,
    default: () => ({}),
  },

  directions: {
    type: Array,
    default: () => [],
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
