/*  Author : PAWAN KUMAR
    DATE : 07 - DECEMBER - 2017
    This program takes input and tells largest and smallest one.
*/

var var firstInt = parseFloat(prompt("Enter first integer: "));
var secondInt = parseFloat(prompt("Enter second integer: "));
var thirdInt = parseFloat(prompt("Enter third integer: "));

if(firstInt > secondInt){
  if((firstInt > thirdInt) && (secondInt > thirdInt)){
    document.writeln("Largest number: " + firstInt);
    document.writeln("Smallest number: " + thirdInt);
  } else if((firstInt > thirdInt) && (secondInt < thirdInt)){
    document.writeln("Largest number: " + firstInt);
    document.writeln("Smallest number: " + secondInt);
  }
} else if
/* Under development*/
