<template>
  <header
    class="flex justify-between p-5 gap-3 shadow-md bg-white dark:bg-darkBlue text-veryDarkBlue-lightText dark:text-white md:pr-16 md:pl-16"
  >
    <h1 class="text-xl font-bold">Where in the world?</h1>
    <button @click="toggleDarkMode" class="focus:outline-none text-lg">
      <span v-if="isDarkMode"><i class="fas fa-moon"></i> Dark Mode</span>
      <span v-else><i class="fas fa-sun"></i> Light Mode</span>
    </button>
  </header>
</template>

<script setup>
import { ref } from "vue";
import "../assets/tailwind.css";

const isDarkMode = ref(false);

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark", isDarkMode.value);
}
</script>
