//jshint esversion: 6
/*
Author: Anthony Noel

-This page has a fixed nav that slides out when you pass the main one on the page above
Future Dev:
-Refactor conde
-Make the translation it's own css class
*/

const fixedNav = document.querySelector(".fixed-nav");
const mainHeader = document.querySelector("header");
let bottomOfMainNav = mainHeader.offsetTop+mainHeader.offsetHeight;
console.log(bottomOfMainNav);

function debounce(func, wait = 10, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const pageScrolled = () => {
  //Get the scroll location from the top
  console.log(window.scrollY);
  //If it's past the scroll location of the bottom, change the fixed nav translate x to 0
  //If not set the translatex to -100%;
  if(window.scrollY > bottomOfMainNav) {
    fixedNav.style.transform = "translateX(0)";
  } else {
    fixedNav.style.transform = "translateX(-100%)";
  }
};

const initPage = () => {
  //Add a eventlistener that listens for scroll events on the document
  document.addEventListener("scroll", debounce(pageScrolled));
};

initPage();
