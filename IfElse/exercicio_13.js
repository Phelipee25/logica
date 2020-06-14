var rs = require("readline-sync")
var num = rs.questionInt ("Digite um numero ")

if (num == 0){
    console.log("seu numero é zero, e ele não se multiplica")
}
else if(num > 0){
num = num * 2
console.log ("o dobro é " + num + "!")
}
else if(num<0){
    num = num * 3
    console.log("o triplo é " + num + "!")
}
