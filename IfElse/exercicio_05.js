var rs = require("readline-sync");
var num1 = rs.questionInt("insira um numero ");
var num2 = rs.questionInt("insira outro numero ");
var num3 = rs.questionInt("insira um ultimo numero ");

var aux = num1;

if(num2 < num1){
 aux=num2;
 num2=num1;
 num1=aux;
}

if(num3 < num1){
 aux=num3;
 num3=num1;
 num1=aux;
}

if(num3 < num2){
 aux=num3;
 num3=num2;
 num2=aux;
}

console.log(num1 + " " + num2 + " " + num3)


