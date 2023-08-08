<script setup lang="ts">
import router from '../router'
const navigate = (): void => {
  router.push("/table")
};
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div class="w-[25%] h-[55%] bg-[#0B8D27] text-black p-6 rounded-md shadow-md ">
      <h1 class="text-2xl font-semibold mb-4">Formulario</h1>
      <div class="mb-6">
        <label for="nombre" class="block text-sm font-medium">Nombre</label>
        <input type="text" id="nombre" name="nombre" placeholder="Ingrese su nombre"
          class="mt-1 p-2 w-full border border-gray-300 rounded-md">
      </div>
      <div class="mb-6">
        <label for="monto" class="block text-sm font-medium">Monto de dinero</label>
        <input type="text" id="monto" name="monto" placeholder="Ingrese el monto"
          class="mt-1 p-2 w-full border border-gray-300 rounded-md">
      </div>
      <div class="mt-6 flex justify-center">
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          v-on:click="navigate()">Enviar</button>
      </div>
    </div>
  </div>
</template>

<style></style>