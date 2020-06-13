"use strict";

const menuItems = document.querySelectorAll('header nav ul li a');

const closeMenu = () => {
  const toggle = document.querySelector('#toggle');
  const menu = document.querySelector('header');
  setTimeout(() => {
    toggle.checked = false;
    window.scrollBy(0, -menu.offsetHeight);
  }, 40);
};

menuItems.forEach(item => item.addEventListener('click', closeMenu));