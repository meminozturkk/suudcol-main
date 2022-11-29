<template>
  <div class="suudwoman">
    <div class="woman-heading">
      <h4>#SUUDWOMAN</h4>
      <p>Oluşturacağın kombinlerde SUUD kadınlarından ilham al</p>
      <button class="btnWoman">Bizi Instagram'da takip et ></button>
    </div>
 <div class="pagination-womans">
        <button class="womanPrevBtn"><i class="fa fa-angle-left"></i></button>
        <button class="womanNextBtn"><i class="fa fa-angle-right"></i></button>
      </div>
    <div id="owl-woman" class="owl-carousel owl-theme">
      <div>
        <img
          src="https://farktorcdn.com/Library/Upl/5500181/Product/780x1170/busraakture1.png"
          alt=""
          srcset=""
        />

        <div class="woman-info">
          <div class="woman-name">@suhedaat <br /></div>
          <div class="woman-bag"><i class="fas fa-shopping-bag"></i></div>
        </div>
      </div>
      <div>
        <img
          src="https://farktorcdn.com/Library/Upl/5500181/Product/780x1170/bayildimmm.jpg"
          alt=""
          srcset=""
        />
        <div class="woman-info">
          <div class="woman-name">@bayildimm <br /></div>
          <div class="woman-bag"><i class="fas fa-shopping-bag"></i></div>
        </div>
      </div>
      <div>
        <img
          src="https://farktorcdn.com/Library/Upl/5500181/Product/780x1170/songulhh.jpg"
          alt=""
          srcset=""
        />
        <div class="woman-info">
          <div class="woman-name">@songülhh <br /></div>
          <div class="woman-bag"><i class="fas fa-shopping-bag"></i></div>
        </div>
      </div>
      <div>
        <img
          src="https://farktorcdn.com/Library/Upl/5500181/Product/780x1170/gizemsaritekin.png"
          alt=""
          srcset=""
        />
        <div class="woman-info">
          <div class="woman-name">@1beyzakaram <br /></div>
          <div class="woman-bag"><i class="fas fa-shopping-bag"></i></div>
        </div>
      </div>
      <div>
        <img
          src="https://farktorcdn.com/Library/Upl/5500181/Product/780x1170/esra.jpg"
          alt=""
          srcset=""
        />
        <div class="woman-info">
          <div class="woman-name">@rumeysayagciii<br /></div>
          <div class="woman-bag"><i class="fas fa-shopping-bag"></i></div>
        </div>
      </div>
      <div>
        <img
          src="https://farktorcdn.com/Library/Upl/5500181/Product/780x1170/asena-atalar.jpg"
          alt=""
          srcset=""
        />
        <div class="woman-info">
          <div class="woman-name">@gizemsaritekin<br /></div>
          <div class="woman-bag"><i class="fas fa-shopping-bag"></i></div>
        </div>
      </div>
            <div>
        <img
          src="https://farktorcdn.com/Library/Upl/5500181/Product/780x1170/aysenurcoskunn.png"
          alt=""
          srcset=""
        />
        <div class="woman-info">
          <div class="woman-name">@aysenurcoskun<br /></div>
          <div class="woman-bag"><i class="fas fa-shopping-bag"></i></div>
        </div>
      </div>
    </div>
    <button class="womankesfet btnWoman">Daha fazla keşfet ></button>
  </div>
</template>

<script>
export default {};
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
.pagination-womans {
  margin-left: 950px;
  margin-bottom: 10px;
}
.womanNextBtn,
.womanPrevBtn {
  border: none;
  border-radius: 50%;
  box-shadow: #ececec21 0 3px 6px;
  background-color: rgba(255, 255, 255, 0.877);
  text-align: right;
  padding: 15px;
  cursor: pointer;
  z-index: 3;
}
.womanPrevBtn:focus,
.womanNextBtn:focus {
  border: none;
  outline: none;
}
.womanNextBtn {
  position: relative;
  right: -600px;
  top: 250px;
}
.womanPrevBtn {
  position: relative;
  left: -930px;
  top: 250px;
}
.suudwoman{
    background:linear-gradient(180deg,#F3F3F3,#FFFFFF) ;
    padding:25px;
}
.woman-heading{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.woman-heading h4{
    font-weight: 900;
}
.btnWoman{
    background-color: transparent;
    border-radius: 30px;
    padding: 10px 15px;
    border:1px solid black;
    outline: none;
    cursor: pointer;
    text-align: center;
    margin: auto 0;
    align-self: center;
    margin-bottom: 25px;
    font-size: 12px;
}
.btnWoman:hover{
    background-color: black;
    color:white;
}
.womankesfet{
    margin-left: 780px;
    margin-top: 20px;
}
.woman-info {
  position: absolute;
  bottom: 1px;
  left: 0px;
  color: white;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding:15px;
}
.pagination-womans {
  margin-left: 950px;
  margin-bottom: 10px;
}


.woman-products {
  width: 100%;
  margin-right: 200px;
  margin-left: 50px;
}
.woman-products .pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.woman-name {
  font-size: 15px;
  /* justify-self: start; */
}
.woman-bag {
  font-weight: 800;
  font-size: 17px;
  /* justify-self: flex-end; */

  margin-left: 50px;
}
/* .owl-carousel div{
  width: 264px;
}
#owl-womans img {
  width: 100%;
} */
</style>
