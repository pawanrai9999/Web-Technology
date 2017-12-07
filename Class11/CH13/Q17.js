/*  Author : PAWAN KUMAR
    DATE : 07 - DECEMBER - 2017
    This program takes side and show area and perimeter of rectangle
*/

var rectLength = parseFloat(prompt("Enter The Length of The Rectangle: "));
var rectBreath = parseFloat(prompt("Enter The Breath of The Rectangle: "));

// area = Length * breath;
var rectArea = rectLength * rectBreath;
var rectPrimeter = 2 * (rectLength + rectBreath);

document.writeln("Area of rectangle: " + rectArea);
document.writeln("Perimeter of rectangle: " + rectPerimeter);
