/*  Author : PAWAN KUMAR
    DATE : 07 - DECEMBER - 2017
    This program takes sides of triangle and tells if it is right angle or not
*/

var a = eval(prompt("Enter 1 side: "));
var b = eval(prompt("Enter 2 side: "));
var c = eval(prompt("Enter 3 side: "));

if(a>b&&a>c){
  if((a*a)==(b*b)+(c*c))
  document.writeln("It is a right-angled triangle");
  else
  document.writeln("It is not a right-angled triangle");
}
if(b>c&&b>a) {
  if((b*b)==(c*c)+(a*a))
  document.writeln("It is a right-angled triangle");
  else
  document.writeln("It is not a right-angled triangle");
}
if(c>a&&c>b){
  if((c*c)==(a*a)+(b*b))
  document.writeln("It is a right-angled triangle");
  else
  document.writeln("It is not a right-angled triangle");
}
