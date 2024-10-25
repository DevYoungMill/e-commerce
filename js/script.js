// Script for navigation bar
const navbar = document.querySelector('.navbar');
const openNavbar = document.querySelector('.bar');
const closeNavbar = document.querySelector('.close');

openNavbar.addEventListener('click', function () {
  navbar.classList.add('active');
});

closeNavbar.addEventListener('click', function () {
  navbar.classList.remove('active');
});

// Image Slider
const mainImg = document.querySelector('.main-img');
const smallImg = document.querySelectorAll('.small-img');

smallImg.forEach((img) => {
  img.addEventListener('click', function () {
    mainImg.src = img.src;
  });
});

// Show Product Page
const product = document.querySelectorAll('.pro');

product.forEach(function (pro) {
  pro.addEventListener('click', function () {
    window.location.href = 'sproduct.html';
  });
});

// Current Year

const yealEl = document.querySelector('.year');
const currentDate = new Date();
yealEl.textContent = currentDate.getFullYear();

// Activate the active class
const linkEl = document.querySelectorAll('.navbar li a');
console.log(linkEl);

document.addEventListener('DOMContentLoaded', function () {
  const currentPath = window.location.pathname.split('/').pop();
  console.log(currentPath);

  linkEl.forEach(function (link) {
    const linkPath = link.getAttribute('href');
    console.log(linkPath);

    if (linkPath === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
