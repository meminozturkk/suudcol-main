<template>
  <div id="hero-caro" class="hero">
    <div id="hero-slide" class="owl-carousel owl-theme">
      <div class="">
        <a href="#"
          ><img
            class="d-block w-100"
            src="https://www.suudcollection.com/Uploads/EditorUploads/Banner1/desk-slider-tr-1.png"
            alt="First slide"
        /></a>
        <div class="carousel-caption d-none d-md-block">
          <h2 style="margin-bottom:250px"></h2>
          <router-link to="/productList" class="kesfet" href="#"
            ><i class="fas fa-angle-left"></i> Şimdi Keşfet
            <i class="fas fa-angle-right"></i>
          </router-link>
        </div>
      </div>
      <div class="">
        <a href="#"
          ><img
            class="d-block w-100"
            src="https://www.suudcollection.com/Uploads/EditorUploads/Banner1/winterwindopt..png"
            alt="Second slide"
        /></a>
        <div class="carousel-caption d-none d-md-block">
          <h2 style="margin-bottom:250px">KABAN</h2>
          <router-link to="/productList" class="kesfet" href="#"
            ><i class="fas fa-angle-left"></i> Koleksiyonu Keşfet
            <i class="fas fa-angle-right"></i>
          </router-link>
        </div>
      </div>
      <div class="">
        <a href="#"
          ><img
            class="d-block w-100"
            src="https://www.suudcollection.com/Uploads/EditorUploads/Banner1/desk-slider-deri.jpg"
            alt="Third slide"
        /></a>
        <div class="carousel-caption d-none d-md-block">
          <h2 style="margin-bottom:250px">DERİ KOLEKSİYONU</h2>
          <router-link to="/productList" class="kesfet" href="#"
            ><i class="fas fa-angle-left"></i> Koleksiyonu Keşfet
            <i class="fas fa-angle-right"></i>
          </router-link>
        </div>
      </div>
      <div class="">
        <a href="#"
          ><img
            class="d-block w-100"
            src="https://www.suudcollection.com/Uploads/EditorUploads/Banner1/trenckot-desktop.png"
            alt="Third slide"
        /></a>
        <div class="carousel-caption d-none d-md-block">
          <h2 style="margin-bottom:250px">TRENÇKOT</h2>
          <router-link to="/productList" class="kesfet" href="#"
            ><i class="fas fa-angle-left"></i> Koleksiyonu Keşfet
            <i class="fas fa-angle-right"></i>
          </router-link>
        </div>
      </div>
      <!-- <div class="">
        <a href="#"
          ><img
            class="d-block w-100"
            src="../assets/hero/hero5.jpg"
            alt="First slide"
        /></a>
        <div class="carousel-caption d-none d-md-block">
          <h2>COLORS KOLEKSİYONU</h2>
          <router-link to="/productList" class="kesfet" href="#"
            ><i class="fas fa-angle-left"></i> Koleksiyonu Keşfet
            <i class="fas fa-angle-right"></i>
          </router-link>
        </div>
      </div> -->
    </div>

    <!--     <a
      class="carousel-control-prev"
      href="#hero-slide"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#hero-slide"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a> -->
  </div>
</template>

<script>
export default {
  name: "HeroCarousel",
  mounted() {},
  methods: {},
};
</script>

<style scoped>
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");
* {
  font-family: "Open Sans", sans-serif;
}
.hero-caro{
  margin-top: auto;
}
.hero {
  width: 100%;
  margin-top:100px;
  height: 600px !important;
}
.hero-slide {
  height: 400px;
}
.hero-slide img{
  height: 300px;
}
.carousel-inner {
  height: 600px !important;
}
.carousel-indicators li {
  border-radius: 12px;
  width: 12px;
  height: 12px;
  background-color: #404040;
}
.carousel-caption {
  margin-top: 450px;
  color: white;
  text-shadow: -3px -3px 5px rgb(63, 63, 63);
}
.carousel-caption h2 {
  font-family: "Assistant", sans-serif;
  font-size: 2.75rem;
  font-weight: 900;
}
.carousel-caption a {
  color: white;
}
.carousel-item img {
  width: 90%;
  height: 600px;
}
.kesfet:hover {
  text-decoration: underline;
}
</style>
