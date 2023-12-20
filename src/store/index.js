import Vue from "vue";
import Vuex from "vuex";
import * as fb from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import router from "@/router";
Vue.use(Vuex);

const state = {
  userProfile: {},
  isAuthentificated: false,
};

const mutations = {
  setUserProfile(state, val) {
    state.isAuthentificated = !state.isAuthentificated;
    state.userProfile = val;
  },
};

const actions = {
  async register({ dispatch }, form) {
    try {
      const { user } = await fb.auth.createUserWithEmailAndPassword(
        fb.auth,
        form.email,
        form.password
      );
      const userDocRef = doc(fb.userCollection, user.uid);
      const formData = {
        name: form.name,
      };
      await setDoc(userDocRef, formData);
      dispatch("fetchUserProfile", userDocRef);
      return true;
    } catch (e) {
      return false;
    }
  },
  async login({ dispatch }, form) {
    try {
      const { user } = await fb.auth.signInWithEmailAndPassword(
        fb.auth,
        form.email,
        form.password
      );
      const userDocRef = doc(fb.userCollection, user.uid);
      dispatch("fetchUserProfile", userDocRef);
      return true;
    } catch (e) {
      return false;
    }
  },
  async logout({ commit }) {
    await fb.auth.signOut();
    commit("setUserProfile", {});
    router.push("/shop");
  },
  async fetchUserProfile({ commit }, user) {
    const userProfile = await getDoc(user);
    commit("setUserProfile", userProfile.data());
    router.push("/Profile");
  },
  async loginWithGoogle({ dispatch }) {
    try {
      const { user } = await fb.auth.signInWithPopup(fb.auth, fb.provider);
      const userDocRef = doc(fb.userCollection, user.uid);
      const formData = {
        name: user.displayName,
      };
      await setDoc(userDocRef, formData);
      dispatch("fetchUserProfile", userDocRef);
      console.log("User signed in successfully");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  },
};

const getters = {
  // Your getters here
};

const modules = {
  // Your modules here
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules,
});

export default store;
