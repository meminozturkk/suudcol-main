<template>
  <div class="container">
    <div class="heading">
      <h1>ULAŞILABİLİR MODA SUUD COLLECTION'DA</h1>
      <h4>
        Ürünlerimizi atölyelerimizde üretip doğrudan sana ulaştırıyoruz.
        Fiyatlar uygun çünkü seninle aramıza kimseyi sokmuyoruz.
      </h4>
    </div>
    <div class="sub-categories">
      <div
        @mouseleave="subItemMouseLeave()"
        @mouseenter="subItemHover()"
        onclick="location.href='#';"
        class="sub-item"
        style="
          background-image: url(https://images.pexels.com/photos/1437149/pexels-photo-1437149.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260);
        "
      >
        <a href=""> Çorap </a>
      </div>

      <div
        @mouseleave="subItemMouseLeave()"
        @mouseenter="subItemHover()"
        onclick="location.href='#';"
        class="sub-item"
        style="
          background-image: url(https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260);
        "
      >
        <a href=""> Takı </a>
      </div>
      <div
        @mouseleave="subItemMouseLeave()"
        @mouseenter="subItemHover()"
        onclick="location.href='#';"
        class="sub-item"
        style="
          background-image: url(https://images.pexels.com/photos/3682293/pexels-photo-3682293.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260);
        "
      >
        <a href=""> Ayakkabı </a>
      </div>

      <div
        @mouseleave="subItemMouseLeave()"
        @mouseenter="subItemHover()"
        onclick="location.href='#';"
        class="sub-item"
        style="
          background-image: url(https://images.pexels.com/photos/1499477/pexels-photo-1499477.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260);
        "
      >
        <a href=""> Gözlük </a>
      </div>
      <div
        id="canta"
        onclick="location.href='#';"
        class="sub-item"
        style="
          background-image: url(https://images.pexels.com/photos/4110340/pexels-photo-4110340.jpeg?cs=srgb&dl=pexels-anastasiya-lobanovskaya-4110340.jpg&fm=jpg);
        "
      >
        <a href=""> Çanta </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubCategories",
  data() {
    return {};
  },
  methods: {
    subItemHover: function () {
      var canta = document.getElementById("canta");
      canta.style.width = "10%";
    },
    subItemMouseLeave: function () {
      var canta = document.getElementById("canta");
      canta.style.width = "50%";
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Open Sans", sans-serif;
}

.heading h1,
h4 {
  font-family: "Open Sans", sans-serif;
  text-align: center;
  font-weight: 400;
}
.heading h1 {
  margin-left: 365px;
  margin-top: 450px;
  font-size: 1.5rem;
}
.heading h4 {
  font-size: 0.8rem;
  margin-bottom: 40px;
  margin-left: 250px;
}
.container {
  margin-left: 75px;
}
.sub-categories {
  /* align-content: center; */
  width: 100%;
  height: 80%;
  position: absolute;
  display: flex;
  margin: 150px 0;
  margin-top: 0;
}
.sub-item {
  filter: brightness(50%);
  cursor: pointer;
  width: 10%;
  height: 100%;
  animation: forwards slideout 0.2s;
  background-size: cover;
  background-attachment: scroll;
}
.sub-item:last-child {
  width: 50%;
}
.sub-item:hover {
  animation: slidein 0.2s;
  animation-fill-mode: forwards;
  background-size: cover;
  filter: brightness(100%);
}

.sub-item a {
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.2cm;
  font-weight: 700;
  color: white;
  position: absolute;
  bottom: 0;
  left: 10px;
  margin-bottom: 50px;
  font-size: 1.2rem;
}
@keyframes slidein {
  from {
    filter: brightness(50%);
  }
  to {
    filter: brightness(100%);
    width: 50%;
    height: 100%;
  }
}
@keyframes slideout {
  from {
    width: 50%;
    height: 100%;
  }
  to {
  }
}
</style>
