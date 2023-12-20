<template>
  <div>
    <slider-tours />
    <benefits-tours /><select-tours />
    <last-minute-tours />

    <upcoming-tours-vue />
    <return-to-shop />
    <find-your-travel />
    <reviews-from/>
  </div>
</template>

<script>
import SliderTours from "./elements/SliderTours.vue";
import SelectTours from "./elements/SelectTours.vue";
import BenefitsTours from "./elements/BenefitsTours.vue";
import LastMinuteTours from "./elements/LastMinuteTours.vue";
import FindYourTravel from "./elements/FindYourTravel.vue";
import UpcomingToursVue from "./elements/UpcomingTours.vue";
import ReturnToShop from "./elements/ReturnToShop.vue";
import ReviewsFrom from "./elements/ReviewsFrom.vue";


export default {
  components: {
    SliderTours,
    SelectTours,
    BenefitsTours,
    LastMinuteTours,
    FindYourTravel,
    UpcomingToursVue,
    ReturnToShop,
    ReviewsFrom,
  },
};
</script>
