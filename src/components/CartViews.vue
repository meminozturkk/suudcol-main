<template>
  <div class="other-products">
      <h5>SON GÖRÜNTÜLENENLER</h5>
   <div class="pagination-lasts">
        <button class="cartPrevBtn"><i class="fa fa-angle-left"></i></button>
        <button class="cartNextBtn"><i class="fa fa-angle-right"></i></button>
      </div>
    <div id="owl-cartviews" class="owl-carousel owl-theme">
      <div>
        <img src="../assets/other-products/ekstra1.jpg" alt="" srcset="" />
        <span class="product-name">Tişört</span> <br />
        <span class="product-price">30,90 TL</span>
      </div>
      <div>
        <img src="../assets/other-products/ekstra2.jpg" alt="" srcset="" />
        <span class="product-name">Çanta</span> <br />
        <span class="product-price">69,90 TL</span>
      </div>
      <div>
        <img src="../assets/other-products/ekstra3.jpg" alt="" srcset="" />
        <span class="product-name">Pantolon</span> <br />
        <span class="product-price">100,00 TL</span>
      </div>
      <div>
        <img src="../assets/other-products/ekstra4.jpg" alt="" srcset="" />
        <span class="product-name">Ayakkabı</span> <br />
        <span class="product-price">80,90 TL</span>
      </div>
      <div>
        <img src="../assets/other-products/ekstra1.jpg" alt="" srcset="" />
        <span class="product-name">Tişört</span> <br />
        <span class="product-price">30,90 TL</span>
      </div>
    </div>
  <hr class="hr">
  </div>
</template>

<script>
export default {
  name: "CartViews",
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


.cartNextBtn,
.cartPrevBtn {
  border: none;
  border-radius: 50%;
  box-shadow: #ececec21 0 3px 6px;
  background-color: rgba(255, 255, 255, 0.733);
  text-align: right;
  padding: 15px;
  cursor: pointer;
  z-index: 3;
}
.cartPrevBtn:focus,
.cartNextBtn:focus {
  border: none;
  outline: none;
}
.cartNextBtn {
  position: relative;
  right: -1500px;
  top: 250px;
}
.cartPrevBtn {
  position: relative;
  left: 30px;
  top: 250px;
}
.other-products{
  width: 60%;
  margin-right: 200px;
  margin-left: 50px;
}
.other-products .pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.other-products .product-name {
  font-size: 15px;
}
.other-products .product-price {
  font-weight: 800;
  font-size: 17px;
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
