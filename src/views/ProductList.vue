<template>
<div>
  <div class="">
    <site-navbar />

    <h5 class="list-title">EN YENİLER</h5>
    <div class="dropdown-filter">
      <button class="dropbtn">
        <i class="fas fa-sliders-h"></i> Filtrele ve Sırala
      </button>
      <div class="dropdown-content">
        <div class="filter">
          <div class="filter-mobile-head" style="top: 30px">
            <span class="CloseFilter ifa-118"></span>

            <div
              class="ClearFilter"
              cd="[[removeAllFilter]]"
              style="display: none"
            >
              Temizle
            </div>
          </div>
          <div class="filter-menu">
            <div class="mobile-detail-wrapper">
              <div class="detail" data-id="Sorter" title="Sırala">
                <div class="detail-header">Sırala</div>
                <div class="detail-items">
                  <div class="item-col" filterbox="Sorter">
                    <div>
                      <input
                        type="radio"
                        value="0"
                        name="sorterFilter"
                        id="sorter0"
                      />
                      <label class="features" for="sorter0"
                        ><span>Yeni Eklenen</span></label
                      >
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="1"
                        name="sorterFilter"
                        id="sorter1"
                      />
                      <label class="features" for="sorter1"
                        ><span>Fiyat Artan</span></label
                      >
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="2"
                        name="sorterFilter"
                        id="sorter2"
                      />
                      <label class="features" for="sorter2"
                        ><span>Fiyat Azalan</span></label
                      >
                    </div>
                    <div style="display: none">
                      <input
                        type="radio"
                        value="4"
                        name="sorterFilter"
                        id="sorter4"
                      />
                      <label class="features" for="sorter4"
                        ><span>En Çok Satanlar</span></label
                      >
                    </div>
                    <span>
                      <input
                        type="radio"
                        value="3"
                        name="sorterFilter"
                        id="sorter3"
                      />
                      <label class="features" for="sorter3"
                        ><span>Önerilen</span></label
                      >
                    </span>
                  </div>
                </div>
              </div>
              <div class="detail" data-id="Navs" title="Ürün Grubu">
                <div class="detail-header" sb="0">
                  ÜRÜN GRUBU
                  <div class="mobile-add-selected"></div>
                </div>
                <div class="detail-items">
                  <div class="item-col" filter="1" filterbox="#">
                    <div>
                      <a class="features" sb="6" href="/suud-colors"
                        >Colors Koleksiyonu</a
                      >
                    </div>
                    <div>
                      <a class="features" sb="6" href="/days-koleksiyonu"
                        >Days Koleksiyonu</a
                      >
                    </div>
                    <div>
                      <a class="features" sb="6" href="/clubs-koleksiyonu"
                        >Clubs Koleksiyonu</a
                      >
                    </div>
                    <div>
                      <a class="features" sb="6" href="/suud-beji"
                        >Bej Koleksiyonu</a
                      >
                    </div>
                    <div>
                      <a class="features" sb="6" href="/ofis-gorunumleri"
                        >Ofis Koleksiyonu</a
                      >
                    </div>
                    <div>
                      <a class="features" sb="6" href="/kampuse-donus"
                        >Kampüs Koleksiyonu</a
                      >
                    </div>
                    <div>
                      <a class="features" sb="6" href="/monokrom"
                        >Monokrom Koleksiyonu</a
                      >
                    </div>
                    <div>
                      <a class="features" sb="6" href="/hediye-rehberi"
                        >Hediye Rehberi</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="detail" data-id="cl3" style="" title="Alt ürün grubu">
                <div class="detail-header" sb="0">
                  Alt ürün grubu
                  <div class="mobile-add-selected"></div>
                </div>
                <div class="detail-items">
                  <div class="item-col" filter="1" filterbox="cl3">
                    <div filtid="cl3_1052">
                      <input
                        type="checkbox"
                        class="hidden FilterItem"
                        onclick='filterQUERY(this,"cl3")'
                        data-id="cl3"
                        id="cl3_1052"
                        value="1052"
                      />
                      <label class="features" sb="1" for="cl3_1052"
                        ><span>Mont &amp; Kaban</span>
                      </label>
                    </div>
                    <div filtid="cl3_1016">
                      <input
                        type="checkbox"
                        class="hidden FilterItem"
                        onclick='filterQUERY(this,"cl3")'
                        data-id="cl3"
                        id="cl3_1016"
                        value="1016"
                      />
                      <label class="features" sb="1" for="cl3_1016"
                        ><span>Kemer</span></label
                      >
                    </div>
                    <div filtid="cl3_1051">
                      <input
                        type="checkbox"
                        class="hidden FilterItem"
                        onclick='filterQUERY(this,"cl3")'
                        data-id="cl3"
                        id="cl3_1051"
                        value="1051"
                      />
                      <label class="features" sb="1" for="cl3_1051"
                        ><span>Pantolon</span></label
                      >
                    </div>
                    <div filtid="cl3_1013">
                      <input
                        type="checkbox"
                        class="hidden FilterItem"
                        onclick='filterQUERY(this,"cl3")'
                        data-id="cl3"
                        id="cl3_1013"
                        value="1013"
                      />
                      <label class="features" sb="1" for="cl3_1013"
                        ><span>Çanta</span></label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="detail"
                data-id="cl5"
                style="display: none"
                title="Cinsiyet"
              >
                <div class="detail-header" sb="0">
                  Cinsiyet
                  <div class="mobile-add-selected"></div>
                </div>
                <div class="detail-items">
                  <div class="item-col" filter="1" filterbox="cl5">
                    <span filtid="cl5_1000"
                      ><input
                        type="checkbox"
                        class="hidden FilterItem"
                        onclick='filterQUERY(this,"cl5")'
                        data-id="cl5"
                        id="cl5_1000"
                        value="1000"
                      /><label class="features" sb="1" for="cl5_1000"
                        ><span>Kadın</span></label
                      ></span
                    >
                  </div>
                </div>
              </div>
              <div class="detail Show" data-id="Color" title="Renk">
                <div class="detail-header" sb="0">
                  Renk
                  <div class="mobile-add-selected"></div>
                </div>
                <div class="detail-items">
                  <div class="item-col" filter="1" filterbox="Colors">
                    <div filtid="colors_664">
                      <input
                        type="checkbox"
                        class="hidden FilterItem"
                        onclick='filterQUERY(this,"color")'
                        data-id="Color"
                        id="colors_664"
                        value="664"
                      />
                      <label
                        class="features"
                        sb="1"
                        color-code="#000000"
                        style="--colorCode: #000000"
                        for="colors_664"
                        ><span>Siyah</span></label
                      >
                    </div>
                    <div filtid="colors_653">
                      <input
                        type="checkbox"
                        class="hidden FilterItem"
                        onclick='filterQUERY(this,"color")'
                        data-id="Color"
                        id="colors_653"
                        value="653"
                      />
                      <label
                        class="features"
                        sb="1"
                        color-code="#00008c"
                        style="--colorCode: #00008c"
                        for="colors_653"
                        ><span>Lacivert</span></label
                      >
                    </div>
                    <div filtid="colors_647">
                      <input
                        type="checkbox"
                        class="hidden FilterItem"
                        onclick='filterQUERY(this,"color")'
                        data-id="Color"
                        id="colors_647"
                        value="647"
                      />
                      <label
                        class="features"
                        sb="1"
                        color-code="rgb(26, 73, 9)"
                        style="--colorCode: rgb(26, 73, 9)"
                        for="colors_647"
                        ><span>Haki</span></label
                      >
                    </div>
                    <div filtid="colors_640">
                      <input
                        type="checkbox"
                        class="hidden FilterItem"
                        onclick='filterQUERY(this,"color")'
                        data-id="Color"
                        id="colors_640"
                        value="640"
                      />
                      <label
                        class="features"
                        sb="1"
                        color-code="#b87333"
                        style="--colorCode: #b87333"
                        for="colors_640"
                        ><span>Camel</span></label
                      >
                    </div>
                    <div filtid="colors_641">
                      <input
                        type="checkbox"
                        class="hidden FilterItem"
                        onclick='filterQUERY(this,"color")'
                        data-id="Color"
                        id="colors_641"
                        value="641"
                      />
                      <label
                        class="features"
                        sb="1"
                        color-code="#f0f5c9"
                        style="--colorCode: #f0f5c9"
                        for="colors_641"
                        ><span>Ekru</span></label
                      >
                    </div>
                    <div filtid="colors_637">
                      <input
                        type="checkbox"
                        class="hidden FilterItem"
                        onclick='filterQUERY(this,"color")'
                        data-id="Color"
                        id="colors_637"
                        value="637"
                      />
                      <label
                        class="features"
                        sb="1"
                        color-code="#f7f7d7"
                        style="--colorCode: #f7f7d7"
                        for="colors_637"
                        ><span>Bej</span></label
                      >
                    </div>
                    <div filtid="colors_642">
                      <input
                        type="checkbox"
                        class="hidden FilterItem"
                        onclick='filterQUERY(this,"color")'
                        data-id="Color"
                        id="colors_642"
                        value="642"
                      />
                      <label
                        class="features"
                        sb="1"
                        color-code="#6f7f8f"
                        style="--colorCode: #6f7f8f"
                        for="colors_642"
                        ><span>Füme</span></label
                      >
                    </div>

                    <div filtid="colors_652">
                      <input
                        type="checkbox"
                        class="hidden FilterItem"
                        onclick='filterQUERY(this,"color")'
                        data-id="Color"
                        id="colors_652"
                        value="652"
                      />
                      <label
                        class="features"
                        sb="1"
                        color-code="#ededd3"
                        style="--colorCode: #ededd3"
                        for="colors_652"
                        ><span>Krem</span></label
                      >
                    </div>
                    <div filtid="colors_669">
                      <input
                        type="checkbox"
                        class="hidden FilterItem"
                        onclick='filterQUERY(this,"color")'
                        data-id="Color"
                        id="colors_669"
                        value="669"
                      />
                      <label
                        class="features"
                        sb="1"
                        color-code="#b89c9c"
                        style="--colorCode: #b89c9c"
                        for="colors_669"
                        ><span>Vizon</span></label
                      >
                    </div>
                    <div filtid="colors_644">
                      <input
                        type="checkbox"
                        class="hidden FilterItem"
                        onclick='filterQUERY(this,"color")'
                        data-id="Color"
                        id="colors_644"
                        value="644"
                      />
                      <label
                        class="features"
                        sb="1"
                        color-code="#bfbfbf"
                        style="--colorCode: #bfbfbf"
                        for="colors_644"
                        ><span>Gri Melanj</span></label
                      >
                    </div>
                    <span filtid="colors_---"
                      ><input
                        type="checkbox"
                        class="hidden FilterItem"
                        onclick='filterQUERY(this,"color")'
                        data-id="Color"
                        id="colors_---"
                        value="---"
                      />
                      <label
                        class="features"
                        sb="1"
                        color-code="###"
                        style="--colorCode: ###"
                        for="colors_---"
                        ><span>Standart</span></label
                      ></span
                    >
                  </div>
                </div>
              </div>
              <div class="detail" data-id="Size" title="Beden">
                <div class="detail-header" sb="0">
                  Beden
                  <div class="mobile-add-selected"></div>
                </div>
                <div class="detail-items">
                  <span class="item-col" filter="1" filterbox="Sizes">
                    <div filtid="sizes_S/M 36/38">
                      <input
                        type="checkbox"
                        class="hidden FilterItem"
                        onclick='filterQUERY(this,"sizes")'
                        data-id="Size"
                        id="sizes_S/M 36/38"
                        value="S/M 36/38"
                      />
                      <label class="features" sb="1" for="sizes_S/M 36/38"
                        ><span>S/M 36/38</span>
                      </label>
                    </div>
                    <div filtid="sizes_L/XL 40/42">
                      <input
                        type="checkbox"
                        class="hidden FilterItem"
                        onclick='filterQUERY(this,"sizes")'
                        data-id="Size"
                        id="sizes_L/XL 40/42"
                        value="L/XL 40/42"
                      />
                      <label class="features" sb="1" for="sizes_L/XL 40/42"
                        ><span>L/XL 40/42</span>
                      </label>
                    </div>
                    <div filtid="sizes_42">
                      <input
                        type="checkbox"
                        class="hidden FilterItem"
                        onclick='filterQUERY(this,"sizes")'
                        data-id="Size"
                        id="sizes_42"
                        value="42"
                      />
                      <label class="features" sb="1" for="sizes_42"
                        ><span>42</span>
                      </label>
                    </div>
                    <div filtid="sizes_40">
                      <input
                        type="checkbox"
                        class="hidden FilterItem"
                        onclick='filterQUERY(this,"sizes")'
                        data-id="Size"
                        id="sizes_40"
                        value="40"
                      />
                      <label class="features" sb="1" for="sizes_40"
                        ><span>40</span>
                      </label>
                    </div>
                    <div filtid="sizes_38">
                      <input
                        type="checkbox"
                        class="hidden FilterItem"
                        onclick='filterQUERY(this,"sizes")'
                        data-id="Size"
                        id="sizes_38"
                        value="38"
                      />
                      <label class="features" sb="1" for="sizes_38"
                        ><span>38</span>
                      </label>
                    </div>
                    <div filtid="sizes_36">
                      <input
                        type="checkbox"
                        class="hidden FilterItem"
                        onclick='filterQUERY(this,"sizes")'
                        data-id="Size"
                        id="sizes_36"
                        value="36"
                      />
                      <label class="features" sb="1" for="sizes_36"
                        ><span>36</span>
                      </label>
                    </div>
                    <div filtid="sizes_Standart">
                      <input
                        type="checkbox"
                        class="hidden FilterItem"
                        onclick='filterQUERY(this,"sizes")'
                        data-id="Size"
                        id="sizes_Standart"
                        value="Standart"
                      />
                      <label class="features" sb="1" for="sizes_Standart"
                        ><span>Standart</span>
                      </label>
                    </div>
                  </span>
                </div>
              </div>
              <div class="detail" data-id="Prices" title="Fiyat">
                <div class="detail-header">
                  Fiyat
                  <div class="mobile-add-selected"></div>
                </div>
                <div class="detail-items">
                  <span class="item-col AutoHeight" filterbox="Prices">
                    <div filtid="prices_20_50">
                      <input
                        type="radio"
                        class="hidden FilterItem"
                        name="FiltPrice"
                        onclick="filterQUERY(this,'price')"
                        data-id="Prices"
                        id="prices_0_50"
                        value="prices_0_50"
                      />
                      <label class="features" for="prices_0_50">
                        <span
                          ><span cd="[[FilterPriceCurr]]" p="0"
                            >0,00 <span>TL</span></span
                          >
                          -
                          <span cd="[[FilterPriceCurr2]]" p="50"
                            >50,00 <span>TL</span></span
                          >
                          Arası</span
                        >
                      </label>
                    </div>
                    <div filtid="prices_50_100">
                      <input
                        type="radio"
                        class="hidden FilterItem"
                        name="FiltPrice"
                        onclick="filterQUERY(this,'price')"
                        data-id="Prices"
                        id="prices_50_100"
                        value="prices_50_100"
                      />
                      <label class="features" for="prices_50_100">
                        <span
                          ><span cd="[[FilterPriceCurr]]" p="50"
                            >50,00 <span>TL</span></span
                          >
                          -
                          <span cd="[[FilterPriceCurr2]]" p="100"
                            >100,00 <span>TL</span></span
                          >
                          Arası</span
                        >
                      </label>
                    </div>
                    <div filtid="prices_100_150">
                      <input
                        type="radio"
                        class="hidden FilterItem"
                        name="FiltPrice"
                        onclick="filterQUERY(this,'price')"
                        data-id="Prices"
                        id="prices_100_150"
                        value="prices_100_150"
                      />
                      <label class="features" for="prices_100_150">
                        <span
                          ><span cd="[[FilterPriceCurr]]" p="100"
                            >100,00 <span>TL</span></span
                          >
                          -
                          <span cd="[[FilterPriceCurr2]]" p="150"
                            >150,00 <span>TL</span></span
                          >
                          Arası</span
                        >
                      </label>
                    </div>
                    <div filtid="prices_150_250">
                      <input
                        type="radio"
                        class="hidden FilterItem"
                        name="FiltPrice"
                        onclick="filterQUERY(this,'price')"
                        data-id="Prices"
                        id="prices_150_250"
                        value="prices_150_250"
                      />
                      <label class="features" for="prices_150_250">
                        <span
                          ><span cd="[[FilterPriceCurr]]" p="150"
                            >150,00 <span>TL</span></span
                          >
                          -
                          <span cd="[[FilterPriceCurr2]]" p="250"
                            >250,00 <span>TL</span></span
                          >
                          Arası</span
                        >
                      </label>
                    </div>
                    <div filtid="prices_250_99999">
                      <input
                        type="radio"
                        class="hidden FilterItem"
                        name="FiltPrice"
                        onclick="filterQUERY(this,'price')"
                        data-id="Prices"
                        id="prices_250_99999"
                        value="prices_250_99999"
                      />
                      <label class="features" for="prices_250_99999">
                        <span
                          ><span cd="[[FilterPriceCurr2]]" p="250"
                            >250,00 <span>TL</span></span
                          >
                          ve Üzeri</span
                        >
                      </label>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <div class="filter-bottom">
              <div class="column">
                <div
                  class="desktop-header-text"
                  cd="[[removeAllFilter]]"
                  style="display: none"
                >
                  Filtreleri Temizle
                </div>
              </div>
              <div class="column">
                <div class="detail FilterHistory" style="display: none">
                  <div class="detail-items">
                    <div class="item-col"></div>
                  </div>
                </div>
                <div class="FilterConfirm">FİLTRELERİ GÖSTER</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="products" >
        <ul class="ul-products">
        <li class="li-products" v-for="item in $store.state.products" :key="item.id">
          <router-link to="/productDetail">
          <img
            class="product-image"
            :src="item.url"
            alt=""
          />
        </router-link>
         <span class="p-products-colors"> {{item.firstName}} </span>
         <span class="p-products-name"> {{item.productName}} </span>
         <span class="p-products-price"> {{item.originalPrice}} </span>
         <span class="p-products-discount-info"> {{item.discountInfo}} </span>
        </li>
        </ul>
    </div>
  </div>
  <site-footer/>
  </div>
</template>

<script>
import SiteNavbar from "../components/SiteNavbar.vue";
import SiteFooter from "../components/SiteFooter.vue";
export default {
  name: "ProductList",
  components: {
    SiteNavbar,
    SiteFooter,
  },
  methods: {
    clickedBeden: function () {
      const divs = document.querySelectorAll("LI");
      Array.from(divs).forEach((div) => {
        div.addEventListener("click", changeColor);
      });
      function changeColor() {
        this.style.background = "black";
        this.style.color = "white";
      }
    },
  },
    mounted() {
    this.$store.getters.getbrbr;
    let faiconScript = document.createElement("script");
    faiconScript.setAttribute(
      "src",
      "https://kit.fontawesome.com/bef04441f7.js"
    );
    document.head.appendChild(faiconScript);
    let bootstrapScript = document.createElement("script");
    bootstrapScript.setAttribute(
      "src",
      "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
    );
    document.head.appendChild(bootstrapScript);
    let faScript = document.createElement("script");
    faScript.setAttribute("src", "https://kit.fontawesome.com/bef04441f7.js");
  },
};
</script>

<style scoped>
/* @import url('https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css'); */
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap");
* {
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}
body {
  scroll-behavior: smooth;
}
.products{
  position: relative;
  max-width: 400px;
  flex-wrap: nowrap;
  text-align: left;
}
.products ul{
  display: flex;
  flex-direction: row;
  text-align: left;
}
.products li{
  display: inline;
  list-style: none;
  text-align: left;
  margin-left: 10px;
  margin-right:10px;
}
.products img{
  position: relative;
  max-width: 348px;
}
.products span{
  display: inherit;
  position:relative;
  text-align: left;
}
.container {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
}
.list-title {
  margin: 0 auto;
  font-size: 0.8rem;
  font-weight: 700;
  margin-top: 70px;
  text-align: center;
}
/* Dropdown Button */
.dropbtn {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  padding: 5px;
  font-size: 16px;
  border: black 1px solid;
  border-radius: 50px;
  width: 180px;
  margin-left: 50px;
}

/* The container <div> - needed to position the dropdown content */
.dropdown-filter {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  margin: 0 auto;

  display: none;
  position: absolute;
  background-color: #ffffff;
  min-width: 100vw;
  width: 100vw;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 30px;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown-filter:hover .dropdown-content {
  display: block;
  width: 100%;
}
.dropdown-filter:hover .dropbtn {
  content: "aa";
}

.column .product-image {
  width: 100%;
  height: 642px;
}
/* Create four equal columns that floats next to each other */
.column {
  background-size: cover;
  background-repeat: no-repeat;
  margin: 10px;
  /* margin-bottom: 30px; */
  width: 400px;
}
.row {
  margin-left: 30px;
  margin-right: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 750px;
  max-width: 400px;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
.bedenler {
  list-style-type: none;
  display: flex;
  margin-left: 20%;
  margin-bottom: 0;
}
.column > .beden-sec {
  background-color: rgba(255, 255, 255, 0.712);
  width: 100%;
  margin: 0;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  /* backface-visibility: hidden;  */
  transition: all .2s;

  visibility: hidden;
}
.column:hover .beden-sec {
visibility: visible;
  width: 100%;
  margin: 0;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  top: 0;
    transform: translateY(-95px) !important;
  /* backface-visibility: hidden;  */
}
.bedenler li {
  margin: 5px;
  padding: 5px;
  cursor: pointer;
}
.bedenler li:hover {
  border: 1px solid rgb(109, 109, 109);
  border-radius: 5px;
}
.beden-sec-btn {
  margin-bottom: 5px;
  margin-left: 25%;
  background-color: white;
  color: black;
  border-radius: 50px;
  width: 200px;
  padding: 10px;
  border: none;
  cursor: pointer;
}
.bedenler li:focus {
  background: black;
  color: white;
}
.product-info {
  transform: translateY(-100px);
}
.product-info h5 {
  margin: 0;
  margin-top: 10px;
}
.product-name {
  font-weight: 400;
}
.product-price {
  font-weight: 700;
}
.product-fav {
  float: right;
}

.mobile-detail-wrapper {
  display: flex;
  padding-top: 20px;
}
.detail {
  text-align: left;
  margin-bottom: 25px;
  position: relative;
  flex: 1;
  padding-right: 50px;
  max-width: 340px;
}
.detail .detail-header {
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1px;
  text-align: left;
  margin-bottom: 17px;
  font-weight: 400;
  position: relative;
}
.detail .detail-items {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex !important;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  flex-direction: column;
  position: relative;
}

.filter {
  width: 100%;
  opacity: 1;
  visibility: visible;
  flex: none;

  /* position: absolute; */
  right: 0;
  top: 0;
  background-color: #fff;
  padding: 0 0 35px;
  z-index: 54;
  transition: 0.3s;
  width: 100%;
  overflow-y: auto;
  box-shadow: 0 20px 11px -24px #797979;
}
.filter .filter-menu {
  width: 100%;
  margin: 0 auto;
}
.detail .detail-items .item-col[filterbox="Colors"] .features > span::after {
  content: "";
  background-color: var(--colorCode);
  width: 17px;
  height: 3px;
  display: inline-block;
  border-radius: 60px;
  border: 1px solid #eee;
  margin-left: 8px;
  position: relative;
  top: -2px;
}
.filter a {
  color: black;
  text-decoration: none;
}

[type="radio"]:checked,
[type="radio"]:not(:checked) {
  position: absolute;
  left: -9999px;
}
[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label {
  position: relative;
  padding-left: 28px;
  cursor: pointer;
  line-height: 20px;
  display: inline-block;
  color: #666;
}
[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 18px;
  height: 18px;
  border: 1px solid #ddd;
  border-radius: 100%;
  background: #fff;
}
[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
  content: "✓";
  width: 18px;
  height: 18px;
  text-align: center;
  color: white;
  background: black;
  position: absolute;
  top: 2px;
  left: 2px;
  border-radius: 100%;
}
[type="radio"]:not(:checked) + label:after {
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
}
[type="radio"]:checked + label:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}

[type="checkbox"]:checked,
[type="checkbox"]:not(:checked) {
  position: absolute;
  left: -9999px;
}
[type="checkbox"]:checked + label,
[type="checkbox"]:not(:checked) + label {
  position: relative;
  padding-left: 28px;
  cursor: pointer;
  line-height: 20px;
  display: inline-block;
  color: #666;
}
[type="checkbox"]:checked + label:before,
[type="checkbox"]:not(:checked) + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 18px;
  height: 18px;
  border: 1px solid #ddd;
  border-radius: 100%;
  background: #fff;
}
[type="checkbox"]:checked + label:after,
[type="checkbox"]:not(:checked) + label:after {
  content: "✓";
  width: 18px;
  height: 18px;
  text-align: center;
  color: white;
  background: black;
  position: absolute;
  top: 2px;
  left: 2px;
  border-radius: 100%;
}
[type="checkbox"]:not(:checked) + label:after {
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
}
[type="checkbox"]:checked + label:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}
.filter .filter-menu > .filter-bottom {
  text-align: right;
  display: flex;

  justify-content: flex-end;
}
.filter .filter-menu > .filter-bottom > .column {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;
}
.filter .filter-menu > .filter-bottom > .column {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;
}
.filter .filter-menu > .filter-bottom > .column > .FilterConfirm {
  flex: none;
  border: none;
  border-radius: 5px;
  padding: 10px 23px;
  font-size: 16px;
  background-color: #000;
  color: #fff;
  text-align: center;
  font-weight: 300;
  cursor: pointer;
  position: relative;
  float: right !important;
}
</style>
