<template>
  <div>
    test
  </div>
</template>

<script setup>
import {ref} from 'vue';

const props = defineProps({
  fromActive: {
    type: Object,
    default: () => ({}),
  },
  toActive: {
    type: Object,
    default: () => ({}),
  },
});
const pairData = ref(null);
const pairDataResponse = await fetch(`https://dev7d8d3h4.sova.gg/api/v1/calculator/pair/${props.fromActive.ids[0]}/${props.toActive.ids[0]}/`);
pairData.value = await pairDataResponse.json();

</script>

<style scoped>

</style>
