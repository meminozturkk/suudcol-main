<template>
  <div class="container">
    <div id="signinmodal" class="signin modalbox">
      <div class="modal-header">
        <!-- <img src="../assets/register/signin-header.jpg" alt="" /> -->
        <span class="close-button">
          <button v-on:click="closeModal()">X</button>
        </span>
      </div>
      <div class="modal-buttons">
        <button class="in-btn">Giriş Yap</button>
        <button id="up-btn" class="up-btn">Üye Ol</button>
      </div>
      <div class="modal-form">
        <div class="form-input">
          <input
            type="email"
            name="email"
            id=""
            v-model="email"
            placeholder="E-posta veya Telefon"
          />
          <!-- <div class="input-placeholder"><span> E-posta veya Telefon </span></div> -->
        </div>
        <div class="form-input">
          <input
            type="password"
            name="password"
            id=""
            v-model="password"
            placeholder="Şifreniz"
          />
          <!-- <div class="input-placeholder"><span>Şifreniz</span></div> -->
        </div>

        <a class="no-pswd" href=""> Şifremi Unuttum </a>
        <div class="form-buttons">
          <button id="signin-btn">Giriş Yap</button>
          <button id="fb-btn" value="">
            <i class="fa fa-facebook-f"></i>&nbsp;&nbsp; Facebook le Giriş Yap
          </button>
        </div>
      </div>
    </div>

    <div id="signupmodal" class="signup modalbox">
      <div class="modal-header">
        <!-- <img src="../assets/register/signin-header.jpg" alt="" /> -->
        <span class="close-button">
          <button v-on:click="closeModal()">X</button>
        </span>
      </div>
      <div class="modal-buttons">
        <button id="in-btn" class="in-btn">Giriş Yap</button>
        <button class="up-btn">Üye Ol</button>
      </div>
      <div class="modal-form">
        <div class="form-input">
          <input type="text" name="name" placeholder="Adınız" />
          <!-- <div class="input-placeholder"><span>Adınız</span></div> -->
        </div>

        <div class="form-input">
          <input type="text" name="lastname" placeholder="Soyadınız" />
          <!-- <div class="input-placeholder"><span>Soyadınız</span></div> -->
        </div>
        <div class="form-input">
          <input
            type="email"
            name="email"
            id=""
            placeholder="E-posta Adresiniz"
          />
          <!-- <div class="input-placeholder"><span>E-posta adresiniz </span></div> -->
        </div>
        <div class="form-input">
          <input type="tel" name="phone" placeholder="Telefon Numaranız" />
          <!-- <div class="input-placeholder"><span>Telefon Numaranız</span></div> -->
        </div>
        <div class="form-input">
          <input type="password" name="password" id="" placeholder="Şifreniz" />
          <!-- <div class="input-placeholder"><span>Şifreniz</span></div> -->
        </div>
        <div class="campaign-check">
          <input type="checkbox" name="campaigncheck" id="" value="" />
          <label for="">Kampanyalar için bilgilendirme istiyorum.</label>
        </div>
        <div class="form-buttons">
          <button id="signup-btn">Üye Ol</button>
          <label id="terms-label" for=""
            >Üye ol'a basarak <a href="#">Üyelik Koşulları</a>nı ve
            <a href=""> Kişisel Verilerin Korunması Metni</a>ni kabul ediyorum.
          </label>
          <p><i>Sosyal Medya Hesabınızla Giriş Yapın</i></p>
          <button id="fb-btn" value="">
            <i class="fa fa-facebook-f"></i>&nbsp;&nbsp; Facebook le Giriş Yap
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
    };
  },
 
  methods: {
    modal: function () {
      // Get the modal
      var inmodal = document.getElementById("signinmodal");
      var upmodal = document.getElementById("signupmodal");
      var btn = document.getElementById("myBtn");
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
    closeModal: function () {
      var inmodal = document.getElementById("signinmodal");
      var upmodal = document.getElementById("signupmodal");
      if (inmodal.style.display == "flex") {
        inmodal.style.display = "none";
      } else if (upmodal.style.display == "flex") {
        upmodal.style.display = "none";
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap");
* {
  font-family: "Open Sans", sans-serif;
}
a {
  color: #000;
}
label {
  color: #4d4d4d;
}
label:hover {
  color: #000;
}
#myBtn {
  width: 100px;
  background-color: #ffb113;
  color: white;
  border: none;
}

.modalbox {
  margin-left: -200px;
  margin-top: 70px;
  width: 1800px;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  display: none;
  position: absolute;
  z-index: 16;
  background-color: white;
  align-self: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  animation: animatetop 0.4s forwards;
  box-shadow: 0 0 0 99999px rgba(0, 0, 0, .5);
  border-top-right-radius: 7px;
  border-top-left-radius: 7px;
}
.close-button button {
  text-align: center;
  background-color: white;
  color: #000;
  border: 2px solid rgb(253, 253, 253);
  font-weight: 600;
  text-align: center;
  width: 30px;
  height: 30px;

  border-radius: 50%;
  position: relative;
  left: 380px;
  top: -5px;
  cursor: pointer;
  z-index: 1;
}

@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}
.modalbox div {
  margin: 10px;
}
.modal-header {
  width: 100%;
  background-image: url("../assets/register/signin-header.jpg");
  background-size: cover;
  height: 200px;
  margin-top: 0 !important;
}

.modal-buttons {
  width: 85%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.modal-buttons button {
  border: none;
  border-radius: 50px;
  padding: 10px;
  background-color: #fff;
  margin-right: 50px;
  width: 100%;
  color: #4d4d4d;
  cursor: pointer;
}
.modal-buttons button:last-child {
  margin-right: 0px;
}
.signin > .modal-buttons > .in-btn {
  border: 1px solid black;
  color: black;
}
.signup > .modal-buttons > .up-btn {
  border: 1px solid black;
  color: black;
}
.modal-form {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.form-input {
  position: relative;
  margin-bottom: 25px;
}

.form-input input {
  border: 1px solid #dadce0;
  padding: 15px;
  border-radius: 4px;
  width: 90%;
}

.form-input .input-placeholder {
  font-size: 20px;
  position: absolute;
  bottom: 5px;
  bottom: 5px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #252525;
  left: 5px;
  padding: 0 8px;
  -webkit-transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
  text-align: left;
  width: 100%;
}

.form-input .input-placeholder span {
  background: #ffffff;
  padding: 0px 8px;
}

.form-input input:focus ~ .input-placeholder {
  color: #858585;
}
.form-input input:focus ~ .input-placeholder,
.form-input.hasValue input ~ .input-placeholder {
  -webkit-transform: scale(0.75) translateY(-39px) translateX(-60px);
  transform: scale(0.75) translateY(-23px) translateX(-60);
}
.form-input.hasValue input:not(:focus) ~ .input-placeholder,
.form-input.hasValue input:not(:focus) ~ .form-input input {
  color: #0b9247 !important;
}
.no-pswd {
  align-self: flex-end;
  padding-right: 20px;
  color: rgb(67, 67, 67);
  font-size: 14px;
}

.no-pswd:hover {
  color: black;
}
.form-buttons {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.form-buttons button {
  width: 90%;
  align-self: center;
  font-family: "Quicksand", sans-serif;
  font-size: 14px;
  font-weight: 900;
  cursor: pointer;
  border-radius: 5px;
  padding: 15px;
}
#signin-btn,
#signup-btn {
  background-color: #ffb113;
  margin-bottom: 25px;
  color: #fff;
  border: 1px solid #ffb113;
}
#signup-btn {
  margin-bottom: 0;
}
#signin-btn:hover {
  background-color: #fff;
  color: #000;
}
#fb-btn {
  background-color: #fff;
  color: #1877f2;
  border: 1px solid #1877f2;
}
#fb-btn:hover {
  background-color: #1877f2;
  color: #fff;
}
.form-buttons > i {
  position: relative;
  left: 30%;
  top: -35;
  color: #1877f2;
}
#terms-label {
  font-size: 10px;
  margin-top: 0px;
  margin-bottom: 25px;
}
p {
  font-size: 15px;
  text-align: center;
}
</style>
