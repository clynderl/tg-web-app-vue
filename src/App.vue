<script setup>
import {onMounted, ref, watch} from 'vue';
import Button from './components/Button.vue';
import useTelegram from './use/useTelegram.js';
import TheHeader from './components/TheHeader.vue';
import DirectionsList from './components/DirectionsList.vue';

const {tg, onToggleButton} = useTelegram();

const step = ref(0);
const from = ref(null);
const to = ref(null);

onMounted(() => {
  tg.ready();
  setTimeout(() => {
    tg.BackButton.show();
  }, 2000);
});


watch(from, (val) => {
  if (val) {
    onToggleButton();
  }
});

watch(to, (val) => {
  if (val) {
    onToggleButton();
  }
});

tg.MainButton.onClick(() => {
  if (step.value === 0) {
    step.value = 1;
    tg.MainButton.hide();
  } else if (step.value === 1) {
    step.value = 2;
    tg.MainButton.hide();
  } else if (step.value === 2) {
    step.value = 3;
  }
});

</script>

<template>
  <div>
    <TheHeader />
    work
    <Button type="button" @click="onToggleButton">Toggle</Button>

    <DirectionsList v-if="step === 0" :active-item="from" @change="from = $event" />
    <DirectionsList v-if="step === 1" :active-item="to" @change="to = $event" />
  </div>
</template>
