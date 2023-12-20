<template>
  <div>
    <div class="slider">
      <div style="position: absolute; top: 225px;  left:440px; z-index: 1;">
        <span class="font-style">,</span>
      </div>
      <div style="position:absolute; z-index: 1;">
        
        <span class="font-style">It s time travelling</span>
      </div>
      <transition-group name="slide" tag="div">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          :class="{
            'slide-in': activeIndex === index,
            'slide-out': activeIndex !== index,
          }"
          class="slide"
        >
          <img class="d-flex" width="100%" height="112%"  :src="slide" />
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import Slide1 from "@/assets/for-tours/slider-home/slider-image1.jpg";
import Slide2 from "@/assets/for-tours/slider-home/slider-image2.jpg";
import Slide3 from "@/assets/for-tours/slider-home/slider-image3.jpg";
import Slide4 from "@/assets/for-tours/slider-home/slider-image4.jpg";
import Slide5 from "@/assets/for-tours/slider-home/slider-image5.jpg";
export default {
  data() {
    return {
      activeIndex: 0,
      slides: [
        Slide1, Slide2, Slide3, Slide4, Slide5,
      ],
    };
  },
  mounted() {
    this.startSlideShow();
  },
  methods: {
    startSlideShow() {
      setInterval(() => {
        this.activeIndex = (this.activeIndex + 1) % this.slides.length;
      }, 3000);
    },
  },
};
</script>

<style>
.slider {
  background-color: #283a2c;
    position: relative;
    height: 700px;
    width: 100%;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
}
.slide {
  position: absolute;
    top: 0;
    left: 0;
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease;
}
.slide-in {
  transform: translateX(0);
  animation: slide-in 1.8s;
}

.slide-out {
  transform: translateX(-100%);
  animation: slide-out 1.8s;
}
@font-face {
  font-family: 'GT Walsheim Pro Medium';
  src: url('@/fonts/GTWalsheimPro-Medium.woff') format('woff');

font-style: normal;
line-height: normal;
}
.font-style{
  font-size: 96px; 
  font-family: "GT Walsheim Pro Medium";
  font-weight: 800;
}

@keyframes slide-in {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
