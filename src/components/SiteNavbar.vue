<template>
  <div id="body">
    <div id="normalBody">
      <div id="navBar">
        <router-link to="/"> <img id="suudTitle" src="../assets/suudlogo.svg" /></router-link>
        
        <ul id="navBarButtonsUL">
          <li>
            <router-link to="/productList">ÇOK SATANLAR</router-link>
          </li>
          <li>
            <router-link to="/productList">EN YENİLER</router-link>
          </li>
          <li>
            <router-link to="/productList">GİYİM</router-link>
          </li>
          <li>
            <router-link to="/productList">Çanta</router-link>
          </li>
          <li>
            <router-link to="/productList">Aksesuar</router-link>
          </li>
          <li id="indirimLi">
            <router-link to="/productList">KASIM İNDİRİMİ</router-link>
          </li>
        </ul>
        <button @click="onClickBtn()">
          <span id="searchIcon">
            <img src="https://img.icons8.com/search" />
          </span>
          <!-- <span> Ürün veya koleksiyon ara </span> -->
        </button>
        <div id="navBarRightButtons">
          <ul id="navMenu">
            <li id="flag-icon">
              <a>
                <img
                  src="https://farktorcdn.com/Library/Upl/Icon/flag-icon/tr.svg"
                />
              </a>
            </li>

            <li id="flag">
              <a>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/175/175461.png"
                />
              </a>
            </li>

            <li id="flag">
              <a id="registerBtn" @click="openRegister()">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/456/456283.png"
                />
              </a>
            </li>

            <li id="flag">
              <a>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
                />
              </a>
            </li>

            <li id="flag">
              <a @click="openCart()">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/102/102665.png"
                />
              </a>
              <p>(0)</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="searchModeBody" style="display: none">
      <p></p>
      

      <form style="background-color: white" id="formSearch">
        <div id="searchDiv">
          <button type="button">
            <span>
              <img
                src="https://img.icons8.com/search"
                style="width: 20px; height: auto"
              />
            </span>
          </button>
          <input
            id="inputSearch"
            placeholder="Arama"
          />
          <div id="searchModeExitButton">
        <img
          src="https://cdn-icons-png.flaticon.com/512/748/748122.png"
          @click="onClickBtn()"
        />
      </div>
        </div>
      </form>
    </div>

    <cart-preview />
    <register />

    <router-view />
  </div>
</template>

<script>
import CartPreview from "../components/CartPreview.vue";
import Register from "../components/Register.vue";
export default {
  name: "SiteNavbar",
  components: {
    CartPreview,
    Register,
  },
  methods: {
    onClickBtn: function () {
      if (this.mode == true) {
        this.mode = false;
        document.getElementById("normalBody").style.display = "none";
        document.getElementById("body").style.color = "#fff";
        var element = document.getElementById("searchModeBody");
        element.style.display = "block";
      } else {
        this.mode = true;
        document.getElementById("searchModeBody").style.display = "none";
        document.getElementById("normalBody").style.display = "block";
      }
    },
    openCart: function () {
      document.getElementById("mySidepanel").style.width = "35%";
      document.getElementById("mySidepanel").style.display = "block";
      document.getElementById("mySidepanel").style.animation =
        "slidein 1s forwards";
      document.getElementById("mySidepanel").style.borderLeft = "solid";
    },
    openRegister: function () {
      var inmodal = document.getElementById("signinmodal");
      var upmodal = document.getElementById("signupmodal");
      var btn = document.getElementById("registerBtn");
      var upbtn = document.getElementById("up-btn");
      var inbtn = document.getElementById("in-btn");
      btn.onclick = function () {
        inmodal.style.display = "flex";
      };
      inbtn.onclick = function () {
        upmodal.style.display = "none";
        inmodal.style.display = "flex";
      };
      upbtn.onclick = function () {
        inmodal.style.display = "none";
        upmodal.style.display = "flex";
      };
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Quicksand", sans-serif;
}
h1 {
  background-color: #fff;
  margin: auto;
}
body {
  height: auto;
  min-height: 1500px;
  width: 100%;
  max-width: 100%;
  background-color: #fff;
}
#normalBody {

  position: fixed;
  top: 0;  
  height: 100px;
  z-index: 100;
  /* min-height: 1500px; */
  padding-top: 20px;
  padding-bottom: 0;
  width: 100%;
  max-width: 100%;
  background-color: #fff;
  margin: 10px;
  margin-bottom: 0;
  margin-top: 0;
  margin-left: 0;
}
#searchModeBody {
  height: 100px;
  min-height: 100px;
  width: 100%;
  max-width: 100%;
  background-color: #fff;
  margin-left: 2%;
  display: flex;
 
}
#navBar {
  width: 100%;
  height: auto;
  background-color: #fff;
  display: inline-flex;
  flex-direction: row;
}
#navBar a {
  position: relative;
  text-decoration: none;
  color: black;
  margin-bottom: 15px;
}
#navBar button {
  height: auto;
  position: relative;
  margin-left: 15%;
  margin-top: auto;
  margin-bottom: auto;
  background-color: white;
  border-style: none;
  border-bottom-style: solid;
  border-bottom: 1px solid;
  border-bottom-color: darkgrey;
  color: darkgrey;
  text-align: center;
}
#navBar button:hover {
  cursor: pointer;
}

#suudTitle {
  color: #000;
  width: 100px;
  margin-left: 35px;
  position: relative;
  cursor: pointer;
  margin-bottom: 2px;
}
#navBarButtonsUL {
  position: relative;
  text-decoration: none;
  list-style: none;
  display: inline-flex;
  flex-direction: row;
  margin-bottom:2px;
}
#navBarButtonsUL li {
  margin-left: 17px;
  text-align: left;
  margin-top: auto;
  margin-bottom: auto;
  font-size: 16px;
  font-weight: bold;
}
#navBarButtonsUL li:hover {
  border-bottom: 2px solid black;
  cursor: pointer;
}
#navBarButtonsUL li a {
  text-transform: uppercase;
}
#indirimLi a {
  color: #bb0b0e;
  padding-left: 2px;
}
#searchDiv {
  width: 100%;
  padding-top: 0;
  padding-left: 0;
  display: flex;
  align-items: center;
  border-bottom-style: solid;
}
#searchIcon img {
  width: 20px;
  height: 20px;
}
#inputSearch {
  width: 95%;
  position: relative;
  height: 3%;
  border-style: none;
  font-size: 12px;
  background-color: #fff;
}
.searchUL {
  color: #000;
}
#searchModeBody {
  animation: fade 1.5s forwards;
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 100%;
  }
}
#searchModeBody button {
  position: relative;
  color: darkgrey;
  width: auto;
  height: 3%;
  background-color: #fff;
  border-style: none;
  padding: auto;

}
#searchModeBody li {
  display: block;
  margin: auto;
  width: 85%;
  height: auto;
  text-align: left;
  font-size: 25px;
  padding-left: 5%;
}
#searchModeBody a {
  text-decoration: none;
  color: black;
}

#navBarRightButtons {
  position: relative;
  width: auto;
  height: auto;
  margin-top: auto;
  margin-bottom: auto;
}
#navMenu {
  width: auto;
  height: auto;
  margin-bottom: auto;
  margin-top: auto;
  position: relative;
  text-decoration: none;
  list-style: none;
  display: inline-flex;
  flex-direction: row;
}
#navMenu li {
  position: relative;
  width: auto;
  height: auto;
  padding-left: 20px;
  padding-right: 20px;
 /* border-left-style: solid;*/
  border-left-width: 1px;
  border-left-color: #d3d3d3;
  display: inline-flex;
  flex-direction: row;
}
#navMenu img {
  width: 20px;
  height: 20px;
}
#navMenu li:hover {
  cursor: pointer;
}
#navMenu a {
  position: relative;
  margin-top: auto;
  margin-bottom: auto;
}
#navMenu p {
  position: relative;
  margin-left: 5px;
  margin-top: auto;
  margin-bottom: auto;
  height: auto;
  width: auto;
}
#searchModeExitButton img {
  position: relative;
  width: 15px;
  height: 15px;
  margin-bottom: auto;
  margin-top: auto;
}
#searchModeExitButton img:hover {
  cursor: pointer;
}
#searchModeExitButton {
  text-align: right;
  padding-right: 0%;
  margin:50px;
}
</style>
