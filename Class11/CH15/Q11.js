/*  Author : PAWAN KUMAR
    DATE : 07 - DECEMBER - 2017
    This program is rewritten
*/

function checkLeap(year){
  if((year%400) == 0){
    document.write("This is leap year.");
  } else if((year%100) == 0){
    document.write("This is not leap year.");
  } else if((year%4) == 0){
    document.write("This is leap year.");
  } else {
    document.write("This is not leap year.");
  }
}

var a = parseInt(prompt("Enter the year: "));
checkLeap(a);
