<template>
  <DirectionsList :directions="items" @change="emit('change', $event)" :active-item="activeItem" />
</template>

<script setup async>
import DirectionsList from './DirectionsList.vue';
import {computed, ref} from 'vue';

const props = defineProps({
  activeItem: {
    type: Object,
    default: () => ({}),
  },
  directions: {
    type: Array,
    default: () => [],
  },
});

const directionsIds = ref(null);
const directionsIdsResponse = await fetch('https://dev7d8d3h4.sova.gg/api/v1/calculator/from/');
directionsIds.value = await directionsIdsResponse.json();

const items = computed(() => {
  const result = [];
  props.directions.forEach((item) => {
    if (item.ids.some((id) => directionsIds.value.includes(id))) {
      result.push(item);
    }
  });
  return result;
});
const emit = defineEmits(['change']);
// directions() {
//   const result = [];
//   this.paySystems.forEach(item => {
//     if (item.ids.some(e => this.directionsIds.includes(e))) {
//       item.reserves = this.reserves.find(it => item.ids.includes(it.id));
//       result.push(item);
//     }
//   });
//   return result;
// },

</script>

<style scoped>

</style>
