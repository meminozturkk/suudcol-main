<template>
  <div>
    <site-navbar />
    <div class="devam">
      <hr />
      <router-link to="/productList">
        <i class="fa fa-angle-left"></i> Alışverişe devam et</router-link
      >
      <hr />
    </div>
    <div class="cart-detail">

      <div class="cart">
        <div class="cart-head">
          <div class="cart-count">Ürün (1 Ürün)</div>
          <button class="confirmBtn">Sepeti Onayla</button>
        </div>
        <div class="cart-body">
          <table>
            <thead>
              <th>Ürün</th>
              <th>Renk</th>
              <th>Beden</th>
              <th>Adet</th>
              <th>Fiyat</th>
              <th>Sil</th>
            </thead>
            <tr>
              <th class="product">
                <a href=""><img src="../assets/cart-detail/product1.jpg" /></a>

                <div class="column">
                  <a href="">
                    Beyaz Pamuklu Sweatshirt <br />
                    <span>Ürün Kodu: 123897</span>
                  </a>
                  <a class="fav" href="">
                    <i class="fas fa-heart"></i> Favorilere Ekle
                  </a>
                </div>
              </th>
              <th>Beyaz</th>
              <th>36/38</th>
              <th>
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Adet:
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item" href="#">1</a>
                    <a class="dropdown-item" href="#">2</a>
                    <a class="dropdown-item" href="#">3</a>
                    <a class="dropdown-item" href="#">4</a>
                    <a class="dropdown-item" href="#">5</a>
                    <a class="dropdown-item" href="#">6</a>
                    <a class="dropdown-item" href="#">7</a>
                    <a class="dropdown-item" href="#">8</a>
                    <a class="dropdown-item" href="#">9</a>
                    <a class="dropdown-item" href="#">10</a>
                  </div>
                </div>
              </th>
              <th>129.90</th>
              <th>
                <button class="trash">
                  <a href=""><i class="fa fa-trash" aria-hidden="true"></i></a>
                </button>
              </th>
            </tr>
            <tr>
              <th class="product">
                <a href=""
                  ><img src="../assets/cart-detail/product2.jpg" alt=""
                /></a>
                <div class="column">
                  <a href="">
                    Siyah Pamuklu Sweatshirt <br />
                    <span>Ürün Kodu: 897321</span>
                  </a>
                  <a class="fav" href="">
                    <i class="fas fa-heart"></i> Favorilere Ekle
                  </a>
                </div>
              </th>
              <th>Siyah</th>
              <th>36/38</th>
              <th>
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Adet:
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item" href="#">1</a>
                    <a class="dropdown-item" href="#">2</a>
                    <a class="dropdown-item" href="#">3</a>
                    <a class="dropdown-item" href="#">4</a>
                    <a class="dropdown-item" href="#">5</a>
                    <a class="dropdown-item" href="#">6</a>
                    <a class="dropdown-item" href="#">7</a>
                    <a class="dropdown-item" href="#">8</a>
                    <a class="dropdown-item" href="#">9</a>
                    <a class="dropdown-item" href="#">10</a>
                  </div>
                </div>
              </th>
              <th>129.90</th>
              <th>
                <button class="trash">
                  <a href=""><i class="fa fa-trash" aria-hidden="true"></i></a>
                </button>
              </th>
            </tr>
          </table>
        </div>
        <div id="freeShippingContent">

          <img
              src="../assets/cart-preview/boxTickIcon.png"
              id="boxTickIcon"
            />
                <div id="freeShippingContentTexts">
              <p id="freeShippingTitle">
                250,00 TL ve üzeri siparişlerde kargo ücretsiz!
              </p>
              <p id="freeShippingText">
                Sepetine 49,20 TL değerinde ürun eklemen durumunda ücretsiz
                kargo kampanyasından yararlanabilirsin.
              </p>
            </div>
            </div>
      </div>
      <div class="cart-boxes">
        <div class="cart-options">
          <div class="discount">
            <a
              data-toggle="collapse"
              href="#collapseDiscount"
              role="button"
              aria-expanded="false"
              aria-controls="collapseDiscount"
            >
              <i class="fa fa-percent" aria-hidden="true"></i> İndirim Kodununuz
              var mı ?
            </a>

            <div class="collapse" id="collapseDiscount">
              <div class="card card-body">
                <input type="text" name="" id="" />
                <button class="confirmBtn">Uygula</button>
              </div>
            </div>
          </div>
          <hr />
          <div class="order-notebox">
            <a
              data-toggle="collapse"
              href="#collapseNote"
              role="button"
              aria-expanded="false"
              aria-controls="collapseNote"
            >
              <i class="fa fa-gift" aria-hidden="true"></i> Siparişinize not
              eklemek ister misiniz ?
            </a>

            <div class="collapse" id="collapseNote">
              <div class="order-note card card-body">
                <label for="">Sipariş notunuzu yazın</label>
                <input type="text" name="" id="" />
              </div>
            </div>
          </div>
        </div>
        <div class="order-sum">
          <div class="sum-head">
            <a
              data-toggle="collapse"
              href="#collapseOrderSum"
              aria-expanded="false"
              aria-controls="collapseOrderSum"
            >
              Sipariş Özeti
            </a>
            <div class="collapse" id="collapseOrderSum">
              <div class="order card card-body">
                <p>
                  Ürün Tutarı: 260.00 TL<br />
                  Kargo Ücreti: 10.00TL
                </p>
              </div>
            </div>
          </div>
          <div class="sum-sum">Toplam Tutar <span>270 TL</span></div>
          <button class="confirmBtn">Sepeti Onayla</button>
        </div>
      </div>
    </div>
   <br>
   <br>
   <br>
    <cart-views />
  </div>
</template>

<script>
import CartViews from "../components/CartViews.vue";
import SiteNavbar from "../components/SiteNavbar.vue";
export default {
  name: "CartDetail",
  components: {
    SiteNavbar,
    CartViews,
  },
  mounted() {
    let bootstrapScript=document.createElement('script');
    bootstrapScript.setAttribute('src','https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js')
    document.head.appendChild(bootstrapScript);
   
  },
};
</script>

<style scoped>
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css");
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap");
* {
  font-family: "Quicksand", sans-serif;
}
a {
  text-decoration: none;
  color: rgb(97, 97, 97);
}
.other-products{

  width: 100%;
  margin:auto 0;
  padding-left: 50px;
  padding-right: 50px;
}
button {
  cursor: pointer;
}


.devam {
  margin-top: 65px;
  padding-left: 25px;
  color: black;
  font-size: 15px;
}
.cart {
  width: 75%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
.cart-head {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.confirmBtn {
  background-color: black;
  color: white;
  padding: 15px;
  width: 200px;
  border: none;
  border-radius: 10px;
}
.cart-body table {
  margin-top: 15px;
}
.cart-body table thead th {
  border-bottom: 1px solid #dfdfdf;
}
#freeShippingTitle {
  color: #638dc3;
  background-color: #fff;
}
#freeShippingText {
  color: #000;
  font-size: 14px;
  font-weight: bold;
}
#freeShippingContent {
  display: flex;
  flex-wrap: row;
  position: relative;
  text-align: left;
  margin-top: 15px;
}
#freeShippingContent img{
  width:50px;
  height:50px;
  margin-right: 10px;
}

.cart-body table th {
  color: rgb(97, 97, 97);
  width: 200px;
}
.cart-body table th:first-child {
  width: 500px;
}
.cart-body table th:hover {
  color: black;
}
.cart-body table th a:hover {
  color: #000;
}
.product {
  margin-top: 10px;
  display: flex;
  align-content: center;
  align-self: center;
  justify-self: center;
}
.product img {
  margin-right: 10px;
  width: 100px;
  height: 150px;
}
.product span {
  font-size: 10px;
}
.fav {
  margin-top: 30px;
  font-size: 14px;
}
.column {
  display: flex;
  flex-direction: column;
}
.cart-body th .trash {
  border: none;
  background-color: white;
  padding: 7px;
}
.cart-body th {
  padding-bottom: 15px;
  border-bottom: 1px solid #dfdfdf;
}
.dropdown button {
  cursor: pointer;
  background-color: #ececec;
  color: #8a8a8a;
  border: 1px solid #8a8a8a;
  border-radius: 15px;
}

.cart-boxes {
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
}
.cart-options div {
  /* border-bottom: 1px solid #dfdfdf; */
  padding: 10px;
}
.order-sum div {
  padding: 20px;
  border-bottom: 1px solid #dfdfdf;
}
.sum-sum {
  display: flex;
  flex-direction: row;
}
.sum-sum span {
  margin-left: 100px;
  font-weight: 700;
  color: rgb(150, 0, 0);
}
.order-sum button {
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
}
.card {
  display: flex;
  flex-direction: row;
}
.cart-options a:hover,
.order-sum a:hover {
  color: #000;
  text-decoration: none;
}
.collapse,
.discount,
.order-note {
  border: none;
  border-bottom: none;
}
.card .card-body {
  border: none;
}
.card .confirmBtn {
  padding: 7px 15px 7px 15px;
  font-size: 13px;
  margin-left: 5px;
  width: auto;
}
.order-note {
  display: flex;
  flex-direction: column;
  border: none;
}
.card label {
  color: rgb(15, 138, 4);
}
.order-note input {
  border: none;
  border-bottom: 2px solid rgb(15, 138, 4);
}
.collapse .order {
  border: none;
  padding: 0;
}
.order-sum .collapse {
  border: none;
}
</style>
