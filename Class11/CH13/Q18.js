/*  Author : PAWAN KUMAR
    DATE : 07 - DECEMBER - 2017
    This program takes 3 integer and displays the greatest one
*/

var firstInt = parseFloat(prompt("Enter first integer: "));
var secondInt = parseFloat(prompt("Enter second integer: "));
var thirdInt = parseFloat(prompt("Enter third integer: "));

if(firstInt > secondInt){
  if(firstInt > thirdInt){
    document.writeln("Largest integer: " + firstInt);
  } else {
    document.writeln("Largest integer: " + thirdInt);
  }
} else {
  if(secondInt > thirdInt){
    document.writeln("Largest integer: " + secondInt);
  } else {
    document.writeln("Largest integer: " + thirdInt);
  }
}
