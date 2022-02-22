/*
 * Author: Angelina Cortes
 * Created: 22 February 2022
 * License: Public Domain
 */

// sortUserName
function sortUserName() {
  var userName = window.prompt("Hi. Please tell me your name.");
  console.log("userName =", userName);
  // split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  // join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

// output
document.writeln("I fixed your name:",
    sortUserName(), "</br>");
