<script setup async>
import {computed, ref, watch} from 'vue';
import FromDirections from './FromDirections.vue';
import useTelegram from '../use/useTelegram.js';
import ToDirections from './ToDirections.vue';
import ExchangeCalculator from './ExchangeCalculator.vue';
import ExchangeDetails from './ExchangeDetails.vue';

const step = ref(0);

const directions = ref(null);
const directionsResponse = await fetch('https://dev7d8d3h4.sova.gg/api/v1/calculator/');
directions.value = await directionsResponse.json();

const fromActive = ref(null);
const toActive = ref(null);

const {tg, onToggleButton} = useTelegram();

watch(fromActive, (val) => {
  if (val) {
    onToggleButton();
  }
});

watch(toActive, (val) => {
  if (val) {
    onToggleButton();
  }
});


tg.MainButton.onClick(() => {
  if (step.value === 0) {
    step.value = 1;
    tg.MainButton.hide();
    tg.BackButton.show();
  } else if (step.value === 1) {
    step.value = 2;
    // tg.MainButton.hide();
    // tg.showConfirm('Вы уверены, что хотите обменять?', () => {
    //   tg.showAlert('Обмен успешно завершен', () => {
    //     step.value = 0;
    //     from.value = null;
    //     to.value = null;
    //     tg.MainButton.hide();
    //     tg.BackButton.hide();
    //   });
    // }, () => {
    //   step.value = 1;
    //   tg.MainButton.show();
    // });
    tg.MainButton.show();
    tg.BackButton.show();
  } else if (step.value === 2) {
    step.value = 3;
    tg.MainButton.hide();
  }
});

tg.BackButton.onClick(() => {
  if (step.value === 1) {
    step.value = 0;
    tg.MainButton.show();
    tg.BackButton.hide();
  } else if (step.value === 2) {
    step.value = 1;
    tg.MainButton.show();
    tg.BackButton.show();
  } else if (step.value === 3) {
    step.value = 2;
  }
});

const title = computed(() => {
  if (step.value === 0) {
    return '1. Отдаете';
  }
  if (step.value === 1) {
    return '2. Получаете';
  }
  if (step.value === 2) {
    return '3. Калькулятор обмена';
  }
  if (step.value === 3) {
    return '4. Ваши реквизиты';
  }
});
</script>

<template>
  <div class="exchange">
    <h1 class="title" @click="step++">{{ title }}</h1>
    <Suspense v-if="step === 0">
      <template #default>
        <FromDirections
            :directions="directions"
            :active-item="fromActive"
            @change="fromActive = $event"
        />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
    <Suspense v-else-if="step === 1">
      <template #default>
        <ToDirections
            :fromDirection="fromActive"
            :directions="directions"
            :active-item="toActive"
            @change="toActive = $event"
        />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
    <Suspense v-else-if="step === 2">
      <template #default>
        <ExchangeCalculator :from-active="fromActive" :to-active="toActive" />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
    <Suspense v-else-if="step === 3">
      <template #default>
        <ExchangeDetails :from-active="fromActive" :to-active="toActive" />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<style scoped>
.exchange {

}

.title {
  font-size: 24px;
  margin-bottom: 20px;
  margin-left: 10px;
  color: var(--tg-theme-text-color);
}
</style>
