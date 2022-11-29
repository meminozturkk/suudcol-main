<template>
  <div class="sidepanel" id="mySidepanel">
    <div id="sidepanelHeader">
      <h2>Sepet</h2>
      <p id="cartItemCount">2</p>
      <div id="exitSidepanel" @click="closeCart()">
        <img
          src="https://cdn-icons-png.flaticon.com/512/748/748122.png"
          id="closeSidepanel"
        />
        <p id="closeText">Kapat</p>
      </div>
    </div>
    <div id="sidepanelBody">
      <div id="emptyCartBody">
        <img
          src="https://cdn-icons-png.flaticon.com/512/102/102665.png"
          id="emprtCartBody-shoppingCartIcon"
        />

        <h4>Sepetiniz Boş</h4>
        <p>
          Sepetinde ürün var mı kontrol et, tükenmeden senin olsun! Ayrıca en
          yeni ürünlerimizi de keşfedebilirsin ;
        </p>
      </div>
      <div id="hasItemCartBody">
        <div class="product">
          <div id="productImageCartView">
            <img
              src="https://farktorcdn.com/Library/Upl/5500181/Product/780x1170/11111111-3.jpg"
            />
          </div>
          <div id="productInfosCartView">
            <p id="productTitleCartView">Topuklu Ayakkabı</p>
            <p id="productColorAndSizeCartView">Siyah 39</p>
            <p id="productCountCartView">1 Adet</p>
            <p id="productCostByPerCartView">149,90 TL</p>
            <i class="fa fa-trash" aria-hidden="true"></i>
          </div>

          <div id="productCostCartView">
            <p>149. 90 TL</p>
          </div>
        </div>
        <hr />

        <div class="product">
          <div id="productImageCartView">
            <img
              src="https://farktorcdn.com/Library/Upl/5500181/Product/780x1170/11111111-3.jpg"
            />
          </div>
          <div id="productInfosCartView">
            <p id="productTitleCartView">Topuklu Ayakkabı</p>
            <p id="productColorAndSizeCartView">Siyah 39</p>
            <p id="productCountCartView">1 Adet</p>
            <p id="productCostByPerCartView">50,90 TL</p>
            <i class="fa fa-trash" aria-hidden="true"></i>
          </div>

          <div id="productCostCartView">
            <p>50. 90 TL</p>
          </div>
        </div>

        <div id="sidepanelFooter">
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
          <div id="totalCost">
            <p id="withTaxesText">Vergiler Dahil</p>
            <p id="totalCostText">Ara Toplam 200.80 TL</p>
          </div>
          <div id="cartViewButtons">
            <router-link to="/cartDetail" id="aGoToCart"> Sepete Git </router-link>
            <a href="#" id="aGoToPaymentScreen"> Ödeme Sayfasına Git </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  name: "CartPreview",
  
  methods: {

    closeCart: function () {
      document.getElementById("mySidepanel").style.width = "0";
      document.getElementById("mySidepanel").style.display = "block";
      document.getElementById("mySidepanel").style.animation =
        "slideout 1s forwards";
      document.getElementById("mySidepanel").style.borderLeft = "none";
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap");
* {
  font-family: "Quicksand", sans-serif;
}
#openCart {
  padding: 10px;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 5px;
}
#hasItemCartBody hr {
  width: 100%;
  border: none;
  border-top: 1px solid rgb(211, 211, 211);
}
#closeSidepanel {
  display: block;
  position: relative;
  width: 20px;
  height: 20px;
  margin-left: auto;
  margin-right: 10px;
}
#exitSidepanel {
  display: block;
  position: relative;
  margin-top: auto;
  top: 0;
  margin-left: auto;
  margin-right: 10px;
  opacity: 0.7;
}
#exitSidepanel:hover {
  cursor: pointer;
}
#mySidepanel {
  display: none;
  position: fixed;
  z-index: 10000;
  width: 35%;
  height: 100%;
  top: 0;
  right: 0;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #fff;
  border-left-style: groove;
  border-left-color: #000;
  border-left-width: 3px;
}
#sidepanelHeader {
  display: flex;
  flex-direction: row;
  margin-top: 30px;
}
#exitSidepanel p {
  position: relative;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 20px;
}
#cartItemCount {
  margin-left: 5px;
 font-size: 15px;
  background-color: #333;
  color: #fff;
  height: 20px;
  width: 20px;
 
  border-radius: 50%;
  justify-content: center;
}
#mySidepanel h2 {
  position: relative;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 20px;
}
#emptyCartBody {
  display: none;
  width: 50%;
  height: auto;
  max-height: 100vh;
  position: relative;

  margin-top: 50%;
  margin-bottom: 50%;
  margin-left: auto;
  margin-right: auto;
}
#emprtCartBody-shoppingCartIcon {
  position: relative;
  width: 20px;
  height: 20px;
  margin-left: 50%;
  margin-right: 50%;
}
#emptyCartBody h4 {
  padding-bottom: 15px;
  text-align: center;
  position: relative;
  display: block;
}
#emptyCartBody p {
  text-align: center;
  position: relative;
  display: block;
  font-size: 14px;
}
#sidepanelFooter {
  width: 90%;
  position: absolute;
  bottom: 2px;
}
#freeShippingContent {
  display: flex;
  flex-wrap: row;
  position: relative;
  text-align: left;
}
#boxTickIcon {
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 20px;
  height: 40px !important;
  width: 40px !important;
}
#freeShippingText {
  color: #000;
  font-size: 14px;
  font-weight: bold;
}
#freeShippingTitle {
  color: #638dc3;
  background-color: #fff;
}
#totalCost {
  position: relative;
  display: flex;
  flex-direction: row;
  width: auto;
}
#withTaxesText {
  color: #666;
  font-size: 12px;
  font-weight: bold;
  margin-left: 0px;
  padding-left: 0px;
}
#totalCostText {
  text-align: right;
  position: relative;
  display: block;
  color: #666;
  font-size: 12px;
  font-weight: bold;
  margin-top: auto;
  top: 0;
  margin-left: auto;
}
#cartViewButtons {
  display: flex;
  flex-wrap: row;
  text-align: center;
}
#cartViewButtons a {
  padding-top: 5px;
  text-align: center;
  align-self: center;
}
#aGoToCart {
  text-decoration: none;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  color: #000;
  width: 50%;
  border-radius: 30px;
  border-style: solid;
  border-width: 1px;
  border-color: #000;
  height: 30px;
  margin-bottom: 10px;
}
#aGoToPaymentScreen {
  background-color: #333;
  text-decoration: none;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  width: 50%;
  border-radius: 30px;
  border-style: solid;
  border-width: 1px;
  border-color: #fff;
  height: 30px;
  margin-bottom: 10px;
}
#hasItemCartBody {
  display: flex;
  flex-direction: column;
  width: 90%;
  height: auto;
  margin-right: 5%;
  margin-left: 5%;
}
.product {
  margin-top: 7px;
  display: flex;
}
#productInfosCartView p {
  padding-left: 10px;
  font-size: 16px;
  color: #333;
  text-align: top;
  top: 0;
  margin-top: auto;
  margin-bottom: auto;
}
#hasItemCartBody img {
  width: 80px;
  height: 120px;
  margin-top: auto;
}
#productCostCartView {
  position: relative;
  display: block;
  flex-direction: row;
  width: 90%;
}
#productCostCartView p {
  color: #333;
  display: block;
  position: relative;
  text-align: right;
  font-size: 24px;
  font-weight: bold;
  margin-top: 0;
  margin-left: auto;
}
.fa-trash {
  margin-top: 5px;
  margin-left: 15px;
}
@keyframes slidein {
  from {
    width: 0;
  }
  to {
    width: 35%;
  }
}

@keyframes slideout {
  from {
    width: 35%;
  }
  to {
    width: 0;
  }
}
</style>
