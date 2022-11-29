<template>
  <div class="comment-container">
    <div class="header">
      <div>
        <div>
          <h5>TÜM DEĞERLENDİRMELER (3)</h5>
        </div>
        <div id="stars">
          <div class="ratings">
            <input
              disabled
              checked
              class="rating__input rating__input--none"
              name="rating"
              id="rating-none"
              value="0"
              type="radio"
            />
            <label aria-label="1 star" class="rating__label" for="rating-1"
              ><i class="rating__icon rating__icon--star fa fa-star"></i
            ></label>
            <input
              class="rating__input"
              name="rating"
              id="rating-1"
              value="1"
              type="radio"
            />
            <label aria-label="2 stars" class="rating__label" for="rating-2"
              ><i class="rating__icon rating__icon--star fa fa-star"></i
            ></label>
            <input
              class="rating__input"
              name="rating"
              id="rating-2"
              value="2"
              type="radio"
            />
            <label aria-label="3 stars" class="rating__label" for="rating-3"
              ><i class="rating__icon rating__icon--star fa fa-star"></i
            ></label>
            <input
              class="rating__input"
              name="rating"
              id="rating-3"
              value="3"
              type="radio"
            />
            <label aria-label="4 stars" class="rating__label" for="rating-4"
              ><i class="rating__icon rating__icon--star fa fa-star"></i
            ></label>
            <input
              class="rating__input"
              name="rating"
              id="rating-4"
              value="4"
              type="radio"
            />
            <label aria-label="5 stars" class="rating__label" for="rating-5"
              ><i class="rating__icon rating__icon--star fa fa-star"></i
            ></label>
            <input
              class="rating__input"
              name="rating"
              id="rating-5"
              value="5"
              type="radio"
            />
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">
            Yeniden Eskiye <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Eskiden Yeniye</a>
            <a href="#">Artan Puan</a>
            <a href="#">Azalan Puan</a>
          </div>
        </div>
      </div>
      <div class="comment-count">2 Yorum, 3 Değerlendirme</div>
      <div class="degerlendir">
        <button>Ürünü Değerlendir <i class="far fa-comment-dots"></i></button>
      </div>
    </div>
    <div class="comments">
      <div class="comment">
        <p class="person">H*** M***</p>
        <p>Çok güzel bir ürün.</p>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star-o"></i>
        <hr class="hr" />
      </div>
      <div class="comment">
        <p class="person">A*** K***</p>
        <p>Bir beden küçük alınmalı. Kalıplar büyük.</p>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star-o"></i>
        <i class="fa fa-star-o"></i>
        <i class="fa fa-star-o"></i>
        <hr class="hr" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductComments",
};
</script>

<style scoped>
* {
  font-family: "Quicksand", sans-serif;
}
.comment-container {
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  width: 100%;
}
#stars {
  display: block;
}
#stars .ratings {
  display: inline-flex;
}
#stars .rating__icon {
  pointer-events: none;
}
#stars .rating__input {
  position: absolute !important;
  left: -9999px !important;
}
#stars .rating__input--none {
  display: none;
}
#stars .rating__label {
  cursor: pointer;
  padding: 0 0.1em;
  font-size: 2rem;
}
#stars .rating__icon--star {
  color: orange;
}
#stars .rating__input:checked ~ .rating__label .rating__icon--star {
  color: #ddd;
}
#stars .ratings:hover .rating__label .rating__icon--star {
  color: orange;
}
#stars .rating__input:hover ~ .rating__label .rating__icon--star {
  color: #ddd;
}

.comment-container .header {
  width: 60%;
  display: flex;
  justify-content: space-between;
}
.hr {
  height: 1px;
        background-color: rgb(218, 218, 218);
        border: none;
} 
h5 {
  margin-top: 0px;
}
.degerlendir button {
  background-color: #ff9d00;
  border: none;
  color: white;
  padding: 7px;
  border-radius: 5px;
}
/* Dropdown Button */
.dropbtn {
  margin-top: 15px;
  width: 150px !important;
  padding: 6px;
  font-size: 13px;
  border: 1px solid black;
  border-radius: 3px;
  background-color: rgb(255, 255, 255);
  color: black;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown-content a:hover {
  background-color: #ddd;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.comment .fa {
  color: #ff9d00;
}
.comments {
  width: 80%;
}
.comment {
  text-align: left;
}
</style>
