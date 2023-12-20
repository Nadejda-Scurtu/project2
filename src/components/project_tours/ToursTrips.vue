<template>
  <div>
    <header-navbar />
    <router-view></router-view>
    <footer-tours />
  </div>
</template>

<script>
import HeaderNavbar from "./shared/header/HeaderNavbar.vue";
import FooterTours from "./shared/footer/FooterTours.vue";

export default {
  components: {
    HeaderNavbar,
    FooterTours,
  },
};
</script>

<style>
@font-face {
  font-family: "GT Walsheim Pro Regular";
  src: url("@/fonts/GTWalsheimPro-Regular.woff") format("woff");
  font-style: normal;
}
@font-face {
  font-family: "GT Walsheim Pro Medium";
  src: url("@/fonts/GTWalsheimPro-Medium.woff") format("woff");
  font-style: normal;
}
@font-face {
  font-family: "GT Walsheim Pro Light";
  src: url("@/fonts/GTWalsheimPro-Light.woff") format("woff");
  font-style: normal;
}
@font-face {
  font-family: "GT Walsheim Pro Black";
  src: url("@/fonts/GTWalsheimPro-Black.woff") format("woff");
  font-style: normal;
}
@font-face {
  font-family: "GT Walsheim Pro Medium Oblique";
  src: url("@/fonts/GTWalsheimPro-MediumOblique.woff") format("woff");
  font-style: normal;
}
@font-face {
  font-family: "GT Walsheim Pro Regular Oblique";
  src: url("@/fonts/GTWalsheimPro-RegularOblique.woff") format("woff");
  font-style: normal;
}
</style>
