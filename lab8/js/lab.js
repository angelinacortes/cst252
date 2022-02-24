/*
 * Author: Angelina Cortes
 * Created: 24 February 2022
 * License: Public Domain
 */

 function numberFunction(x){
    var results = (x % 2 == 0)
    return results;
}

// test function
console.log("Is 1 an even number? ", numberFunction(1));
console.log("Is 2 an even number? ", numberFunction(2));


array = [20, 500, 10000, 2345, 4587, 67890]
console.log("My array", array);

var result = array.map(numberFunction);
// should return [true, true, true, false, false, true]
console.log("Test evenness of array:", result);

var result = array.map(function(x){
  return x ** 0.5;
})
// should return [4.47213595499958, 22.360679774997898, 100, 48.425200051213004, 67.72739475278819, 260.5570954704554]
console.log("Squareroot of the array:", result);
