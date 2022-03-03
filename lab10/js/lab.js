/*
 * Author: Angelina Cortes
 * Created: 03 March 2022
 * License: Public Domain
 */

// borrowed JavaScript code from Wes's website:
// shuffleArray - take an array and shuffle the contents
function shuffleArray(array) {
   var currentIndex = array.length, temporaryValue, randomIndex;
   while (0 !== currentIndex) {
       randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex -= 1;

       temporaryValue = array[currentIndex];
       array[currentIndex] = array[randomIndex];
       array[randomIndex] = temporaryValue;
   }
   return array;
}


function reorderUserName(word) {
   var wordArray = word.toLowerCase().split('');
   var newArray = shuffleArray(wordArray);
   return newArray.join('');
}

function toTitleCase(str) {
   return str.replace(
       /\w\S*/g,
       function(txt) {
           return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
       }
   );
}

// find the button element
buttonEl = document.getElementById("my-button");
console.log("button element:", buttonEl);
// find the form element
inputEl = document.getElementById("user-name");
console.log("input element:", inputEl);
// find output element
outputEl = document.getElementById("output");
console.log("output element:", outputEl);

// add an event listener to button
buttonEl.addEventListener("click", function(){
 // get value from name element
 var userName = inputEl.value;
 // modify value - either sort or shuffle
 var newName = toTitleCase(reorderUserName(userName));
 // put value in output element
 outputEl.innerHTML = "<p id=name-results>" + newName + "</p>";
});
