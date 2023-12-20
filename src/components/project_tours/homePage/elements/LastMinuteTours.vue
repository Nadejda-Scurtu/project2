<template>
  <div style="height: 720px">
    <div style="display: flex; justify-content: center; margin-top: 10%">
      <img src="@/assets/for-tours/last-minute-tours/lastMinute.svg" />
    </div>

    <div class="carousel">
      <div class="carousel-container">
        <b-button
          class="carousel-btn"
          style="left: 3%; width: 3.2%;     top: 20%;" 
          @click="prevSlide()"
        >
          <img src="@/assets/arrow-left.png" />
        </b-button>
        <carousel
          style="width: 100%; "
          :perPage="4"
          ref="carousel"
          :paginationEnabled="false"
        >
          <slide v-for="(tour, tour_index) in tours" :key="tour_index">
            <div class="tour-slot">
              <div class="tour-image">
                <img
                  :src="tour.imag"
                  width="100%"
                  style="border-radius: 16px"
                />
              </div>
              <div class="tour-info">
                <div class="description">
                  <div class="tour-name-field">
                    <span class="tour-name-content">{{ tour.name }}</span>
                  </div>
                  <div class="tour-description">
                    <span class="tour-desc-content">{{ tour.desc }}</span>
                  </div>
                </div>
                <div class="interract-area">
                  <div class="tour-price-field">
                    <span class="tour-price-content">{{ tour.price }}</span>
                    <span class="tour-for-person">{{ tour.person }}</span>
                  </div>
                  <div class="discover-more-area" style="display: flex">
                    <b-button
                      class="discover-more-btn" :href="tour.href"
                      >Discover more</b-button
                    >
                  </div>
                </div>
              </div>
            </div>
          </slide>
        </carousel>
        <b-button
          class="carousel-btn"
          style="left: 94.5%; width: 3.3%; top:20%"
          @click="nextSlide()"
        >
          <img src="@/assets/arrow-right.png" />
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import tour1 from "@/assets/for-tours/last-minute-tours/germany.jpg";
import tour2 from "@/assets/for-tours/last-minute-tours/italy.jpg";
import tour3 from "@/assets/for-tours/last-minute-tours/switzerland.jpg";
import tour4 from "@/assets/for-tours/last-minute-tours/norway.jpg";
import tour5 from "@/assets/for-tours/last-minute-tours/greece.jpg";
import tour6 from "@/assets/for-tours/last-minute-tours/austria.jpg";
import tour7 from "@/assets/for-tours/last-minute-tours/egypt.jpg";
import tour8 from "@/assets/for-tours/last-minute-tours/grape1.jpg";



export default {
  data() {
    return {
      tours: [
      {
          imag: tour1,
          name: "Germany",
          desc: "Sightseeing Tour",
          price: "$169",
          person: "/Person",
          href: "/"
        },
        {
          imag: tour2,
          name: "Italy",
          desc: "Sightseeing Tour",
          price: "$156",
          person: "/Person",
          href: "/"
        },
        {
          imag: tour3,
          name: "Switzerland",
          desc: "Sightseeing Tour",
          price: "$329",
          person: "/Person",
          href: "/"
        },
        {
          imag: tour4,
          name: "Norway",
          desc: "Sightseeing Tour",
          price: "$472",
          person: "/Person",
          href: "/"
        },
        {
          imag: tour5,
          name: "Greece",
          desc: "Sightseeing Tour",
          price: "$255",
          person: "/Person",
          href: "/"
        },
        {
          imag: tour6,
          name: "Austria",
          desc: "Sightseeing Tour",
          price: "$260",
          person: "/Person",
        },
        {
          imag: tour7,
          name: "Egypt",
          desc: "Sightseeing Tour",
          price: "$456",
          person: "/Person",
          href: "/"
        },
        {
          imag: tour8,
          name: "Moldova",
          desc: "Sightseeing Tour",
          price: "$70",
          person: "/Person",
          href: "/"
        }
  
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

<style >
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
  width: 27%;
}
.tour-slot {
  padding-left: 9%;
  padding-right: 7%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.tour-image {
  width: 100%;
  align-self: center;
}
.tour-info {
  display: flex;
  margin-top: 7%;
  color: rgba(31, 59, 34, 1);
  flex-direction: column;
}
.description {
  width: 65%;
  height: 100%;
  padding-left: 3.5%;
}
.tour-name-field {
  font-family: "GT Walsheim Pro Black";
  width: 100%;
  display: flex;
}
.tour-name-content {
  color: rgba(31, 59, 34, 1);
  font-size: 24px;
}
.tour-description {
  display: flex;
}
.tour-price-field {
  font-family: "GT Walsheim Pro Black";
  display: flex;
}
.tour-price-content {
  color: rgba(97, 180, 124, 1);
  font-size: 24px;
}
.tour-for-person {
  font-family: "GT Walsheim Pro Regular";
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-left: 9%;
}
.tour-desc-content {
  font-family: "GT Walsheim Pro Regular";
  width: 100%;
  display: flex;
  margin-top: 3%;
}
.interract-area {
  margin-top: 7%;
  padding-left: 3.5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.discover-more-btn {
  justify-self: end;
  font-family: "GT Walsheim Pro Regular";
  border-radius: 20px;
  border: 1px solid var(--dark-blue, rgba(97, 180, 124, 1));
  background: #fff;
  color: rgba(97, 180, 124, 1);
}
.discover-more-btn:hover {
  border-radius: 20px;
  border: 1px solid var(--dark-blue, rgba(97, 180, 124, 1));
  background: rgba(97, 180, 124, 1);
  color: #ffffff;
}
.discover-more-btn:not(:disabled):not(.disabled):active,
.show > .discover-more-btn.dropdown-toggle {
  background-color: #3a5b31;
  border-color: #63acff00;
  color: rgb(255, 255, 255);
}
.invisible-btn {
  background-color: #ffffff00;
  color: rgba(97, 180, 124, 0);
  border-color: #ffffff00;
}
.invisible-btn:hover {
  background-color: #ffffff00;
  color: rgba(97, 180, 124, 0);
  border-color: #ffffff00;
}
.invisible-btn:not(:disabled):not(.disabled):active,
.show > .invisible-btn.dropdown-toggle {
  background-color: #ffffff00;
  color: rgba(97, 180, 124, 0);
  border-color: #ffffff00;
}
</style>
