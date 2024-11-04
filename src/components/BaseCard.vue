<template>
  <div
    class="rounded overflow-hidden shadow-lg bg-white max-w-lg dark:bg-darkBlue dark:text-veryLightGray"
  >
    <img class="h-52 w-full" :src="flagUrl" alt="Country Flag" />
    <div class="p-4 mb-4">
      <h2 class="font-bold text-xl mb-3">{{ name }}</h2>
      <p class="text-base mb-2 dark:text-veryLightGray">
        <strong>Population:</strong> {{ population }}
      </p>
      <p class="text-base mb-2 dark:text-veryLightGray">
        <strong>Region:</strong> {{ region }}
      </p>
      <p class="text-base dark:text-veryLightGray">
        <strong>Capital:</strong> {{ capital }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  flagUrl: String,
  name: String,
  population: Number,
  region: String,
  capital: String,
});
</script>

<style scoped></style>
