var rs = require("readline-sync")
var Senha = rs.question ("Por favor insira a sua Senha: ")

if (Senha == 1234){
    console.log("ACESSO PERMITIDO")
}
else {
    console.log("ACESSO NEGADO!")
}
