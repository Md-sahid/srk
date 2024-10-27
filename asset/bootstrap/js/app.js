        
        
        
        
        
        
        let openHam = document.querySelector('#openHam');
        let closeHam = document.querySelector('#closeHam');
        let navigationItems = document.querySelector('#navigation-items');
        let closeItem1=document.querySelector('.cItem1');
        let closeItem2=document.querySelector('.cItem2');
        let closeItem3=document.querySelector('.cItem3');
        let closeItem4=document.querySelector('.cItem4');
        let closeItem5=document.querySelector('.cItem5');
        let closeItem6=document.querySelector('.cItem6');

        const hamburgerEvent = (navigation, close, open) => {
           navigationItems.style.display = navigation;
           openHam.style.display = open;
           closeHam.style.display = close;
          
               };

         openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
         closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block"));
         closeItem1.addEventListener('click', () => hamburgerEvent("none", "none", "block"));
         closeItem2.addEventListener('click', () => hamburgerEvent("none", "none", "block"));
         closeItem3.addEventListener('click', () => hamburgerEvent("none", "none", "block"));
         closeItem4.addEventListener('click', () => hamburgerEvent("none", "none", "block"));
         closeItem5.addEventListener('click', () => hamburgerEvent("none", "none", "block"));
         closeItem6.addEventListener('click', () => hamburgerEvent("none", "none", "block"));












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
