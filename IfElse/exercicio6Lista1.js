var rs = require("readline-sync")
var sexo = rs.question("escolha seu sexo [1] feminino. [2] masculino. ")
var altura = rs.questionFloat ("qual sua altura? ")

if (sexo == 2){
    var pesoIdealM = (72.7 * altura)-58
    console.log ("Seu peso ideal é: " + pesoIdealM.toFixed(3) + " !")
}
else {
    var pesoIdealF = (62.1 * altura)-44.7
    console.log ("Seu peso ideal é: " + pesoIdealF.toFixed(3) + " !")
}