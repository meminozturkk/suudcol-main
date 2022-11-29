<template>
  <div class="other-products">
      <h5>SON GÖRÜNTÜLENENLER</h5>
         <div class="pagination-others">
    <button class="lastPrevBtn"><i class="fa fa-angle-left"></i></button>
    <button class="lastNextBtn"><i class="fa fa-angle-right"></i></button> 
    </div>
    <div id="owl-lastviews" class="owl-carousel owl-theme">
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
  name: "LastViews",
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
.pagination-others{
 margin-left: 950px;
 margin-bottom:10px;
}
.lastNextBtn,
.lastPrevBtn {
  border: none;
  border-radius: 50%;
  box-shadow: #00000021 0 3px 6px;
  background-color: transparent;
  text-align: right;
  padding:10px;
  cursor: pointer;
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
/* .owl-carousel div{
  width: 264px;
}
#owl-others img {
  width: 100%;
} */

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
