/*
 * Author: Angelina Cortes
 * Created: 17 March 2022
 * License: Public Domain
 */

 // borrowed code from class:
 // print all the numbers from 1 to 200
 for (let i = 1; i <= 200; i++) {
     // For numbers which are multiples of both 3 and 5,
     // print “FizzBuzz”
     // else if (i % 3 == 0 && i % 5 == 0) {
     // if (i % 15 == 0) {
     //     console.log("FizzBuzz!");
     // }

     var buildStr = "";
     // If the number is a multiple of 3,
     // print “Fizz” instead of the number.
     if (i % 3 == 0) {
         buildStr += "Fizz";
     }
     // If the number is a multiple of 5,
     // print “Buzz” instead of the number.
     if (i % 5 == 0) {
         buildStr += "Buzz";
     }
     // If the number is a multiple of 7,
     // print “Boom” instead of the number.
     if (i % 7 == 0) {
         buildStr += "Boom";
     }

     if (buildStr != "") {
         console.log(buildStr + "!");
         $("#output").append("<p>" + buildStr + "!");
     }
     else {
         console.log(i);
         $("#output").append("<p>" + i);
     }
     }
