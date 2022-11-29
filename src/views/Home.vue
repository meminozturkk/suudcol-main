<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <site-navbar />
    <hero-carousel />
    <sub-categories />
    <product-collection />
    <other-products/>
    <round-categories/>
    <suud-woman/>
    <site-footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

import HeroCarousel from "../components/HeroCarousel.vue";
import SiteNavbar from "../components/SiteNavbar.vue";
import SubCategories from "../components/SubCategories.vue";
import ProductCollection from "../components/ProductCollection.vue";
import SiteFooter from "../components/SiteFooter.vue";
import RoundCategories from '../components/RoundCategories.vue';
import SuudWoman from '../components/SuudWoman.vue';

export default {
  name: "Home",
  components: {
    // HelloWorld,
    HeroCarousel,
    SiteNavbar,
    SubCategories,
    ProductCollection,
    SiteFooter,
    RoundCategories,
    SuudWoman,
   
  },
};
</script>
<style>
  
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap");
.home{
  max-width: 100vw;
}
</style>