<template>
  <Header></Header>
  <BaseSearch></BaseSearch>
  <div
    class="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 dark:bg-veryDarkBlue md:pr-16 md:pl-16 md:pt-0"
  >
    <RouterLink
      v-for="country in filteredCountries"
      :key="country.cca3"
      :to="{ name: 'CountryDetail', params: { id: country.cca3 } }"
    >
      <BaseCard
        :flagUrl="country.flags.png"
        :name="country.name.common"
        :population="country.population"
        :region="country.region"
        :capital="country.capital ? country.capital[0] : 'N/A'"
      />
    </RouterLink>
  </div>
</template>

<script setup>
import Header from "./Header.vue";
import BaseSearch from "./BaseSearch.vue";
import { ref, onMounted, computed } from "vue";
import { fetchCountries } from "../services/countryService";
import BaseCard from "./BaseCard.vue";
import { useCountrySearch } from "../composable/useCountrySearch.js";

const countries = ref([]);
const { searchQuery, selectedRegion } = useCountrySearch();

onMounted(async () => {
  countries.value = await fetchCountries();
});

const filteredCountries = computed(() => {
  return countries.value.filter(
    (country) =>
      country.name.common
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase()) &&
      (!selectedRegion.value || country.region === selectedRegion.value)
  );
});
</script>
