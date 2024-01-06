// // Example JavaScript code for adding interactivity (e.g., toggling a class on click)
// document.addEventListener('DOMContentLoaded', function () {
//     const logo = document.querySelector('.logo');
//     logo.addEventListener('click', function () {
//         document.body.classList.toggle('dark-mode');
//     });
// });
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("skills");
}