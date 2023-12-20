<template>
  <div class="custom-back-for-UpcomTr">
    <div class="UpTr-background">
      <img
        src="@/assets/for-tours/upcoming-tours/Maskgroup2.svg"
        
      />
    </div>
    <div style="padding-top: 100px; padding-bottom: 70px">
      <div class="position-cust-text" style="top: 11%">
        <img src="@/assets/for-tours/upcoming-tours/HeyThere.svg" />
      </div>
      <div class="position-cust-text" style="top: 12.5%">
        <span class="custom-text-forUpTr"> Upcoming Tours </span>
      </div>
      <div class="position-cust-text" style="top: 24.5%">
        <span class="custom-text-forDecription">
          Slide to see what tours are coming next.
        </span>
        <span class="custom-text-forDecription">
          And start planning your own adventure right now!
        </span>
      </div>
    </div>
    <div>
      <div class="carousel">
        <div
          class="carousel-container"
          style="padding-left: 5%; padding-right: 4%"
        >
          <b-button
            class="carousel-btn"
            style="left: 8.5%; width: 3.2%; top: 42%"
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
            <slide v-for="(trip, tours_index) in tours" :key="tours_index">
              <div class="UpTr-slide-slot">
                <div class="UpTr-slide-image">
                  <img :src="trip.imag" width="100%" style="" />
                </div>
                <div class="UpTr-area-defbtn">
                  <b-button class="UpTr-btn-inactive">{{
                    trip.country
                  }}</b-button>
                </div>
                <div class="UpTr-slide-info">
                  <div class="UpTr-text-area">
                    <span class="UpTr-header-text">
                      {{ trip.name }}
                    </span>
                    <span class="UpTr-text-desc">
                      {{ trip.desc }}
                    </span>
                  </div>

                  <div class="area-for-btn-price">
                    <b-button class="UpTr-btn-discover-more" :href="trip.href"
                      >Discover More</b-button
                    >
                    <span class="UpTr-price-content">
                      {{ trip.price }}
                    </span>
                  </div>
                </div>
              </div>
            </slide>
          </carousel>
          <b-button
            class="carousel-btn"
            style="left: 89%; width: 3.3%; top: 42%"
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
import tour1 from "@/assets/for-tours/upcoming-tours/cappadocia.png";
import tour2 from "@/assets/for-tours/upcoming-tours/kiruna.png";
import tour3 from "@/assets/for-tours/upcoming-tours/fujinomiya.png";
import tour4 from "@/assets/for-tours/upcoming-tours/transfagaras.png";
import tour5 from "@/assets/for-tours/upcoming-tours/korea.jpg";
import tour6 from "@/assets/for-tours/upcoming-tours/colorado.jpg";
import tour7 from "@/assets/for-tours/upcoming-tours/Dubai.jpg";
import tour8 from "@/assets/for-tours/upcoming-tours/malaysia.jpg";

export default {
  data() {
    return {
      tours: [
        {
          imag: tour1,
          name: "Cappadocia",
          desc: "Cappadocia is a land famous for its distinctive rock formation, historical heritage, and scenic hot air balloon trips. ",
          price: "779 $",
          href: "/",
          country: "Turkey",
        },
        {
          imag: tour2,
          name: "Kiruna",
          desc: "There are plenty of fascinating things to do in Kiruna, but seeing the Northern Lights or Aurora Borealis should be at the top.",
          price: "857 $",
          href: "/",
          country: "Sweden",
        },
        {
          imag: tour3,
          name: "Fujinomiya",
          desc: "Mount Fujy is the country's sacred symbol, and temples and shrines are located around and on the volcano.",
          price: "639 $",
          href: "/",
          country: "Japan",
        },
        {
          imag: tour4,
          name: "Transfăgărăș",
          desc: "Transfagarasan Road is considered to be the most beautiful road in Romania. Enjoy the beauty of the road.",
          price: "389 $",
          href: "/",
          country: "Romania",
        },
        {
          imag: tour5,
          name: "Busan",
          desc: "Busan is the largest port city of South Korea and features gorgeous beaches, lush green nature reserves, serene springs.",
          price: "979 $",
          href: "/",
          country: "South Korea",
        },
        {
          imag: tour6,
          name: "Colorado",
          desc: "Colorado is known for all the outdoor activities the mountains inspire like hiking, rafting, climbing, and mountain biking.",
          price: "1357 $",
          href: "/",
          country: "USA",
        },
        {
          imag: tour7,
          name: "Dubai",
          desc: "Dubai is a city that wants to be the best. The city always strives to add to its amazing list of architecture and attractions.",
          price: "965 $",
          href: "/",
          country: "UAE",
        },
        {
          imag: tour8,
          name: "Langkawi",
          desc: "Tourists flock to this tropical paradise to enjoy activities ranging from water sports to cable car rides.",
          price: "790 $",
          href: "/",
          country: "Malaysia",
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

<style>
.UpTr-background {
  background-color: rgba(220, 235, 215, 1);
  display: flex;
  position: absolute;
  width: 100%;
  z-index: -1;
  height: 1210px;
}
.custom-back-for-UpcomTr {
  width: 100%;
  height: 1210px;
}
.position-cust-text {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.custom-text-forUpTr {
  font-family: "GT Walsheim Pro Medium";
  font-size: 72px;
  font-weight: 500px;
  color: rgba(31, 59, 34, 1);
}
.custom-text-forDecription {
  font-family: "GT Walsheim Pro Regular";
  font-size: 20px;
  font-weight: 300;
  color: rgba(31, 59, 34, 1);
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
.UpTr-slide-slot {
  padding-left: 9%;
  padding-right: 7%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.UpTr-slide-image {
  width: 100%;
  align-self: center;
}
.UpTr-slide-info {
  display: flex;
  margin-top: 26.5%;
  color: rgba(31, 59, 34, 1);
  flex-direction: column;
  position: absolute;
  margin-left: 2%;
  width: 56%;
}
.UpTr-text-area {
  width: 30%;
  height: 135px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  font-family: "GT Walsheim Pro Regular";
  color: white;
  margin-left: 0.5%;
}
.UpTr-header-text {
  font-size: 36px;
}
.UpTr-text-desc {
  font-size: 14px;
  line-height: 117%;
  text-align: start;
  margin-top: 4%;
}
.UpTr-price-content {
  color: white;
  font-family: "GT Walsheim Pro Black";
  font-size: 24px;
}
.area-for-btn-price {
  width: 30%;
  justify-content: space-between;
  display: flex;
  margin-top: 3.3%;
}
.UpTr-area-defbtn {
  display: flex;
  position: absolute;
  margin-top: 1%;
  margin-left: 1.3%;
  width: 100%;
}
.UpTr-btn-inactive {
  font-family: "GT Walsheim Pro Medium";
  font-size: 16px;
  color: rgb(255, 255, 255);
  border-radius: 20px;
  background: rgba(32, 27, 27, 0.16);
  border-color: #00000000;
}
.UpTr-btn-inactive:hover{
  font-family: "GT Walsheim Pro Medium";
  font-size: 16px;
  color: rgb(255, 255, 255);
  border-radius: 20px;
  background: rgba(227, 226, 226, 0.623);
  border-color: #00000000;
}
.UpTr-btn-inactive:not(:disabled):not(.disabled):active,
.show > .UpTr-btn-inactive.toggle {
  background: rgba(227, 226, 226, 0.623);
  border-color: #00000000;
  color: rgb(255, 255, 255);
}
.UpTr-btn-discover-more {
  justify-self: end;
  font-family: "GT Walsheim Pro Medium";
  font-size: 14px;
  border-radius: 20px;
  border: 1.7px solid rgb(255, 255, 255);
  background: #ffffff00;
  color: rgb(255, 255, 255);
}
.UpTr-btn-discover-more:hover {
  border-radius: 20px;
  border: 1.7px solid rgba(97, 180, 125, 0);
  background: rgba(206, 206, 206, 0.623);
  color: #000000;
}
.UpTr-btn-discover-more:not(:disabled):not(.disabled):active,
.show > .UpTr-btn-discover-more.toggle {
  background-color: #ffffff;
  border-color: #63acff00;
  color: rgb(0, 0, 0);
}
</style>
