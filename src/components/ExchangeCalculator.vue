<template>
  <div>
    <p class="hint">Отдаете</p>
    <div class="input">
      <div class="image-box">
        <img :src="fromActive?.logo?.simple" alt="">
      </div>
    </div>
    <pre>
    {{ fromActive }}
    {{ toActive }}
    {{ pairData }}
    </pre>
  </div>
</template>

<script setup async>
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
.hint {
  font-size: 14px;
  color: var(--tg-theme-hint-color);
}

.input {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 51px;
  background-color: gray;
  border-radius: 10px;
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
</style>
