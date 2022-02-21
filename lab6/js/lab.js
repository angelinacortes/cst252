/*
 * Author: Angelina Cortes
 * Created: 18 February 2022
 * License: Public Domain
 */

// Define Variables
myTransport = ["Chevy Tahoe", "bike", "skateboard", "bus"];

myMainRide = {
  make: "Chevy",
  model : "Tahoe",
  color : "Black",
  year : 2004,
}

// output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
