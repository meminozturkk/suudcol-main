import { createStore } from "vuex";
import { productsModule } from "./productsModule";
import { cartModule } from "./cartModule";

export default createStore({
  state: {
    //Verilerimizi tuttuğumuz alan state'tir
    products:[
      {
  "id": 1,
  "productName": "ürün 1",
  "originalPrice": "100",
  "discountedPrice": "90",
  "url":"https://farktorcdn.com/Library/Upl/5500181/Product/780x1170/SUUD_2309_1485.jpg"
},
{
  "id": 2,
  "productName": "ürün 2",
  "originalPrice": "200",
  "discountedPrice": "180",
  "url":"https://farktorcdn.com/Library/Upl/5500181/Product/780x1170/SUUD_2309_1485.jpg"
}
    ],
  },
  actions: {
    //Dispatch işlemlerini de burada yapacağız
    //Asenkron olarak çalışır genelde fonksiyonlarımız burada yer alır
  },
  mutations: {
    //State commitleri burada yapılacak
 
    //Actions'tan gelen değerleri okuyup state'i güncelleyen fonksiyonların barındığı yer
  },
  getters:{
      getbrbr(state){
    let object;
    let httpRequest = new XMLHttpRequest(); // asynchronous request
    httpRequest.open("GET", "/usersApi.json", true);
    httpRequest.send();
    httpRequest.addEventListener("readystatechange", function() {
    if (this.readyState === this.DONE) {
      	// when the request has completed
        object = JSON.parse(this.response);
        state.products = object;
    }
});
console.log(state.products);
}//brbr
    //State'i geriye döndüren fonksiyonlarımız
  },
  modules: { 
     //Modüler bir yapı kurmak istediğimiz zaman, modüllerimizi buraya ekleyeceğiz.
     productsModule,
     cartModule
  },
});