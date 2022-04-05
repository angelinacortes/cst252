/*
 * Author: Angelina Cortes
 * Created: 05 April 2022
 * License: Public Domain
 */

 // borrowed code from class:
// Create a object constructor called "Vehicle" that takes "make" and "model" as parameters and stores this.
function Vehicle(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    // Add a method talk()
    this.talk = function(){
        // brings up an appropriate alert box
        return (this.make + " " + this.model);
    }
}

// Create car, bike and skateboard.
var car = new Vehicle("Chevy", "Tahoe", 2004, "black");
var bike = new Vehicle("Bike", "Beach Cruiser", 2015, "mint");
var skateboard = new Vehicle("Skateboard", "Pennyboard", 2018, "black");

// Reference the talk() method for each of these
console.log("My Vehicles")
console.log(car.talk());
console.log(bike.talk());
console.log(skateboard.talk());

$("#output").append("<p>" + car.talk() + "</p>");
$("#output").append("<p>" + bike.talk() + "</p>");
$("#output").append("<p>" + skateboard.talk() + "</p>");
