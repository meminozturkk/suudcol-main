<template>
  <div ref="bodi">
    <site-navbar />

    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Anasayfa</a></li>
        <li class="breadcrumb-item"><a href="#">GİYİM</a></li>
        <li class="breadcrumb-item"><a href="#">TÜMÜNÜ KEŞFET</a></li>
        <li class="breadcrumb-item dropdown">
          <a
            class="btn btn-secondary dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Kategoriler
          </a>

          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="#">Etek</a> <br />
            <a class="dropdown-item" href="#">Gömlek</a><br />
            <a class="dropdown-item" href="#">Trençkot</a> <br />
            <a class="dropdown-item" href="#">Ayakkabı</a>
          </div>
        </li>

        <li class="breadcrumb-item active" aria-current="page">Ürün</li>
      </ol>
    </nav>

    <!-- /breadcrumbs -->
    <!-- product info -->
    <div class="product-info">
      <div class="product-pagination">
        <a href="#">Önceki</a>
        /
        <a href="#">Sonraki</a>
      </div>
      <div class="product-header">
        <i class="fa fa-heart-o product-fav"></i>
        <h5 class="product-brand">SUUD COLLECTİON</h5>
        <p class="product-price">129,90 TL</p>
        <p class="product-title">Beyaz Oversize Pamuklu Sweatshirt</p>
        <label class="product-codes" for=""
          >Ü.K: 30792 / M.K : 41830785-1059
        </label>
      </div>
      <!-- <div class="product-selection">
        <div class="select-color">
          <strong>Renk</strong>
          Renk Seç
        </div>
        <div class="select-size">
          <strong>Beden</strong>
          Beden Seç
        </div>
      </div> -->
      <div id="middle" class="middle">
        <div cd="StockControl" class="chooseButtons" style="display: flex">
          <div id="selectColor" class="selectColor">
            <div
              cd="mobileMenuOverlay "
              class="mobile-menu-overlay color"
            ></div>
            <div class="info">
              <p class="color-text">Renk</p>
              <p class="numberofOptions">
                <span cd="ShowingColor">3</span
                ><span class="numberofOptiont-text"> Farklı Renk</span>
              </p>
            </div>
            <div class="color-body">
              <div class="left">
                <span
                  cd="ActiveColorCode"
                  selectedcode=""
                  id="color-code"
                  class="color-code"
                  style="--selectedCode: #b87333"
                ></span>
                <span cd="ActiveColorName" class="color-name">camel</span>
              </div>
              <div class="right">
                <span class="fa fa-angle-right"></span>
              </div>
            </div>
          </div>
          <div class="dropdown-color" style="height: 860px">
            <div class="content">
              <div class="head">
                <div class="text">
                  <p class="main-caption">Renk</p>
                  <p class="sub-text">
                    <span cd="ShowingColor">3</span> Farklı Renk
                  </p>
                </div>
                <div id="close-tab" class="close-tab">
                  <span class="ifa-icon ifa-57"></span>
                </div>
              </div>
              <div class="body">
                <div cd="colorAllList" class="body-content">
                  <div class="item">
                    <div class="Color-group">
                      <input
                        type="radio"
                        cd="colorSelect"
                        id="Color-31731"
                        value="31731"
                        name="color-items"
                        data-color="Siyah"
                      />
                      <label for="Color-31731" class="radio-label">
                        <div
                          class="select-color-btn"
                          onclick="colorSelect(31731)"
                        >
                          <div class="image">
                            <img
                              class="item-image lazy"
                              src="https://farktorcdn.com/Library/Upl/5500181/All/Fr-55001812452021165501_lazyload.gif"
                              data-src="https://farktorcdn.com/Library/Upl/5500181/Product/164x246/SUUD_2110_1744.jpg"
                              alt=""
                            />
                          </div>
                          <div class="item-content">
                            <span
                              selectcode="#000000"
                              style="--selectCode: #000000"
                              class="select-color"
                            ></span>
                            <p class="text-content">Siyah</p>
                          </div>
                          <div class="verify-span">
                            <span class="ifa-icon ifa-984"></span>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="item">
                    <div class="Color-group">
                      <input
                        type="radio"
                        cd="colorSelect"
                        id="Color-31727"
                        value="31727"
                        name="color-items"
                        data-color="Haki"
                      />
                      <label for="Color-31727" class="radio-label">
                        <div
                          class="select-color-btn"
                          onclick="colorSelect(31727)"
                        >
                          <div class="image">
                            <img
                              class="item-image lazy"
                              src="https://farktorcdn.com/Library/Upl/5500181/All/Fr-55001812452021165501_lazyload.gif"
                              data-src="https://farktorcdn.com/Library/Upl/5500181/Product/164x246/SUUD_2110_1674.jpg"
                              alt=""
                            />
                          </div>
                          <div class="item-content">
                            <span
                              selectcode="rgb(26, 73, 9)"
                              style="--selectCode: rgb(26, 73, 9)"
                              class="select-color"
                            ></span>
                            <p class="text-content">Haki</p>
                          </div>
                          <div class="verify-span">
                            <span class="ifa-icon ifa-984"></span>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="item">
                    <div class="Color-group">
                      <input
                        type="radio"
                        cd="colorSelect"
                        id="Color-31735"
                        value="31735"
                        name="color-items"
                        data-color="camel"
                        checked="checked"
                      />
                      <label for="Color-31735" class="radio-label">
                        <div
                          class="select-color-btn"
                          onclick="colorSelect(31735)"
                        >
                          <div class="image">
                            <img
                              class="item-image lazy"
                              src="https://farktorcdn.com/Library/Upl/5500181/All/Fr-55001812452021165501_lazyload.gif"
                              data-src="https://farktorcdn.com/Library/Upl/5500181/Product/164x246/SUUD_1811_1702.jpg"
                              alt=""
                            />
                          </div>
                          <div class="item-content">
                            <span
                              selectcode="#b87333"
                              style="--selectCode: #b87333"
                              class="select-color"
                            ></span>
                            <p class="text-content">camel</p>
                          </div>
                          <div class="verify-span">
                            <span class="ifa-icon ifa-984"></span>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="selectSize"
            class="body-list-container"
            cd="bodySizeListContainer"
            style="display: flex"
          >
            <div cd="mobileMenuOverlay " class="mobile-menu-overlay size"></div>
            <div class="BodyContent">
              <div class="body-select">
                <div class="body-text" cd="bodySizeList">
                  <div class="size-box">
                    <span class="size-text">Beden</span>
                    <span cd="AllBodySize" class="size-option all"></span>
                    <span
                      cd="AllBodySizeCoount"
                      data-text-3=" Farklı Beden"
                      class="size-option number"
                      >4 Farklı Beden</span
                    >
                  </div>
                  <div class="size-body">
                    <span cd="SelectedSize" data-txt="Seçiniz" class="size-text"
                      >Seçiniz</span
                    >
                    <span class="fa fa-angle-right"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="body_dropdown" style="height: 860px">
            <div class="dropdown-title">
              <div class="item">
                <div class="left" style="display: none">
                  <p class="item-text">Beden Seç</p>
                  <button
                    type="button"
                    cd="ProductBodySizeTable"
                    class="BodyRehber"
                  >
                    <span class="ifa-icon ifa-993"></span>
                    <p class="text">Beden Tablosu</p>
                  </button>
                </div>
                <div class="right">
                  <div id="close-body">
                    <span class="ifa-icon ifa-57"></span>
                  </div>
                </div>
              </div>
            </div>
            <div cd="bodySizeAllList" class="dropdown-content">
              <div class="item">
                <div cd="BodySizeItem" class="body-group BodySizeItem">
                  <input
                    type="radio"
                    cd="boydSizeSelect"
                    id="Body-31735"
                    value="31735"
                    name="body-items"
                    data-body-size="36"
                  />
                  <label for="Body-31735" class="radio-label">
                    <span cd="boydSizeName" class="label-size text">36</span>
                    <div cd="LittleStock" class="AzStok">
                      <div>
                        <span class="ifa-icon ifa-1007"></span>Son
                        <span cd="LittleStockUnit"></span> Adet
                      </div>
                    </div>
                    <div class="verify-span">
                      <span class="ifa-icon ifa-984"></span>
                    </div>
                  </label>
                </div>
              </div>
              <div class="item">
                <div cd="BodySizeItem" class="body-group BodySizeItem">
                  <input
                    type="radio"
                    cd="boydSizeSelect"
                    id="Body-31736"
                    value="31736"
                    name="body-items"
                    data-body-size="38"
                  />
                  <label for="Body-31736" class="radio-label">
                    <span cd="boydSizeName" class="label-size text">38</span>
                    <div cd="LittleStock" class="AzStok">
                      <div>
                        <span class="ifa-icon ifa-1007"></span>Son
                        <span cd="LittleStockUnit"></span> Adet
                      </div>
                    </div>
                    <div class="verify-span">
                      <span class="ifa-icon ifa-984"></span>
                    </div>
                  </label>
                </div>
              </div>
              <div class="item">
                <div cd="BodySizeItem" class="body-group BodySizeItem">
                  <input
                    type="radio"
                    cd="boydSizeSelect"
                    id="Body-31737"
                    value="31737"
                    name="body-items"
                    data-body-size="40"
                  />
                  <label for="Body-31737" class="radio-label">
                    <span cd="boydSizeName" class="label-size text">40</span>
                    <div cd="LittleStock" class="AzStok">
                      <div>
                        <span class="ifa-icon ifa-1007"></span>Son
                        <span cd="LittleStockUnit"></span> Adet
                      </div>
                    </div>
                    <div class="verify-span">
                      <span class="ifa-icon ifa-984"></span>
                    </div>
                  </label>
                </div>
              </div>
              <div class="item">
                <div cd="BodySizeItem" class="body-group BodySizeItem">
                  <input
                    type="radio"
                    cd="boydSizeSelect"
                    id="Body-31738"
                    value="31738"
                    name="body-items"
                    data-body-size="42"
                  />
                  <label for="Body-31738" class="radio-label">
                    <span cd="boydSizeName" class="label-size text">42</span>
                    <div cd="LittleStock" class="AzStok">
                      <div>
                        <span class="ifa-icon ifa-1007"></span>Son
                        <span cd="LittleStockUnit"></span> Adet
                      </div>
                    </div>
                    <div class="verify-span">
                      <span class="ifa-icon ifa-984"></span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sold-out" cd="SoldOutContainer" style="display: none"></div>
      </div>
      <button class="addCardBtn">SEPETE EKLE</button>
      <br /><br />
      <button class="info">
        Teslimat & İade <a href="#"> politikamızı inceleyin</a>
      </button>
      <div class="ship-info">
        <i class="fa fa-check" aria-hidden="true"></i> Tahmini kargoya veriliş
        tarihi: <span class="ship-date"> 27 Ekim - 29 Ekim</span>
      </div>
      <div class="product-share">
        <hr />
        <ul class="share">
          <li>
            <i class="fa fa-whatsapp" aria-hidden="true"></i
            ><a href=""> Whatsapp</a>
          </li>
          <li>
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <a href=""> E-posta </a>
          </li>
          <li><i class="fas fa-share-alt"></i><a href=""> Paylaş </a></li>
        </ul>
        <ul class="socials">
          <li>
            <a href="#">
              <i class="fa fa-instagram"> </i>
            </a>
          </li>
          <li>
            <a href=""> <i class="fa fab fa-facebook-f"> </i></a>
          </li>
          <li>
            <a href=""><i class="fa fab fab fa-twitter"> </i></a>
          </li>
          <li>
            <a href=""> <i class="fa fab fab fab fa-pinterest"> </i></a>
          </li>
        </ul>
      </div>
    </div>
    <!-- product info -->

    <!-- product gallery (owl)-->
    <div id="owl-gallery" class="owl-carousel owl-theme">
      <div class="">
        <img src="../assets/product-detail/product1.jpg" alt="" srcset="" />
      </div>
      <div class="">
        <img src="../assets/product-detail/product2.jpg" alt="" srcset="" />
      </div>
      <div class="">
        <img src="../assets/product-detail/product3.jpg" alt="" srcset="" />
      </div>
      <div class="">
        <img src="../assets/product-detail/product4.jpg" alt="" srcset="" />
      </div>
      <div class="">
        <img src="../assets/product-detail/product5.jpg" alt="" srcset="" />
      </div>
    </div>
    <!-- /product gallery -->
    <!-- product menu -->
    <div class="product-menu">
      <div class="tabs">
        <ul>
          <li><a href="#owl-gallery">GALERİ</a></li>
          <li><a href="#details">ÜRÜN DETAYLARI</a></li>
          <li><a href="#comments">DEĞERLENDİRMELER</a></li>
          <li><a href="#others">SON GÖRÜNTÜLENENLER</a></li>
          <li><a href="#help">YARDIM</a></li>
        </ul>
      </div>
      <!-- tabs -->
      <div id="details" class="product-detail">
        <h5>ÜRÜN DETAYLARI VE İÇERİK</h5>
        <p>
          <strong>Açıklama: <br /> </strong>
          -Beyaz <br />
          -%100 Pamuk <br />
          -Kapüşonlu <br />
          -Yüksek kalite işçilik
        </p>
        <p>El ile ölçümlerde 2-3 cm farklılık gösterebilir.</p>
        <table>
          <tr>
            <th>Ölçüler</th>
            <th>36/38</th>
            <th>40/42</th>
          </tr>
          <tr>
            <td class="col">Omuz</td>
            <td>26</td>
            <td>26,5</td>
          </tr>
          <tr>
            <td class="col">Göğüs Çevresi</td>
            <td>129</td>
            <td>133</td>
          </tr>
          <tr>
            <td class="col">Boy</td>
            <td>80</td>
            <td>81</td>
          </tr>
          <tr>
            <td class="col">Kol Uzunluğu</td>
            <td>75</td>
            <td>76</td>
          </tr>
        </table>
        <p class="yikama-talimati">
          <br /><br /><br />
          <strong id="#help">Bakım: <br /></strong>
          Ürünün iç etiket bölümünde gerekli yıkama talimatı yer almaktadır.
          <br />
          <br />
          <img src="../assets/product-detail/washing-instr.png" alt="" />
        </p>
        <br /><br /><br />
        <hr />
        <div class="yardim">
          <h5>YARDIM</h5>
          <p>
            <strong>Açıklama:</strong><br />Buradan online satış hizmetimizle
            ilgili tüm sorularını yanıtlıyoruz! Whatsapp: +90 539 202 7883 Hafta
            içi 10:00 - 18:00 (GMT+3) Telefon: 0850 259 7883 <br />
            Tüm soru, sorun ve önerilerin için info@suudcollection.com’a mail
            atabilirsin! <br /><br />
          </p>
        </div>
        <hr />
        <div id="comments" class="ratings"></div>
        <div id="others" class="others"></div>
        <!-- product comments -->
      </div>
      <!-- prod detail -->
      <br />
    </div>
    <!-- product menu -->
    <product-comments />
    <other-products />

    <last-views />
  </div>
</template>

<script>
import SiteNavbar from "../components/SiteNavbar.vue";
import OtherProducts from "../components/OtherProducts.vue";
import LastViews from "../components/LastViews.vue";
import ProductComments from "../components/ProductComments.vue";

export default {
  name: "ProductDetail",

  components: {
    SiteNavbar,
    OtherProducts,
    LastViews,
    ProductComments,
  },
};
</script>

<style>
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css");

* {
  font-family: "Quicksand", sans-serif;
  scroll-behavior: smooth;
}
body {
  scroll-behavior: smooth;
}
ol {
  list-style-type: none;
}
hr {
  border: none;
  border-top: 1px solid rgb(168, 168, 168);
}
img {
  width: 100px;
}
.container {
  margin-top: 50px;
  width: 100%;
}

/* breadcrumb styling */
.breadcrumb-item + .breadcrumb-item::before {
  content: "> ";
}
.breadcrumb {
  margin-top: 20px;
  color: black;
  background-color: white;
}
.breadcrumb a {
  color: black;
}
.dropdown {
  border-radius: 5px;
  width: 100px;
  text-align: center;
  /* display: flex; */
  flex-direction: row;
  background-color: white;
}

.btn-secondary {
  color: #fff;
  border-color: #ffffff;
  background-color: white;
}
.btn-secondary:hover {
  background-color: white;
}
.btn-secondary:focus {
  background-color: white;
}
.dropdown .dropdown-toggle {
  border: 1px solid rgb(121, 121, 121);
  padding: 2px;
  cursor: pointer;
}
.dropdown-toggle::after {
  content: none;
}

.product-info {
  z-index: 100;
  border: none;
  width: 30%;
  padding: 25px;
  height: 100vh;
  position: fixed;
  left: 65%;
  top: 49px;
  background-color: white;
  -webkit-box-shadow: 7px 7px 6px -7px #000000;
  box-shadow: 7px 7px 6px -7px #000000;
  display: flex;
  flex-direction: column;
}
.product-pagination {
  text-align: end;
}
.product-pagination a {
  color: #bababa;
}

.product-pagination a:hover {
  color: #000000;
}
.product-header {
  /* margin-top: 35px; */
  margin-bottom: 5px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
}
.product-fav {
  align-self: flex-end;
  margin-right: 30px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 50%;
  padding: 10px;
  -webkit-box-shadow: 7px 7px 6px -7px #535353;
  box-shadow: 7px 7px 6px -7px #535353;
}
.product-fav:hover {
  background-color: #e0e0e0;
}
.product-brand {
  font-size: 17px;
  font-weight: 700;
}
.product-price {
  font-size: 25px;
  font-weight: 900;
}
.product-title {
  font-size: 16px;
  font-weight: 700;
  margin-left: 6px;
}
.product-codes {
  color: #bababa;
}
.product-selection {
  display: flex;
  margin: 15px;
  padding: 15px;
  border-top: 1px solid #bababa;
  border-bottom: 1px solid #bababa;
  justify-content: space-between;
}

.product-info .addCardBtn {
  align-self: center;
  width: 90%;
  border-radius: 30px;
  border: none;
  background-color: #0b9243;
  padding: 15px;
  color: white;
  font-weight: 800;
  font-size: 15px;
  cursor: pointer;
  margin-top: 15px;
}
.product-info .addCardBtn:hover {
  filter: brightness(1.1);
}
.info {
  text-align: left;
  margin-top: 20px;
  color: black;
  font-size: 13px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  align-self: flex-start;
  font-weight: 500;
  margin-left: 25px;
}
.info a {
  color: #000000;
  text-decoration: underline;
}
.ship-info {
  background-color: #f7f7f7;
  padding: 30px;
  border-radius: 15px;
  width: 90%;
  margin: 0 auto;
  margin-top: 30px;
  font-size: 12px;
  text-align: left;
}
.ship-info i,
.ship-date {
  color: #0b9243;
}
.product-share {
  margin-top: 25px;
}
.product-share a {
  color: #000000;
  font-size: 15px;
  font-weight: 500;
}
.share {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
}
.product-share ul li {
  animation: antiscale 0.5s forwards;
}
.product-share ul li:hover {
  animation: scale 0.5s forwards;
}
.product-share ul li a:hover {
  text-decoration: none;
}
.socials {
  margin-top: 80px;
  display: flex ;
  flex-direction: row;
  justify-content: center;
  justify-self: flex-end;
  list-style-type: none;
}
.socials li a {
  margin-right: 30px;
  color: white;
  background-color: rgb(202, 202, 202);
  border-radius: 50%;
  padding: 7px;
}
.yikama-talimati img {
  width: 250px !important;
}
.product-menu .tabs ul {
  list-style-type: none;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
}
.product-menu .tabs ul li {
  padding: 29px 25px;
}
.product-menu a {
  color: black;
}
.product-menu a:hover {
  text-decoration: none;
  border-bottom: 2px solid black;
  padding-bottom: 5px;
}
.product-detail {
  margin-left: 50px;
  width: 75%;
  text-align: left;
}
.product-detail table td,
table th {
  font-size: 16px;
  border: 1px solid #e7e6e6;
  padding: 2px;
  width: 100px;
  text-align: center;
}
.product-detail table .col,
th {
  background-color: #e7e6e6;
}
.product-detail table .col {
  width: 200px;
}
.middle {
  margin-left: 25px;
  margin-right: 25px;
}
.middle .chooseButtons {
  display: flex;
  border-top: 1px solid #c5c5c5;
  border-bottom: 1px solid #c5c5c5;
  position: relative;
}
.middle .chooseButtons .selectColor {
  flex: 1;
  padding: 17px 0;
  padding-top: 0;
  padding-right: 20px;
  cursor: pointer;
  position: relative;
}
#selectSize {
  padding-top: 0;
}
.middle .chooseButtons .selectColor .info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.middle .chooseButtons .selectColor .info .color-text {
  font-size: 16px;
  color: #262626;
  font-weight: 700;
}
.middle .chooseButtons .selectColor .info .numberofOptions {
  color: #000;
  font-size: 10px;
  opacity: 0.5;
}
.middle .chooseButtons .selectColor .color-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
}
.middle .chooseButtons .selectColor .color-body .left {
  display: flex;
  align-items: center;
}
.middle .chooseButtons .selectColor .color-body .left .color-code {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  color: #3e5e86;
  display: flex;
  background-color: var(--selectedCode);
  border: 1px solid #eee;
}
.middle .chooseButtons .selectColor .color-body .left .color-name {
  font-size: 14px;
  color: #262626;
  padding-left: 15px;
}
.middle .chooseButtons .selectColor .color-body .right .ifa-icon {
  font-size: 8px;
  color: #000;
  font-weight: 700;
}
.middle .chooseButtons .dropdown-color {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 445px;
  background: #fff;
  z-index: 1000;
  transform: translateX(100%);
  box-shadow: #00000029 0 3px 6px;
  transition: 0.35s ease-out;
  padding-top: 94px;
}
.middle .chooseButtons .dropdown-color .content {
  height: 100%;
}
.middle .chooseButtons .dropdown-color .content .head {
  display: flex;
  justify-content: space-between;
}
.middle .chooseButtons .dropdown-color .content .head .text {
  padding: 16px 22px;
}
.middle .chooseButtons .dropdown-color .content .head .text .main-caption {
  font-size: 16px;
  color: #262626;
  font-weight: 800;
}
.middle .chooseButtons .dropdown-color .content .head .text .sub-text {
  font-size: 14px;
  color: #000;
  font-weight: 300;
  padding-top: 9px;
}
.middle .chooseButtons .dropdown-color .content .head .close-tab {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.middle .chooseButtons .dropdown-color .content .body {
  max-height: calc(100% - 75px);
  overflow-x: hidden;
  overflow-y: auto;
  white-space: pre-line;
}
.middle
  .chooseButtons
  .dropdown-color
  .content
  .body
  .body-content
  .item:first-child {
  border-top: 1px solid #00000026;
}
.middle .chooseButtons .dropdown-color .content .body .body-content .item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #00000026;
  padding: 18px 21px;
  cursor: pointer;
}
.middle .chooseButtons .body-list-container {
  flex: 1;
  padding: 17px 0;
  padding-left: 20px;
  cursor: pointer;
  width: 100%;
}

.middle .chooseButtons .body-list-container .BodyContent {
  width: 100%;
}
.middle
  .chooseButtons
  .body-list-container
  .BodyContent
  .body-select
  .body-text
  .size-box {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.middle
  .chooseButtons
  .body-list-container
  .BodyContent
  .body-select
  .body-text
  .size-box
  .size-option {
  font-size: 10px;
  color: #000;
  font-weight: 300;
  opacity: 0.5;
}
.middle
  .chooseButtons
  .body-list-container
  .BodyContent
  .body-select
  .body-text
  .size-body
  .size-text {
  font-size: 14px;
  color: #262626;
  opacity: 0.65;
  font-weight: 700;
}
.middle
  .chooseButtons
  .body-list-container
  .BodyContent
  .body-select
  .body-text
  .size-box
  .size-text {
  font-size: 16px;
  color: #262626;
  font-weight: 700;
}
.middle
  .chooseButtons
  .body-list-container
  .BodyContent
  .body-select
  .body-text
  .size-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 21px;
}
.middle .chooseButtons .body_dropdown {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  max-width: 445px;
  background: #fff;
  z-index: 1232;
  transform: translateX(100%);
  box-shadow: #00000029 0 3px 6px;
  transition: 0.35s ease-out;
  padding-top: 94px;
}
.middle .chooseButtons .body_dropdown .dropdown-title .item {
  display: flex;
  justify-content: space-between;
}
.middle .chooseButtons .selectColor:after {
  content: "";
  position: absolute;
  right: 0;
  bottom: 50%;
  width: 1px;
  transform: translate(0, 50%);
  height: 61px;
  border-right: 1px solid #707070;
  opacity: 0.25;
}
.middle .addBasket {
  justify-content: center;
  margin: 24px 0;
  width: 100%;
  border-radius: 35px;
  border: none;
  background: #0b9243;
  transition: 0.35s ease-out;
  position: relative;
}
.middle .addBasket .addText {
  display: block;
  font-size: 16px;
  padding: 16px 0;
  color: #fff;
  text-transform: uppercase;
}
.yardim {
  width: 80%;
}
@keyframes scale {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }
}
@keyframes antiscale {
  from {
    transform: scale(1.2);
  }
  to {
    transform: scale(1);
  }
}
</style>
