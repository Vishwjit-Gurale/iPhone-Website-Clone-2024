// start  Mobile View

let menu = document.querySelector(".fa-grip-lines"); // gripLine Icon
let cls = document.querySelector(".fa-xmark"); // Close Icon
let navBar = document.querySelector("#slid-nav"); // Another hide Navbar

menu.addEventListener("click", function () {
  navBar.style.top = "0%";
});

cls.addEventListener("click", function () {
  navBar.style.top = "-100%";
});

//todo *** NavBar Hover

let submenu = document.querySelector("#sub-section");
let apple = document.querySelector("#apple");
let store = document.querySelector("#store");
let mac = document.querySelector("#mac");
let ipad = document.querySelector("#ipad");
let iphone = document.querySelector("#iphone");
let watch = document.querySelector("#watch");
let pods = document.querySelector("#pods");
let home = document.querySelector("#home");
let enter = document.querySelector("#enter");
let support = document.querySelector("#support");
let access = document.querySelector("#access");

// todo do not touch ( use addEventListener window scroll event)
window.addEventListener("scroll", () => {
  submenu.style.top = "-100%";
});

apple.addEventListener("mouseleave", function () {
  submenu.style.top = "-100%";
});

document.addEventListener("mouseleave", function (event) {
  if (!event.relatedTarget) {
    submenu.style.top = "-100%";
  }
});

//start  Hover by Store menu

store.addEventListener("mousemove", function () {
  document.querySelector(".store-div").style.visibility = "visible";
  document.querySelector("#sub-section").style.visibility = "visible";
  submenu.style.top = "0%";
});

submenu.addEventListener("mouseleave", function () {
  document.querySelector(".store-div").style.visibility = "hidden";
});

//start  Hover by Mac menu

mac.addEventListener("mousemove", function () {
  document.querySelector(".mac-div").style.visibility = "visible";
  document.querySelector("#sub-section").style.visibility = "visible";
  submenu.style.top = "0%";
});

submenu.addEventListener("mouseleave", function () {
  document.querySelector(".mac-div").style.visibility = "hidden";
});

//start  Hover by ipad menu

ipad.addEventListener("mousemove", function () {
  document.querySelector(".ipad-div").style.visibility = "visible";
  document.querySelector("#sub-section").style.visibility = "visible";
  submenu.style.top = "0%";
});

submenu.addEventListener("mouseleave", function () {
  document.querySelector(".ipad-div").style.visibility = "hidden";
});
//start  Hover by iphone menu

iphone.addEventListener("mousemove", function () {
  document.querySelector(".iphone-div").style.visibility = "visible";
  document.querySelector("#sub-section").style.visibility = "visible";
  submenu.style.top = "0%";
});

submenu.addEventListener("mouseleave", function () {
  document.querySelector(".iphone-div").style.visibility = "hidden";
});

//start  Hover by watch menu

watch.addEventListener("mousemove", function () {
  document.querySelector(".watch-div").style.visibility = "visible";
  document.querySelector("#sub-section").style.visibility = "visible";
  submenu.style.top = "0%";
});

submenu.addEventListener("mouseleave", function () {
  document.querySelector(".watch-div").style.visibility = "hidden";
});

//start  Hover by AirPods menu

pods.addEventListener("mousemove", function () {
  document.querySelector(".pods-div").style.visibility = "visible";
  document.querySelector("#sub-section").style.visibility = "visible";
  submenu.style.top = "0%";
});

submenu.addEventListener("mouseleave", function () {
  document.querySelector(".pods-div").style.visibility = "hidden";
});

//start  Hover by TV & Home menu

home.addEventListener("mousemove", function () {
  document.querySelector(".home-div").style.visibility = "visible";
  document.querySelector("#sub-section").style.visibility = "visible";
  submenu.style.top = "0%";
});

submenu.addEventListener("mouseleave", function () {
  document.querySelector(".home-div").style.visibility = "hidden";
});

//start  Hover by Entertainment menu

enter.addEventListener("mousemove", function () {
  document.querySelector(".enter-div").style.visibility = "visible";
  document.querySelector("#sub-section").style.visibility = "visible";
  submenu.style.top = "0%";
});

submenu.addEventListener("mouseleave", function () {
  document.querySelector(".enter-div").style.visibility = "hidden";
});

//start  Hover by Accessories menu

access.addEventListener("mousemove", function () {
  document.querySelector(".access-div").style.visibility = "visible";
  document.querySelector("#sub-section").style.visibility = "visible";
  submenu.style.top = "0%";
});

submenu.addEventListener("mouseleave", function () {
  document.querySelector(".access-div").style.visibility = "hidden";
});

//start  Hover by Support menu

support.addEventListener("mousemove", function () {
  document.querySelector(".support-div").style.visibility = "visible";
  document.querySelector("#sub-section").style.visibility = "visible";
  submenu.style.top = "0%";
});

submenu.addEventListener("mouseleave", function () {
  document.querySelector(".support-div").style.visibility = "hidden";
});

// var size;

// var swiper = new Swiper(".swiper", {
//   slidesPerView: 11,
//   spaceBetween: 5,
//   slidesPerView: 11,
//   slidesPerView: perView(),

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   on: {
//     resize: function () {
//       swiper.changeDirection(getDirection());
//     },
//   },
// });

// function perVies() {
//   size = window.innerWidth <= 1000 ? 3 : 11;
//   return size;
// }
