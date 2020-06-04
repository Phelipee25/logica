// var rs = require('readline-sync')
// var axios = require('axios')
// var nomeMunicipio = rs.question('Digite um municipio:  ').toLowerCase()
// // var apiDeMunicipios = 'https://servicodados.ibge.gov.br/api/v1/localidades/municipios'
// axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/municipios')
// .then((resposta) => {
//     var municipio = resposta.data
//     var municipioEncontrado = municipio.find((identificador) => {
//         if(nomeMunicipio == identificador.nome.toLowerCase()){
//         return true
//         }
//         return false
//     })
//     console.log(municipioEncontrado)
// })


const rs = require('readline-sync')
const axios = require('axios')

var nomeDoMunicipio = rs.question('Digite um nome de um municipio:  ').toLowerCase()


var apiDeMunicipios = 'https://servicodados.ibge.gov.br/api/v1/localidades/municipios'

axios.get(apiDeMunicipios)
    .then((resposta) => {
        var municipios = resposta.data
        var municipiosEncontrados = municipios.find((identificador) => {
            var nome = identificador.nome.toLowerCase()
            if (nomeDoMunicipio == nome) {
                return true
            }
            return false
        })
        console.log(municipiosEncontrados.nome)
    })
    .catch((erro) => console.log(erro))
