var anoNascimento
var rs = require("readline-sync")

anoNascimento = rs.question("Qual o ano em que voce nasceu?")

if (anoNascimento >= 2005){
    console.log("Você não pode votar")
}
else if (anoNascimento > 2003){
    console.log("voce pode votar, mas nao e obrigado.")
}
else if (anoNascimento <= 1965){
    console.log("voce nao e mais obrigado a votar")
}
else{
    console.log("voce e obrigado a votar!")
}
