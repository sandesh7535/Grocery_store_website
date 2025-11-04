// search btn
let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
  registerform.classList.remove("active");
};

// shopping-cart btn
let shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
  shoppingCart.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
  registerform.classList.remove("active");
};

// login btn
let loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  navbar.classList.remove("active");
  registerform.classList.remove("active");
};

//register btn
let registerform = document.querySelector(".register-form");

document.querySelector("#register-btn").onclick = () => {
  registerform.classList.toggle("active");
  loginForm.classList.remove("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  navbar.classList.remove("active");
};

// menu btn
let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  loginForm.classList.remove("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  navbar.classList.toggle("active");
  registerform.classList.remove("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
  registerform.classList.remove("active");
};

// swiper for product section
var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,

  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

// swiper for review section
var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,

  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
