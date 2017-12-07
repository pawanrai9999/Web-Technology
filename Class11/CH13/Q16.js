/*  Author : PAWAN KUMAR
    DATE : 07 - DECEMBER - 2017
    This program takes radius of circle and displays area and perimeter
*/

var circleRadius = parseInt(prompt("Please Enter The Radius of Circle: "));

// area = pi*r^2
var circleArea = 3.14 * circleRadius * circleRadius;
// perimeter = 2*pi*r
var circlePerimeter = 2 * 3.14 * circleRadius;

document.writeln("Area: " + circleArea);
document.writeln("Perimeter: " + circlePerimeter);
