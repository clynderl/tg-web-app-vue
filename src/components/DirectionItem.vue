<template>
  <div class="direction" :class="active ? 'active' : ''">
    <img src="/bitcoin.svg" alt="" class="img" >
    <div class="title">Bitcoin</div>
  </div>
</template>

<script setup>
defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.direction {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid transparent;
  padding: 15px;
  width: 170px;
  cursor: pointer;
}

.direction.active {
  border-color: var(--tg-theme-button-color);
}

.img {
  width: 100%;
  height: 100px;
  margin: 0 auto;
}

.title {
  margin-top: 10px;
  font-size: .9em;
  color: var(--tg-theme-text-color);
  cursor: pointer;
}

.add-btn {
  width: 100%;
}
</style>
