import { createRouter, createWebHistory } from "vue-router";
import CountryList from "./components/CountryList.vue";
import CountryDetail from "./components/CountryDetail.vue";

const routes = [
  {
    path: "/",
    name: "CountryList",
    component: CountryList,
  },
  {
    path: "/country/:id",
    name: "CountryDetail",
    component: CountryDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
