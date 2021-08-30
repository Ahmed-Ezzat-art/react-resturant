
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './redux/index';

import { Provider } from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



/*  dark & light mood   */

const moonBtn = document.querySelector(".moon");
const moonIcon = document.querySelector(".moon i");
moonBtn.onclick = function () {
  moonIcon.classList.toggle("fa-sun");
  if (moonIcon.classList.contains("fa-sun")) {
    document.getElementById("root").classList.add("theme");
    document.querySelector(":root").style.setProperty("--main-color", "#ea1e63")
  } else {
    document.getElementById("root").classList.remove("theme")
    document.querySelector(":root").style.setProperty("--main-color", "#ea1e63")

  }
}

// ======================================================== //

/*  set color for website  */

let colors1 = document.querySelectorAll(".item-color1");
let colors2 = document.querySelectorAll(".item-color2");

colors1.forEach(item => {
  item.addEventListener("click", () => {
    if (!document.getElementById("root").classList.contains("theme")) {
      let color = item.getAttribute("data-color");
      document.querySelector(":root").style.setProperty("--main-color", color)
    }
  })
})

colors2.forEach(item => {
  item.addEventListener("click", () => {

    if (document.getElementById("root").classList.contains("theme")) {
      let color = item.getAttribute("data-color");
      document.querySelector(":root").style.setProperty("--main-color", color)
    }
  })
})


/*  color menu   */

let sideMenu = document.querySelectorAll(".side-menu");
let cogBtn = document.querySelectorAll(".cog-box")[0];

var bars = document.querySelector(".barsBtn");
var navLinksMenu = document.querySelector(".nav-links")

cogBtn.addEventListener("click", () => {
  sideMenu[0].classList.toggle("open");
  navLinksMenu.classList.remove("active");
})
/* ========================================== */

/*  toggle mobile menu  */
bars.addEventListener("click", () => {
  navLinksMenu.classList.toggle("active");
  sideMenu[0].classList.remove("open");

})

/* ==============   scroll to top button =========*/

const scrollbtn = document.querySelector(".scrollbtn");

scrollbtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})



// ======================     window on scroll     ===========//


window.addEventListener("scroll", () => {
  sideMenu[0].classList.remove("open");
  navLinksMenu.classList.remove("active");
  if (window.scrollY >= 500) {
    scrollbtn.classList.add("active")
  } else {
    scrollbtn.classList.remove("active")
  }
});

//   window on load

let loading = document.querySelector(".loading");

window.addEventListener("load", () => {
  setTimeout(() => {
    loading.style.top = "-100%"
  }, 1000)
})