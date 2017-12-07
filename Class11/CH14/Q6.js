/*  Author : PAWAN KUMAR
    DATE : 07 - DECEMBER - 2017
    This program is rewritten
*/

var choice = eval(prompt("Enter your choice(1-7)"));

if((choice == 1) || (choice == 2)){
  document.writeln("Good Afternoon");
} else if((choice == 3) || (choice == 4) || (choice == 5)){
  document.writeln("Good Day");
} else if((choice == 6) || (choice == 7)){
  document.writeln("Good Evening");
} else {
  document.writeln("Good Day");
}
