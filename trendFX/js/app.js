'use strict';

var navDropButton = document.querySelector('.js-nav-drop-icon'),
    sideNavigation = document.querySelector('.js-side-navigation');

console.log(navDropButton);
console.log(sideNavigation);

if (navDropButton) navDropButton.addEventListener('click', toggleSideNavigation);
if (sideNavigation) sideNavigation.addEventListener('click', closeSideNavigation); //temporary

function toggleSideNavigation() {
  navDropButton.classList.toggle('open');
  sideNavigation.classList.toggle('open');
}

function closeSideNavigation() {
  navDropButton.classList.remove('open');
  sideNavigation.classList.remove('open');
  console.log('closeSideNavigation');
}