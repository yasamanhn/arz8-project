<template>
  <div
    class="flex flex-col p-5 dark:bg-veryDarkBlue md:flex-row md:justify-between md:pr-16 md:pl-16 md:m-0"
  >
    <div
      class="search-container mt-3 mb-7 flex items-center gap-3 p-3 bg-white dark:bg-darkBlue md:w-80 md:mt-7"
    >
      <svg
        v-if="isDarkMode"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="rgb(0 0 0 / 5)"
        class="size-6 ml-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>

      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="rgb(0 0 0 / 0.4)"
        class="size-6 ml-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>

      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search for a country..."
        class="search-input w-full dark:bg-darkBlue"
      />
    </div>

    <!-- filter -->
    <div
      class="filter-container flex mt-6 mb-6 items-start justify-start w-52 bg-white dark:bg-darkBlue md:mt-7 md:p-0"
    >
      <select
        v-model="selectedRegion"
        name=""
        id="selected"
        class="flex w-full p-4 rounded-lg bg-white text-darkBlue dark:bg-darkBlue dark:text-veryLightGray dark:rounded-md dark:border-darkBlue md:p-4"
      >
        <option value="" disabled selected class="text-darkBlue">
          Filter by Region
        </option>
        <option value="Africa" class="text-darkBlue">Africa</option>
        <option value="America" class="text-darkBlue">America</option>
        <option value="Asia" class="text-darkBlue">Asia</option>
        <option value="Europe" class="text-darkBlue">Europe</option>
        <option value="Oceania" class="text-darkBlue">Oceania</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCountrySearch } from "../composable/useCountrySearch.js";

const { searchQuery, selectedRegion } = useCountrySearch();
const isDarkMode = ref(false);
</script>

<style scoped>
.search-container {
  border: 1px solid rgb(0 0 0 / 0.1);
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.141) 0px 2px 10px 0px;
}
.filter-container {
  border-radius: 5px;
  border: 1px solid rgb(0 0 0 / 0.1);
  box-shadow: rgba(100, 100, 111, 0.141) 0px 2px 10px 0px;
}
.search-input {
  font-size: 16px;
}
.search-input:focus {
  outline: none;
  border-color: gray;
  color: hsl(0, 0%, 52%);
}
</style>
