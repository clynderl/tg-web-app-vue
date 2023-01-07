<template>
  <div class="direction">
    <img src="https://swapcoin.cc/psicons/color/bitcoin.svg" alt="" class="img">
    <div class="title">Bitcoin</div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.direction {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  width: 170px;
}

.direction.active {
  border: 1px solid blue;
}

.img {
  width: 100%;
  height: 100px;
  margin: 0 auto;
}

.title {
  font-size: .9em;
}

.add-btn {
  width: 100%;
}
</style>
