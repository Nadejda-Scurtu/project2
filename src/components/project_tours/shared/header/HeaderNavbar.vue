<template>
  <div>
    <b-navbar class="wider-navbar" :class="navbarColor">
      <b-navbar-nav class="d-flex" justify-content-between style="width: 100%">
        <b-row style="width: 100%">
          <b-col cols="3 d-flex">
            <b-nav-item
              class="b-nav-item-dropdown"
              style="margin-left: 10%"
              href="/"
            >
              <div>
                <img src="@/assets/logo-1.png" alt="Логотип" width="200" />
              </div>
            </b-nav-item>
          </b-col>
          <b-col cols="7 d-flex justify-content-center">
            <b-nav-item-dropdown
              text="Destinations"
              right
              class="b-nav-item-dropdown"
            >
              <b-dropdown-item href="/destinations">See all</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item
                v-for="destination in destinations"
                :key="destination.text"
                :href="destination.href"
              >
                {{ destination.text }}
              </b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown
              text="Travel styles"
              right
              class="b-nav-item-dropdown"
            >
              <b-dropdown-item href="/travelstyles">See all</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item
                v-for="tstyle in styles"
                :key="tstyle.text"
                :href="tstyle.href"
              >
                {{ tstyle.text }}
              </b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item
              href="/trips"
              class="b-nav-item-custom d-flex justify-content-center text-nowrap"
            >
              <div class="b-nav-item-custom">Trips</div>
            </b-nav-item>
            <b-nav-item
              class="b-nav-item-custom d-flex justify-content-center text-nowrap"
              href="/aboutUs"
              ><div class="b-nav-item-custom">About us</div></b-nav-item
            ></b-col
          >

          <b-col class="d-flex justify-content-center" cols="1">
            <div class="area-for-GoShop">
              <b-nav-item href="#" class="b-nav-item-custom text-nowrap"
                ><b-button class="custom-button d-flex text-center"
                  ><div>
                    <b-icon-handbag></b-icon-handbag> Go shopping
                  </div></b-button
                ></b-nav-item
              >
            </div>
          </b-col>
          <b-col class="d-flex justify-content-center" cols="1">
            <b-nav-item class="b-nav-item-custom text-nowrap d-flex" href="#">
              <div @click="ShowLogin()" class="b-nav-item-custom">
                <b-icon-box-arrow-in-right
                  icon="box-arrow-in-right"
                  class="align-self-center"
                  style="margin-right: 8px"
                ></b-icon-box-arrow-in-right>
                Log in
              </div></b-nav-item
            >
            <log-in-modal
              @hide-log="isLogInVisible = false"
              :isVisible="isLogInVisible"
            ></log-in-modal>
          </b-col>
        </b-row>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import { BIconBoxArrowInRight, BIconHandbag } from "bootstrap-vue";
import LogInModal from "@/components/sharedComponents/logInModal/LogInModal.vue";

export default {
  components: {
    "log-in-modal": LogInModal,
    BIconHandbag,
    BIconBoxArrowInRight,
  },
  data() {
    return {
      isLogInVisible: false,
      loggedIn: false,
      isAdmin: false,
      destinations: [
        { text: "Africa", href: "/" },
        { text: "Asia", href: "/" },
        { text: "Australia", href: "/" },
        { text: "Europe", href: "/" },
        { text: "North America", href: "/" },
        { text: "South America", href: "/" },
      ],
      styles: [
        { text: "Sightseeing tours", href: "/" },
        { text: "Outdoor activities", href: "/" },
        { text: "Ocean trips", href: "/" },
        { text: "Desert trips", href: "/" },
        { text: "Hiking", href: "/" },
        { text: "Ski", href: "/" },
        { text: "Honeymoons", href: "/" },
        { text: "Family trips", href: "/" },

      ],
    };
  },
  methods: {
    ShowLogin() {
      this.isLogInVisible = true;
    },
  },
  computed: {
    navbarColor() {
      const currentPage = window.location.pathname;
      if (currentPage === "/") {
        return "";
      }
      return "coloredNavbar";
    },
  },
};
</script>

<style>
.wider-navbar {
  width: 100%;
  height: 80px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
}
.coloredNavbar {
  background-color: #283a2c;
  position: relative;
}
.b-nav-item-dropdown {
  margin-right: 4%;
  font-family: "GT Walsheim Pro Regular";
  font-weight: 500;
  font-size: 17px;
  display: flex;
  align-self: center;
  color: white;
}
.b-nav-item-dropdown .dropdown-menu {
  position: absolute;
  font-family: "GT Walsheim Pro Regular";
  font-weight: 500;
  font-size: 17px;
  z-index: 2;
  top: 100%;
  background-color: rgba(255, 255, 255, 0.93);
  color: rgba(101, 101, 101, 1);
  border-color: rgba(255, 255, 255, 0);
}
.b-nav-item-dropdown .dropdown-menu a:hover {
  background-color: rgba(177, 184, 134, 1);
  color: rgba(101, 101, 101, 1);
}
.b-nav-item-custom {
  font-size: 17px;
  font-family: "GT Walsheim Pro Regular";
  font-weight: 500;
  display: flex;
  align-self: center;
  color: white;
  margin-right: 6%;
}

.b-nav-item-custom:hover {
  color: #b1b886;
}
.b-nav-item-custom:not(:disabled):not(.disabled):active,
.show > .b-nav-custom-text.dropdown-toggle {
  color: rgb(0, 0, 0);
}
.b-nav-item-dropdown .dropdown-toggle {
  color: rgb(252, 252, 249);
}
.b-nav-item-dropdown:hover .dropdown-toggle {
  color: #b1b886;
}
.dropdown-item {
  color: rgba(101, 101, 101, 1);
}
.custom-button {
  font-family: "GT Walsheim Pro Regular";
  font-weight: 500;
  border-radius: 1.5rem;
  background-color: rgba(255, 255, 255, 0);
  width: 110%;
  place-content: center;
  border-color: white;
  color: white;
}

.custom-button:hover {
  background-color: rgb(177, 184, 134);
  border-color: white;
  color: white;
}

.custom-button:not(:disabled):not(.disabled):active,
.show > .custom-button.dropdown-toggle {
  background-color: rgb(22, 30, 23);
  border-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}
.area-for-GoShop {
  width: 160%;
  display: flex;
  justify-content: flex-end;
  margin-right: 20%;
}
</style>
