<template>
  <Header></Header>
  <div class="dark:bg-veryDarkBlue h-screen md:pl-16 md:pr-16">
    <!-- دکمه‌ی بازگشت به صفحه لیست کشورها -->
    <button
      @click="goBack"
      class="flex-row flex gap-2 relative top-10 mb-10 px-8 py-2 bg-lightGray text-darkBlue dark:bg-darkBlue dark:text-white rounded shadow"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        />
      </svg>
      Back
    </button>

    <div
      v-if="country && country.name"
      class="flex pt-10 md:flex-row dark:bg-veryDarkBlue"
    >
      <div class="md:flex md:gap-20">
        <img
          width="300px"
          height="300px"
          class="mb-10 md:mb-0"
          :src="country.flags.png"
          alt="Country flag"
        />

        <div class="w-full md:w-full px-4 md:flex-row md:flex md:gap-10">
          <div class="w-80">
            <h1 class="text-lg font-bold mb-5 dark:text-veryLightGray">
              {{ country.name.common }}
            </h1>
            <p class="dark:text-veryLightGray">
              <strong>Native Name:</strong> {{ nativeName }}
            </p>
            <p class="dark:text-veryLightGray">
              <strong>Population:</strong>
              {{ country.population.toLocaleString() }}
            </p>
            <p class="dark:text-veryLightGray">
              <strong>Region:</strong> {{ country.region }}
            </p>
            <p class="dark:text-veryLightGray">
              <strong>Sub Region:</strong> {{ country.subregion || "N/A" }}
            </p>
            <p class="dark:text-veryLightGray">
              <strong>Capital:</strong>
              {{ country.capital ? country.capital[0] : "N/A" }}
            </p>
          </div>

          <div class="w-full">
            <p class="dark:text-veryLightGray">
              <strong>Top Level Domain:</strong>
              {{ country.tld ? country.tld.join(", ") : "N/A" }}
            </p>
            <p class="dark:text-veryLightGray">
              <strong>Currencies:</strong> {{ currenciesList }}
            </p>
            <p class="dark:text-veryLightGray">
              <strong>Languages:</strong> {{ languagesList }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
    <div class="flex flex-col w-full px-4 dark:bg-veryDarkBlue">
      <h1 class="text-lg font-bold mt-10 dark:text-veryLightGray">
        <strong>Border Countries:</strong>
      </h1>
      <div class="flex gap-2 mt-4 flex-row dark:text-veryLightGray">
        <span
          v-for="border in borderCountries"
          :key="border"
          class="px-2 shadow-md border-2 cursor-pointer hover:bg-veryLightGray py-2 bg-lightGray dark:bg-darkBlue dark:rounded-md dark:border-none text-xs dark:text-white rounded"
        >
          {{ border }}
        </span>
        <p v-if="!borderCountries || borderCountries.length === 0">N/A</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "./Header.vue";
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router"; // اضافه کردن useRouter
import { fetchCountryById } from "../services/countryService";
import axios from "axios";

const route = useRoute();
const router = useRouter(); // تعریف router
const country = ref(null);
const borderCountries = ref([]);

onMounted(async () => {
  try {
    country.value = await fetchCountryById(route.params.id);

    if (country.value?.borders && country.value.borders.length) {
      const requests = country.value.borders.map((code) =>
        axios.get(`https://restcountries.com/v3.1/alpha/${code}`)
      );
      const responses = await Promise.all(requests);
      console.log("Border countries data:", responses);

      borderCountries.value = responses.map((response) => {
        return response.data && response.data[0] && response.data[0].name
          ? response.data[0].name.common
          : "N/A";
      });
    }
  } catch (error) {
    console.error("Failed to fetch country details:", error);
  }
});

// استخراج نام بومی اولین زبان
const nativeName = computed(() => {
  if (country.value?.name?.nativeName) {
    const nativeNames = Object.values(country.value.name.nativeName);
    return nativeNames.length ? nativeNames[0].common : "N/A";
  }
  return "N/A";
});

// استخراج لیست زبان‌ها و ارزها
const currenciesList = computed(() => {
  return country.value?.currencies
    ? Object.values(country.value.currencies)
        .map((c) => c.name)
        .join(", ")
    : "N/A";
});

const languagesList = computed(() => {
  return country.value?.languages
    ? Object.values(country.value.languages).join(", ")
    : "N/A";
});

// تابع برای برگشت به صفحه لیست کشورها
const goBack = () => {
  router.push("/"); // آدرس صفحه لیست کشورها
};
</script>

<style scoped>
.flex {
  display: flex;
}
.flex-col {
  flex-direction: column;
}
.btn-prev {
  border: 1px solid rgb(0 0 0 / 0.1);
  box-shadow: rgba(43, 43, 45, 0.588) 0px 2px 10px 0px;
}
strong {
  color: "hsl(0, 0%, 98%)";
}
</style>
