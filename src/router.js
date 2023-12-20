import Vue from "vue";
import VueRouter from "vue-router";
import {auth} from "./firebase"

import shop from "./components/tourism_shop/Shop.vue";
import TourismTrips from "./components/project_tours/ToursTrips.vue";
import ToursHomePage from "./components/project_tours/homePage/HomePage.vue";
import SignUpPage from "./components/sharedComponents/signUpPage/SignUpPage.vue";
import ProfilePage from "./components/sharedComponents/profilePage/ProfilePage.vue";
import PlacesToGo from "./components/project_tours/destionations/PlacesToGo.vue";
import TravelStyles from "./components/project_tours/travelstyles/TravelStyles.vue";
import TypesOfTrips from "./components/project_tours/trips/TypesOfTrips.vue";
import AboutUs from "./components/project_tours/aboutUs/AboutUs.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/shop", component: shop },
  {
    path: "/",
    component: TourismTrips,
    children: [
      { path: "/", component: ToursHomePage, name: "homepage" },
      { path: "/destinations", component: PlacesToGo, name: "destinations" },
      { path: "/travelstyles", component: TravelStyles, name: "travelstyles" },
      { path: "/trips", component: TypesOfTrips, name: "trips" },
      { path: "/aboutUs", component: AboutUs, name: "aboutUs" },
    ],
  },
  { path: "/signup", component: SignUpPage, name: "signup" },
  { path: "/profile", component: ProfilePage, name: "profile", meta: {auth: true}, },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.auth);

  if (requiresAuth && !auth.currentUser) {
    next("/SignUp");
  } else {
    next();
  }
});

export default router;
