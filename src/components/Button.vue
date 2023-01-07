<template>
  <button class="button" >
    <slot />
  </button>
</template>

<script setup>

</script>

<style scoped>
.button {
  padding: 10px 15px;
  background: var(--tg-theme-button-color);
  color: var(--tg-theme-button-text-color);
  border: none;
  outline: none;
  cursor: pointer;
}
</style>
