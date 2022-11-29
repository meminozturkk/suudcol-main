<template>
  <div>
    <div class="round-products">
      <div class="pagination-rounds">
        <button class="roundPrevBtn"><i class="fa fa-angle-left"></i></button>
        <button class="roundNextBtn"><i class="fa fa-angle-right"></i></button>
      </div>
      <div id="owl-rounds" class="owl-carousel owl-theme">
        <div class="prod">
          <img src="../assets/other-products/ekstra1.jpg" alt="" srcset="" />
          <div class="prod-info">
            <span class="product-subtitle"
              >Tarzını bir üst seviyeye taşıyan</span
            >
            <br />
            <span class="product-title">AKSESUAR</span> <br />
            <span class="product-link"> <a href="#">Tümünü Göster</a></span>
          </div>
        </div>
        <router-link to="/productList">
          <div class="prod">
            <img src="../assets/other-products/ekstra1.jpg" alt="" srcset="" />
            <div class="prod-info">
              <span class="product-subtitle">Cool bir adım</span> <br />
              <span class="product-title">AYAKKABI</span> <br />
              <span class="product-link"> <a href="#">Tümünü Göster</a></span>
            </div>
          </div>
        </router-link>
        <router-link to="/productList">
          <div class="prod">
            <img src="../assets/other-products/ekstra1.jpg" alt="" srcset="" />
            <div class="prod-info">
              <span class="product-subtitle">Zamansız Duruş</span> <br />
              <span class="product-title">ÇANTA</span> <br />
              <span class="product-link"> <a href="#">Tümünü Göster</a></span>
            </div>
          </div>
        </router-link>
        <router-link to="/productList">
          <div class="prod">
            <img src="../assets/other-products/ekstra2.jpg" alt="" srcset="" />
            <div class="prod-info">
              <span class="product-subtitle">Yumuşacık ve Sıcak</span> <br />
              <span class="product-title">ÇORAP</span> <br />
              <span class="product-link"> <a href="#">Tümünü Göster</a></span>
            </div>
          </div>
        </router-link>
        <router-link to="/productList">
          <div class="prod">
            <img src="../assets/other-products/ekstra3.jpg" alt="" srcset="" />
            <div class="prod-info">
              <span class="product-subtitle"
                >Görünümüne sıra dışı bir katman</span
              >
              <br />
              <span class="product-title">GÖZLÜK</span> <br />
              <span class="product-link"> <a href="#">Tümünü Göster</a></span>
            </div>
          </div>
        </router-link>
        <router-link to="/productList">
          <div class="prod">
            <img src="../assets/other-products/ekstra4.jpg" alt="" srcset="" />
            <div class="prod-info">
              <span class="product-subtitle">Her stilin tamamlayıcısı</span>
              <br />
              <span class="product-title">KEMER</span> <br />
              <span class="product-link"> <a href="#">Tümünü Göster</a></span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoundProducts",
};
</script>

<style>
* {
  font-family: "Quicksand", sans-serif;
}
body {
  scroll-behavior: smooth;
}
ol {
  list-style-type: none;
}
.hr {
  height: 1px;
  background-color: rgb(218, 218, 218);
  border: none;
}
.pagination-rounds {
  margin-left: 950px;
  margin-bottom: 10px;
}
.roundNextBtn,
.roundPrevBtn {
  border: none;
  border-radius: 50%;
  box-shadow: #ececec21 0 3px 6px;
  background-color: rgba(255, 255, 255, 0.445);
  text-align: right;
  padding: 15px;
  cursor: pointer;
  z-index: 3;
}
.roundPrevBtn:focus,
.roundNextBtn:focus {
  border: none;
  outline: none;
}
.roundNextBtn {
  position: relative;
  right: -500px;
  top: 300px;
}
.roundPrevBtn {
  position: relative;
  left: -930px;
  top: 300px;
}
.prod-info {
  position: absolute;
  bottom: 1px;
  left: 0px;
  color: white;
  background: linear-gradient(
    to bottom,
    rgba(37, 37, 37, 0) 0%,
    rgb(36, 35, 35) 60%
  );
  padding: 50px;
  width: 100%;
  border-radius: 20px;
  cursor: pointer;
}
.prod:hover {
  filter: brightness(90%);
}
.round-products {
  width: 90%;
  margin: 0 auto;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 30px;
}
.round-products img {
  border-radius: 20px;
}
.round-products .pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.round-products .product-subtitle {
  font-size: 15px;
}
.round-products .product-title {
  font-weight: 500;
  font-size: 22px;

  font-weight: 700;
}

.round-products a {
  color: white;
  text-decoration: underline;
}
/* .owl-carousel div{
  width: 264px;
}
#owl-others img {
  width: 100%;
} */
</style>
