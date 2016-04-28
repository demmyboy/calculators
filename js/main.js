// Task 1.... The Age Calculator
function calculateAge(birthYear, currentYear) {
    var today = new Date();
    var presentYear = today.getFullYear(); // this is used JS way of passing in the current year instead of manually inputing it in. 
    var yourAge = document.getElementById("birthYear").value;
    var yearOfBirth = presentYear - yourAge;
    var possibleAge = yearOfBirth - 1; // this variable is for a possible age just incase its not your birthday month yet
    document.getElementById("ageConfirm").innerHTML = "You are either " + yearOfBirth + " or " + possibleAge + " years Old";
}

/* The scripts  ccomment out below can be used if you have to test from the console
	according to the question 
var today = new Date();
var currentYear = today.getFullYear();

function calculateAge(birthYear, currentYear){
	var yourAge = currentYear - birthYear;
	return yourAge;
}
calculateAge(1986, currentYear);
calculateAge(1976, currentYear);
calculateAge(1926, currentYear);
*/

//------------------------------------------------------------------------------------------------------------------------------------------//
// Task 2.... The lifetime Supply Calculator
function calculateSupply(age, amountPerDay) {
    var presentAge = document.getElementById("age").value;
    var dailyIntake = document.getElementById("bottlePerDay").value;
    var maxAge = document.getElementById("maxAge").value; // expected age till end of supply
    var totalNeeded = (dailyIntake * 365) * (maxAge - presentAge); // to calculate the lifetime Supply
    document.getElementById("output").innerHTML = "You will need " + totalNeeded + " supplies to last you until the ripe old age of " + maxAge + " years old";
}
/*function calculateSupply(age, amountPerDay){
	var maxAge= 150;   // expected age till end of supply
	var totalNeeded = (amountPerDay * 365)* (maxAge - age); // to calculate the lifetime
	return "You will need " + totalNeeded + " supplies to last you until the ripe old age of " + maxAge;
};
	
calculateSupply(45, 5);
calculateSupply(6, 5);
calculateSupply(78, 2);

*/
//------------------------------------------------------------------------------------------------------------------------------------------//
// Task 3 The Geometrizer
// The function to calculate the circumference of a circle
function calcCircumfrence(radius) {
    var rad = document.getElementById("radius").value;
    var circumfrence = 2 * rad * Math.PI; // formula for the circum of a circle
    document.getElementById("output1").innerHTML = "The Circumfrence of this circle is " + circumfrence + " .";
}

function calcArea(radius) {
    var rad = document.getElementById("radius").value;
    var area = Math.pow(rad, 2) * Math.PI; // formula for the area of a circle
    document.getElementById("output1").innerHTML = "The Area of this circle is " + area + " .";
}

//------------------------------------------------------------------------------------------------------------------------------------------//
// Task 4 The temperature conversion script (Task 4)
function celsiusToFahrenheit() {
    var c = document.getElementById("celsius").value;
    var f = c * 9 / 5 + 32;
    document.getElementById("result").innerHTML = c + '\xB0C is ' + f + ' \xB0F.';
}

function fahrenheitToCelsius() {
    var f = document.getElementById("fahrenheit").value;
    var c = (f - 32) * 5 / 9;
    document.getElementById("result").innerHTML = f + '\xB0F is ' + c + ' \xB0C.';
}

//------------------------------------------------------------------------------------------------------------------------------------------//