<template>
  <div class="footer">
      <div class="subscribe">
        <h5>BÜLTENE ÜYE OL</h5>
        <p>Tüm yenilik ve indirimlerden önce senin haberin olsun!</p>
        <input @blur="toggleVisibility()"  @focus="toggleVisibility()" v-model="email" type="email" name="" id="" placeholder="E-Posta" />
        <button v-show="btnVisible" id="registerBtn">Kaydol</button>
      </div>
      <div class="footer-columns">
        <div class="help">
          <h4>Yardıma mı ihtiyacın var?</h4>
          <ul>
            <li>
              <i class="fa fa-comment-o" aria-hidden="true"></i>
              <a href="#"> Sohbeti başlat<br />+905392027883</a>
            </li>
            <hr />
            <li>
              <a href="">
                <i class="fa fa-envelope-o" aria-hidden="true"></i> Pazartesi -
                Cuma: 10:00 - 18:00 <br />

                <i class="fa fa-volume-control-phone" aria-hidden="true"></i
                ><a href="tel:08502597833">0850 259 78 33 </a>
              </a>
            </li>
          </ul>
        </div>
        <!-- help column -->
        <div class="kurumsal">
          <h4>Kurumsal</h4>
          <ul>
            <li><a href="">Hikayemiz</a></li>
            <li><a href="">İletişim</a></li>
            <li><a href="">Suud Kariyer</a></li>
          </ul>
        </div>
        <!-- kurumsal -->
        <div class="linkler">
          <h4>Önemli Linkler</h4>
          <ul>
            <li><a href="">Sık Sorulan Sorular</a></li>
            <li><a href="">Üyelik Sözleşmesi</a></li>
            <li><a href="">Teslimat İade</a></li>
          </ul>
        </div>
        <div class="musteri-hizmetleri">
          <h4>Müşteri Hizmetleri</h4>
          <ul>
            <li><a href="">Gizlilik Politikası</a></li>
            <li><a href="">KVKK</a></li>
          </ul>
        </div>
        <!-- müşteri hizmetleri -->
        <div class="odeme">
          <h4>Ödeme Yöntemleri</h4>
          <ul>
            <li>Visa</li>
            <li>Master Card</li>
            <li>Maestro</li>
            <li>Western Union</li>
          </ul>
        </div>
      </div>
      <!-- footer columns -->
      <div class="contact">
        <div class="social">
          Bizi takipte kalın. <a href=""><i class="fa fa-facebook-f"></i></a>
          <a href=""><i class="fa fab fa-instagram"></i></a>
          <a href=""><i class="fa fa-pinterest"></i></a>
        </div>
        <div class="magazalar">
          <a href=""><i class="far fa-building"> </i> MAĞAZALAR</a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name:'Footer',
    data(){
      return{
        email:'',
        btnVisible:false,
      }

    },
    mounted(){
  
    
  },
  methods:{
    register:function(){
      let registerBtn=document.getElementById('registerBtn')
      // if(this.email!=null || this.email != ''){
      //   registerBtn.style.display='inline-block';
      // }
      if(this.btnVisible==true){
        alert("true");
        registerBtn.style.display='inline-block';
      }
      else{
         alert("false");
        registerBtn.style.display='none';
      }
    },
    toggleVisibility:function(){
     
      this.btnVisible = !this.btnVisible;
      
    },
  }

}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap");
* {
  font-family: "Quicksand", sans-serif;
}
.subscribe {
  text-align: center;
  color: rgba(95, 95, 95, 0.95);
}
.subscribe h5,p{
  font-size: 13px;
}
h4{
    font-size: .8rem;
    text-align:left !important;
    color:black;
}
.subscribe input {
  border: none;
  border-bottom: 1px solid;
  padding-bottom: 10px;
  text-align: center;
  margin-bottom:20px;
}
#registerBtn{
  /* display: none; */
  background-color: black;
  border: none;
  padding:7px;
  border-radius: 5px;
  margin-left: 10px;
  color: white;
  text-transform: uppercase;
cursor: pointer;

}
hr {
  border: none;
  border-top: 0.05px solid #e7e7e7;
}
.footer-columns {
  display: flex;
  flex-direction: row;
  justify-items: center;
  justify-content: space-evenly;
  font-size:13px;
}
.footer-columns > div > ul {
  list-style-type: none;
  padding-left: 0px;
}

.footer-columns div ul li {
  margin-top: 5px;
  animation: antipadleft 0.5s;
  text-align:left !important;
}
.footer-columns div ul li:hover {
  /* margin-left: 7px; */
  animation: padleft 0.5s forwards;
  text-decoration: underline;
}
ul a {
  color: black;
  text-decoration: none;
}
.help i {
  color: orangered;
}
.contact {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.contact div {
  border: 1px solid #252525;
  padding: 25px;
  width: 50%;
  text-align: center;
  animation: anticontacthover 0.5s;
}
.contact div a {
  margin: 5px;
  /* font-size: 20px; */
  color: #252525;
  text-decoration: none;
}

.contact div:hover {
  animation: contacthover 0.5s forwards;
  color: #e7e7e7;
}
.contact div:hover * {
  color: #e7e7e7;
}

@keyframes padleft {
  from {
    padding-left: 0;
  }
  to {
    padding-left: 7px;
  }
}
@keyframes antipadleft {
  from {
    padding-left: 7px;
  }
  to {
    padding-left: 0px;
  }
}
@keyframes contacthover {
  from {
    background-color: white;
  }
  to {
    background-color: rgba(16, 16, 16, 0.95);
  }
}
@keyframes anticontacthover {
  from {
    background-color: rgba(16, 16, 16, 0.95);
  }
  to {
    background-color: white;
  }
}

</style>