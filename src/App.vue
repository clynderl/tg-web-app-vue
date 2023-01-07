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
    tg.BackButton.show();
  } else if (step.value === 1) {
    step.value = 2;
    tg.MainButton.hide();
    tg.showConfirm('Вы уверены, что хотите обменять?', () => {
      tg.showAlert('Обмен успешно завершен', () => {
        step.value = 0;
        from.value = null;
        to.value = null;
        tg.MainButton.hide();
        tg.BackButton.hide();
      });
    }, () => {
      step.value = 1;
      tg.MainButton.show();
    });
  } else if (step.value === 2) {
    step.value = 3;
  }
});

tg.BackButton.onClick(() => {
  if (step.value === 1) {
    step.value = 0;
    tg.MainButton.show();
    tg.BackButton.hide();
  } else if (step.value === 2) {
    step.value = 1;
  } else if (step.value === 3) {
    step.value = 2;
  }
});

const onFromSelect = (val) => {
  from.value = val;
  tg.HapticFeedback.selectionChanged();
};

</script>

<template>
  <div>
    <TheHeader />
    <!--    work-->
    <!--    <Button type="button" @click="onToggleButton">Toggle</Button>-->
    <transition name="fade" mode="out-in">
      <DirectionsList v-if="step === 0" :active-item="from" @change="onFromSelect($event)" :step="step" />
    </transition>
    <transition name="fade" mode="out-in">
      <DirectionsList v-if="step === 1" :active-item="to" @change="to = $event" :step="step" />
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
