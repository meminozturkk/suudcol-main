<template>
  <div class="sub-cat-container">
    <div class="combines">
      <video id="video" loop muted>
        <source src="../assets/product-collection/video.mp4" type="video/mp4" />
      </video>
      <button class="playBtn" @click="videoControl()">
        <i class="fa fa-play" aria-hidden="true"></i>
      </button>
    </div>
    <div class="grid">
      <div class="row row1">
        <div class="grid-item grid-1">
          <router-link to="/productList">
            <img src="../assets/product-collection/kaban-banner-kasimopt.jpg" alt="" />
          </router-link>
        </div>
        <div class="grid-item grid-3">
          <router-link to="/productList">
            <img src="../assets/product-collection/ceket-banner-kasimopt.jpg" alt="" />
          </router-link>
        </div>
      </div>
      <div class="row row2">
        <div class="grid-item grid-2">
          <router-link to="/productList">
            <img
              src="../assets/product-collection/canta-banner-kasimopt.jpg"
              alt=""
              srcset=""
            />
            <div class="kesfet"><label> Keşfet </label></div>
          </router-link>
        </div>
        <div class="grid-item grid-4">
          <router-link to="/productList">
            <img src="../assets/product-collection/ayin-favorileriopt.jpg" alt="" />
          </router-link>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "ProductCollection",

  methods: {
    videoControl: function () {
      var video = document.getElementById("video");
      if (video.paused) video.play();
      else video.pause();
    },
  },
};
</script>

<style scoped>
.sub-cat-container {
  margin-top: 730px;
  display: flex;
  justify-content: center;
}

.combines {
  width: 50%;
}
.combines video {
  width: 100%;
  height: 100vh;
}
.kesfet label {
  color: black;
  position: relative;
  bottom: 80px;
  left: 40%;

  margin: auto 0 !important;
  padding: 0 12px;
  color: #000;
  font-size: 16px;
  font-weight: 600;
  text-decoration: underline;
  transition: all 0.3s ease-out;
  cursor: pointer;
}
.kesfet label:hover {
  text-decoration: underline;
  text-decoration-color: black !important;
  transform: scaleX(1.1);
}

.playBtn {
  border: none;
  background-color: transparent;
  border-radius: 50%;
  padding: 10px;
  position: relative;
  top: -90px;
 margin-left: 400px;
  color: rgb(255, 255, 255);
  cursor: pointer;
}

.grid {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 0;
  margin-right: 0;
}

.row {
  display: flex;
  flex-direction: row;
}
.row .grid-item {
  width: 50%;
}
.grid-item img {
  width: 100%;
}
</style>
