<template>
  <div>
    <p class="hint">Отдаете</p>
    <div class="input-box">
      <div class="image-box">
        <img :src="fromActive?.logo?.simple" alt="">
      </div>
      <input type="number" class="input">

    </div>
    <p class="hint">Получаете</p>
    <div class="input-box">
      <div class="image-box">
        <img :src="toActive?.logo?.simple" alt="">
      </div>
      <input type="number" class="input">

    </div>
    <div class="course">
      <div class="title">Курс обмена</div>
      <div class="value">
        {{ course.from }} {{ fromActive.currency[0].toUpperCase() }} = {{ course.to }}
        {{ toActive.currency[0].toUpperCase() }}
      </div>
    </div>
    <pre>
<!--    {{ fromActive }}-->
      <!--    {{ toActive }}-->
      <!--    {{ pairData }}-->
<!--      {{ course }}-->
    </pre>
  </div>
</template>

<script setup async>
import {computed, ref} from 'vue';

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
const pairDataResponse = await fetch(`https://dev7d8d3h4.alt-coin.cc/api/v1/calculator/pair/${props.fromActive.ids[0]}/${props.toActive.ids[0]}/`);
pairData.value = await pairDataResponse.json();
const roundNumber = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);
const course = computed(() => {
  return pairData.value.course > 1 ? {
    from: 1,
    to: roundNumber(pairData.value?.course, pairData.value?.to?.round),
  } : {from: roundNumber(1 / pairData.value?.course, pairData.value?.from?.round), to: 1};
});

// const ranges = computed(() => {
//   return {
//     min: pairData.value?.from?.max ? pairData.value?.from?.min : pairData.value?.to?.min / pairData.value?.course,
//     max: pairData.value?.from?.max,
//   };
// });
// rate() {
// return this.course > 1 ? { from: 1, to: roundNumber(this.course, this.round.to) } : { from: roundNumber(1 / this.course, this.round.from), to: 1 };
</script>

<style scoped>
.hint {
  font-size: 14px;
  color: var(--tg-theme-hint-color);
}

.input-box {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 51px;
  border-radius: 10px;
  background: var(--tg-theme-secondary-bg-color);
}

.image-box {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  width: 48px;
  height: 48px;
}

.image-box > img {
  width: 32px;
  height: 32px;
}

.input {
  font: inherit;
  color: currentColor;
  width: 100%;
  border: 0;
  height: inherit;
  margin: 0;
  display: block;
  padding: 6px 0 7px;
  font-size: 14px;
  min-width: 0;
  background: none;
  box-sizing: content-box;
  font-weight: 600;
  animation-name: mui-auto-fill-cancel;
  letter-spacing: 0.01em;
  animation-duration: 10ms;
  -webkit-tap-highlight-color: transparent;
}

.course {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: var(--tg-theme-hint-color);
}
</style>
