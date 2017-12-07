/*  Author : PAWAN KUMAR
    DATE : 07 - DECEMBER - 2017
    This program is rewritten
*/
function checkTriangle(a,b,c){
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
}

var aa = parseInt(prompt("Enter a side1: "));
var ab = parseInt(prompt("Enter a side1: "));
var ac = parseInt(prompt("Enter a side1: "));

checkTriangle(aa, ab, ac);
