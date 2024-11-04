import { ref } from "vue";

const searchQuery = ref("");
const selectedRegion = ref("");

export function useCountrySearch() {
  return {
    searchQuery,
    selectedRegion,
  };
}
