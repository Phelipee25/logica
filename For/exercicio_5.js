var rs = require("readline-sync")

// var num = rs.questionInt("digite um numero para fatorar  ")
//  var fator = 1
    for (var i = 1; i = true; i++){
        var fator = 1
        var b = rs.question ("Vamos fatorar?  ")
        if (b == 'sim'){
        var num = rs.questionInt("digite um numero para fatorar  ")
            for (var i = 1; i <= num; i++){
            fator = i * fator
            }
            console.log(fator)
        }
        else {
        break
        }
    }