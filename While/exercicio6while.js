var rs = require("readline-sync")

var a = rs.question ("Insira 0 para sair ou qualquer outra tecla para o continuar  ")

while (true){
    if (a == 0){
        break
    }
    else {
        a = rs.question ("Insira 0 para sair ou qualquer outra tecla para o continuar  ")
    }
}