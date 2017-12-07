/*  Author : PAWAN KUMAR
    DATE : 07 - DECEMBER - 2017
    This program takes principal, rate and time to calculate simple interest
*/

var principal = parseFloat(prompt("Enter the principal: "));
var rate = parseFloat(prompt("Enter the rate: "));
var time = parseFloat(prompt("Enter the time: "));

//Interest = principal * rate * time
var interest = principal * rate * time;
alert("Interest : " + interest);
document.write("Interest : " + interest);
