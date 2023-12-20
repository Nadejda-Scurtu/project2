<template>
  <div class="area-for-reviews">
    <div class="custom-back-for-reviews">
      <img src="@/assets/for-tours/reviews/Back-Lines.png" />
    </div>
    <div class="area-reviews-header">
      <span class="reviews-cust-text"> Reviews From Our Travellers </span>
    </div>
    <div class="carousel" style="top: -5%">
      <div
        class="carousel-container"
        style="padding-left: 5%; padding-right: 4%"
      >
        <b-button
          class="carousel-btn"
          style="left: 4.5%; width: 3.2%; top: 62%"
          @click="prevSlide()"
        >
          <img src="@/assets/arrow-left.png" />
        </b-button>
        <carousel
          style="width: 100%; top: 15%"
          :perPage="4"
          ref="carousel"
          paginationActiveColor="rgb(38 128 62)"
          paginationColor="#8D8D8D"
        >
          <slide v-for="(rev, revs_index) in revs" :key="revs_index">
            <div class="Rew-slide-slot">
              <div class="Rew-custom-avatar">
                <img :src="rev.avatar" width="50%" />
              </div>
              <div class="Rew-slide-image">
                <img :src="rev.imag" width="100%" height="400px" />
              </div>

              <div class="Rew-slide-info">
                <div class="Rew-text-area">
                  <span class="Rew-header-text">
                    {{ rev.name }}
                  </span>
                  <div class="area-for-rating">
                    <b-form-rating
                      class="custom-rating"
                      id="rating-inline"
                      inline
                      readonly
                      value="5"
                    ></b-form-rating>
                  </div>
                  <span class="Rew-text-desc"> "{{ rev.desc }}" </span>
                </div>
              </div>
            </div>
          </slide>
        </carousel>
        <b-button
          class="carousel-btn"
          style="left: 93.5%; width: 3.3%; top: 62%"
          @click="nextSlide()"
        >
          <img src="@/assets/arrow-right.png" />
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import cardreview from "@/assets/for-tours/reviews/card.png";

import ava1 from "@/assets/for-tours/reviews/Elena.png";
import ava2 from "@/assets/for-tours/reviews/Anton.png";
import ava3 from "@/assets/for-tours/reviews/alice.png";
import ava4 from "@/assets/for-tours/reviews/vlad.png";
import ava5 from "@/assets/for-tours/reviews/woman1.png";
import ava6 from "@/assets/for-tours/reviews/men1.png";
import ava7 from "@/assets/for-tours/reviews/lucia.png";
import ava8 from "@/assets/for-tours/reviews/men3.png";

export default {
  data() {
    return {
      revs: [
        {
          imag: cardreview,
          avatar: ava1,
          name: "Elena Wilson",
          desc: "I have just returned from an unforgettable hiking trip, and I can confidently say that it was one of the most thrilling adventures of my life! The entire experience, from the breathtaking landscapes to the incredible encounters with nature, left a profound impression on me.",
        },
        {
          imag: cardreview,
          avatar: ava2,
          name: "Anton Lungu",
          desc: "I have just returned from an amazing trip to Israel, and I simply cannot help but share my impressions. It was an incredible adventure that I will never forget.From the very beginning, my journey was filled with delight. When I landed in Tel Aviv, I was amazed by the beauty and energy of the city. ",
        },
        {
          imag: cardreview,
          avatar: ava3,
          name: "Alice Colomeets",
          desc: "I just returned from an incredible adventure in the mountains, and I simply can't help but share my excitement! My hiking trip turned out to be one of the most thrilling and unforgettable experiences of my life. First and foremost, the trail was absolutely stunning.",
        },
        {
          imag: cardreview,
          avatar: ava4,
          name: "Vlad Moraru",
          desc: "My trip to Italy was an absolute dream come true. From the historic streets of Rome to the romantic canals of Venice, every moment was filled with beauty and enchantment.",
        },
        {
          imag: cardreview,
          avatar: ava5,
          name: "Olivia Dunce",
          desc: "My mountain adventure in Austria was nothing short of awe-inspiring. The majestic peaks, lush alpine meadows, and crystal-clear lakes created a breathtaking backdrop for every step of the journey.",
        },
        {
          imag: cardreview,
          avatar: ava6,
          name: "Clay Roberts",
          desc: "My journey to Germany was truly captivating and full of diverse experiences. From exploring the historic charm of Berlin to wandering through the fairy-tale-like towns of the Bavarian Alps, every moment was filled with wonder.",
        },
        {
          imag: cardreview,
          avatar: ava7,
          name: "Lucia Allen",
          desc: "My trip to Portugal was an incredible experience that exceeded all expectations. From the vibrant streets of Lisbon to the stunning beaches of the Algarve, the country offered a perfect blend of culture and natural beauty. ",
        },
        {
          imag: cardreview,
          avatar: ava8,
          name: "Jason Stevens",
          desc: "The trip to Moldova was an unforgettable experience for wine enthusiasts. Visiting wineries allowed us to explore the rich heritage and wine-making traditions in this unique country.",
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
.area-for-reviews {
  width: 100%;
  height: 815px;
}
.VueCarousel-pagination[data-v-438fd353] {
  margin-top:-10%;
  z-index: 999;
}
.custom-back-for-reviews {
  background-color: rgba(205, 221, 201, 1);
  display: flex;
  position: absolute;
  width: 100%;
  height: 815px;
  z-index: -1;
  justify-content: flex-end;
}
.area-reviews-header {
  padding-top: 4%;
}
.reviews-cust-text {
  font-family: "GT Walsheim Pro Medium";
  font-size: 68px;
  color: rgba(31, 59, 34, 1);
  font-weight: 500;
}
.Rew-custom-avatar {
  display: flex;
  position: absolute;
  top: 3%;
  width: 21%;
  justify-content: center;
}
.Rew-background {
  background-color: rgba(220, 235, 215, 1);
  display: flex;
  position: absolute;
  width: 100%;
  z-index: -1;
  height: 1210px;
}

.carousel {
  width: 100%;
  display: flex;
  justify-content: center;
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
.Rew-slide-slot {
  padding-left: 9%;
  padding-right: 7%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.Rew-slide-image {
  width: 100%;
  height: 500px;
  display: flex;
  align-items: flex-end;
  align-self: center;
}
.Rew-slide-info {
  display: flex;
  color: rgba(31, 59, 34, 1);
  position: absolute;
  top: 36%;
  width: 21%;
}
.Rew-text-area {
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "GT Walsheim Pro Regular";
  color: rgb(0, 0, 0);
  padding-left: 8%;
  padding-right: 10%;
}
.Rew-header-text {
  font-size: 32px;
  text-align: center;
}
.Rew-text-desc {
  font-size: 14px;
  line-height: 143%;
  text-align: center;
  margin-top: 4%;
}

.custom-rating {
  font-size: 14px;
  color: #1f3b22;
  background-color: #00000000;
  border-color: #1f3b2200;
  margin-bottom: 6%;
}
.area-for-rating {
  margin-top: 3%;
}

</style>
