// document.getElementById('menu-icon').addEventListener('click', function() {
//     var navLinks = document.getElementById('nav-links');
//     if (navLinks.style.display === "block") {
//         navLinks.style.display = "none";
//     } else {
//         navLinks.style.display = "block";
//     }
// });
// You can change as needed
const word_list = [
    "Proud to be SRKian!",
    "Proud to be SRKian!",
    "Proud to be SRKian!",
    "Proud to be SRKian!",
    "Proud to be SRKian!"
];




document.addEventListener("DOMContentLoaded", ()=> {
// get heading element
const heading_el = document.querySelector("#type-writer h1");
// current word index
let current_word_index = 0;
// Interval for update heading text
setInterval( ()=>{
// calling updateHeadingText function
updateHeadingText(current_word_index, heading_el);
// updating index
current_word_index ++;
// condition
if (current_word_index >= word_list.length) {
    current_word_index = 0;
}
}, 2000); // 2 second -> Remember, this delay should be the same as the typing animation duration.
});






// function for update heading text
function updateHeadingText (current_word_index, heading_el) {
// get current_word
const current_word = word_list[current_word_index];
// update text in heading
heading_el.innerText = current_word;
}