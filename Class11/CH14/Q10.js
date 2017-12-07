/*  Author : PAWAN KUMAR
    DATE : 07 - DECEMBER - 2017
    This program takes electricity unit and shows the price
*/

var electricityUnit = parseFloat(prompt("Enter the electricity unit: "));

if(electricityUnit <= 100){
  document.writln("RS. " + electricityUnit*1);
} else if((electricityUnit <= 200) && (electricityUnit > 100)){
  document.writeln("RS. " + (100 + (1.2*(electricityUnit-100))));
} else if((electricityUnit <= 250) && (electricityUnit > 200)){
  document.writeln("RS. " + (100 + (1.2*100) + (1.5*(electricityUnit-200))));
} else if((electricityUnit > 250)){
  document.writeln("RS. " + (100 + (1.2*100) + (1.5*50) + (2.0*(electricityUnit-250)));
}
