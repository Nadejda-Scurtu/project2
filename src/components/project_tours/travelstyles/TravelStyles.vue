<template>
  <div class="trvl-styles-back-area">
    <div class="styles-area-forGroup">
      <img src="@/assets/for-tours/destinations/background.png" />
    </div>
    <div class="area-for-headtext">
      <img
        class="area-custom-image"
        src="@/assets/for-tours/travelStyles/head-text.png"
      />
    </div>
    <div style="top: 21%; position: relative">
      <div class="carousel">
        <div
          class="carousel-container"
          style="padding-left: 5%; padding-right: 4%"
        >
          <b-button
            class="carousel-btn"
            style="left: 8.5%; width: 3.2%; top: 44%"
            @click="prevSlide()"
          >
            <img src="@/assets/arrow-left.png" />
          </b-button>
          <carousel
            style="width: 100%"
            :perPage="4"
            ref="carousel"
            :paginationEnabled="false"
          >
            <slide v-for="(trlstyle, tours_index) in tours" :key="tours_index">
              <div class="Trv-slide-slot">
                <div class="Trv-slide-image">
                  <img :src="trlstyle.imag" width="100%" style="" />
                </div>

                <div class="Trv-slide-info">
                  <div class="Trv-text-area">
                    <span class="Trv-header-text">
                      {{ trlstyle.name }}
                    </span>
                  </div>

                  <div class="area-for-btn">
                    <b-button
                      class="Trv-btn-discover-more"
                      :href="trlstyle.href"
                      >Discover More</b-button
                    >
                  </div>
                </div>
              </div>
            </slide>
          </carousel>
          <b-button
            class="carousel-btn"
            style="left: 89%; width: 3.3%; top: 44%"
            @click="nextSlide()"
          >
            <img src="@/assets/arrow-right.png" />
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tour1 from "@/assets/for-tours/travelStyles/Sightseeing.png";
import tour2 from "@/assets/for-tours/travelStyles/Ski.png";
import tour3 from "@/assets/for-tours/travelStyles/Ocean.png";
import tour4 from "@/assets/for-tours/travelStyles/Desert.png";
import tour5 from "@/assets/for-tours/travelStyles/hiking.jpg";
import tour6 from "@/assets/for-tours/travelStyles/outdoor.jpg";
import tour7 from "@/assets/for-tours/travelStyles/family.jpg";
import tour8 from "@/assets/for-tours/travelStyles/honey.jpg";

export default {
  data() {
    return {
      tours: [
        {
          imag: tour1,
          name: "Sightseeing Tours",
          href: "/",
        },
        {
          imag: tour2,
          name: "Ski Trips",
          href: "/",
        },
        {
          imag: tour3,
          name: "Ocean Trips",
          href: "/",
        },
        {
          imag: tour4,
          name: "Desert Trips",
          href: "/",
        },
        {
          imag: tour5,
          name: "Hiking Trips",
          href: "/",
        },
        {
          imag: tour6,
          name: "Outdoor Activities",
          href: "/",
        },
        {
          imag: tour7,
          name: "Family Trips",
          href: "/",
        },
        {
          imag: tour8,
          name: "Honey Moons",
          href: "/",
        },
      ],
    };
  },
  methods: {
    nextSlide() {
      this.$refs.carousel.advancePage("forward");
    },
    prevSlide() {
      this.$refs.carousel.advancePage("backward");
    },
  },
};
</script>

<style scoped>
.trvl-styles-back-area {
  color: white;
  height: 1000px;
  position: relative;
}
.styles-area-forGroup {
  display: flex;
  position: absolute;
  z-index: -1;
}
.area-custom-image {
  width: 23%;
}
.area-for-headtext {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  top: 5%;
}
.carousel {
  width: 100%;
  display: flex;
  justify-content: center;
  top: 7%;
}
.carousel-btn {
  background-color: #ffffffa3;
  border-color: #00000000;
  border-radius: 100px;
  position: absolute;
  top: 30%;
  z-index: 999;
  display: flex;
  place-content: center;
}
.carousel-btn:hover {
  background-color: #ffffff;
  border-color: #00000000;
}
.carousel-btn:not(:disabled):not(.disabled):active,
.show > .carousel-btn.toggle {
  background-color: #adadad87;
  border-color: #00000000;
}
.carousel-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.VueCarousel-slide {
  flex-basis: unset !important;
  width: 25%;
}
.Trv-slide-slot {
  margin-left: 9%;
  margin-right: 7%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 11px 27px #9a9090;
}
.Trv-slide-image {
  width: 100%;
  align-self: center;
}
.Trv-slide-info {
  display: flex;
  margin-top: 15%;
  flex-direction: column;
  position: absolute;
  width: 21%;
  align-items: center;
}
.Trv-text-area {
  display: flex;
  flex-direction: column;
  font-family: "GT Walsheim Pro Medium";
  color: white;
  width: 50%;
  align-items: center;
}

.Trv-header-text {
  font-size: 48px;
  line-height: 118%;
}

.Trv-btn-discover-more {
  justify-self: end;
  font-family: "GT Walsheim Pro Medium";
  font-size: 14px;
  border-radius: 20px;
  border: 1.7px solid rgb(255, 255, 255);
  background: #ffffff00;
  color: rgb(255, 255, 255);
}
.Trv-btn-discover-more:hover {
  border-radius: 20px;
  border: 1.7px solid rgba(97, 180, 125, 0);
  background: rgba(206, 206, 206, 0.623);
  color: #000000;
}
.Trv-btn-discover-more:not(:disabled):not(.disabled):active,
.show > .Trv-btn-discover-more.toggle {
  background-color: #ffffff;
  border-color: #63acff00;
  color: rgb(0, 0, 0);
}
.area-for-btn {
  width: 41%;
  top: 10%;
  justify-content: space-between;
  display: flex;
  margin-top: 69%;
}
</style>

<style>
.VueCarousel-wrapper {
  height: 630px
}
</style>
