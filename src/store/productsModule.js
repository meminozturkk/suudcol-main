export const productsModule={
    state: {
        //Verilerimizi tuttuğumuz alan state'tir
        products:[  {
            id: 1,
            productName: 'ürün 1',
            originalPrice: '100',
            discountedPrice: '90'
          },
          {
            id: 2,
            productName: 'ürün 2',
            originalPrice: '200',
            discountedPrice: '180'
          }],
          price:1
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
        getNmb(state){
          return state.price
        }
        //State'i geriye döndüren fonksiyonlarımız
      }
}