"use strict";

/* Preload:

    Loading screen before the page is fully loaded

*/
const preloader = document.querySelector("[data-preload]");
window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  this.document.body.classList.add("loaded");
});