<template>
  <div class="direction" :class="active ? 'active' : ''">
    <div class="img-container">
      <img :src="img" alt="" class="img">
    </div>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script setup>
defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.direction {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid transparent;
  /*box-shadow: 3px 4px 5px 0px rgba(0, 0, 0, 0.45);*/
  padding: 15px;
  width: 170px;
  cursor: pointer;
  border-radius: 20px;
  transition: border-color .2s ease;
}

.direction.active {
  background: var(--tg-theme-bg-color);
  border-color: var(--tg-theme-button-color);
}

.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: var(--tg-theme-bg-color);
}

.img {
  width: 64px;
  height: 64px;
  margin: 0 auto;
  object-fit: contain;
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
