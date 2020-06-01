var a = "abelha"
var palavra = a.split('')
for (var i = 0; i < a.length; i++){
        if(a.charAt(i) ===  'a') {
        palavra[i] = a.charAt(i).toUpperCase();
    }
}
console.log (palavra.join(''))
