import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Cart from "@/views/Cart.vue";
import WheelsDetails from "@/views/WheelsDetails.vue";
import Account from "@/views/Account.vue";
import AccountExisting from "@/views/AccountExisting.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/",
    name: "WheelsDetails",
    component: WheelsDetails,
  },
  {
    path: "/",
    name: "Account",
    component: Account,
  },
  {
    path: "/",
    name: "AccountExisting",
    component: AccountExisting,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
