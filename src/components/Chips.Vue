<script setup lang="ts">

  defineProps<{ number: String }>()
  
</script>

<template>
  <div class="custom-chip">
    <div class="chip-number">{{ number }}</div>
  </div>
</template>

<style>
.custom-chip {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #006b44;
  color: black;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.chip-number {
  width: 90%;
  height: 90%;
  border-radius: 100%;
  background-color: black;
  font-size: 1.5rem;
  color: rgb(255, 255, 255);
  display: inline-block;
  justify-content:center;
  text-align: center;
  line-height: 1;
  font-size: 35px
}
</style>