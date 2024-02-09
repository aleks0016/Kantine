// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

 /** Display of date and time */

 const timeElement = document.querySelector(".time");
 const dateElement = document.querySelector(".date");
 
 /**
  * @param {Date} date
  */
 function formatTime(date) {
   const hours12 = date.getHours() % 24 || 24;
   const minutes = date.getMinutes();
 
 
   return `${hours12.toString().padStart(2, "0")}:${minutes
     .toString()
     .padStart(2, "0")}`;
 }
 
 /**
  * @param {Date} date
  */
 function formatDate(date) {
   const DAYS = [
     "Søndag",
     "Mandag",
     "Tirsdag",
     "Onsdag",
     "Torsdag",
     "Fredag",
     "Lørdag",
   ];
   const MONTHS = [
     "Januar",
     "Februar",
     "Mars",
     "April",
     "Mai",
     "Juni",
     "Juli",
     "August",
     "September",
     "Oktober",
     "November",
     "Desember"
   ];
 
   return `${DAYS[date.getDay()]} 
   ${date.getDate()} 
   ${MONTHS[date.getMonth()]} 
   ${date.getFullYear()}`;
 }
 
 setInterval(() => {
   const now = new Date();
 
   timeElement.textContent = formatTime(now);
   dateElement.textContent = formatDate(now);
 }, 200);
 
