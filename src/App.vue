<script setup>
import {onMounted, ref, watch} from 'vue';
import Button from './components/Button.vue';
import useTelegram from './use/useTelegram.js';
import TheHeader from './components/TheHeader.vue';
import DirectionsList from './components/DirectionsList.vue';
import Exchange from './components/Exchange.vue';

const {tg} = useTelegram();

// const step = ref(0);
// const from = ref(null);
// const to = ref(null);
//
onMounted(() => {
  tg.ready();
  tg.isClosingConfirmationEnabled = true;
});
//
//
// watch(from, (val) => {
//   if (val) {
//     onToggleButton();
//   }
// });
//
// watch(to, (val) => {
//   if (val) {
//     onToggleButton();
//   }
// });
//

//

//
// const onFromSelect = (val) => {
//   from.value = val;
//   tg.HapticFeedback.selectionChanged();
// };

</script>

<template>
  <div>
    <TheHeader />
    <!--    work-->
    <!--    <Button type="button" @click="onToggleButton">Toggle</Button>-->
    <div class="container">
      <Suspense>
        <template #default>
          <Exchange />
        </template>
        <template #fallback>
          <div>Parent: Загрузка...</div>
        </template>
      </Suspense>
    </div>
    <!--    <transition name="fade" mode="out-in">-->
    <!--      <DirectionsList v-if="step === 0" :active-item="from" @change="onFromSelect($event)" :step="step" />-->
    <!--    </transition>-->
    <!--    <transition name="fade" mode="out-in">-->
    <!--      <DirectionsList v-if="step === 1" :active-item="to" @change="to = $event" :step="step" />-->
    <!--    </transition>-->
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

.container {
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
