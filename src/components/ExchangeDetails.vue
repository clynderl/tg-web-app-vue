<template>
  <div>
    <div class="from">
      <div class="input-container" v-for="input in fromInputs">
        <p class="hint" v-if="input.send.header">{{ input.send.header }}</p>
        <div class="input-box" v-if="input.send.header">
          <div class="image-box">
            <img :src="fromActive?.logo?.simple" alt="">
          </div>
          <input type="number" class="input" :placeholder="input.send.placeholder">

        </div>
      </div>
    </div>
    <div class="from">
      <div class="input-container" v-for="input in toInputs">
        <p class="hint" v-if="input.receive.header">{{ input.receive.header }}</p>
        <div class="input-box" v-if="input.receive.header">
          <div class="image-box">
            <img :src="toActive?.logo?.simple" alt="">
          </div>
          <input type="number" class="input" :placeholder="input.receive.placeholder">

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
const pairDataResponse = await fetch(`https://dev7d8d3h4.sova.gg/api/v1/calculator/pair/${props.fromActive.ids[0]}/${props.toActive.ids[0]}/`);
pairData.value = await pairDataResponse.json();

const fromInputs = computed(() => {
  return pairData.value?.structure?.from?.input;
});

const toInputs = computed(() => {
  return pairData.value?.structure?.to?.input;
});

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

</style>
