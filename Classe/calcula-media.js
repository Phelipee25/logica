var Media = function calculoDeMedia(arr){
    this.arr = arr
    this.pegaNumero = function(){
    for(let i = 0; i<arr.length;i++){
        pegaNumero = pegaNumero + arr[i]
    }
    pegaNumero = pegaNumero / arr.length
    return pegaNumero
}
}

exports.Media = Media;