const rs = require('readline-sync')
const axios = require ('axios')

var nomeDoMunicipio = rs.question('Digite um nome de um municipio:  ').toLowerCase()

var apiDeMunicipios = 'https://servicodados.ibge.gov.br/api/v1/localidades/municipios'

axios.get(apiDeMunicipios)
    .then( (resposta) => {
    var municipios = resposta.data
        // console.log(municipios)
    var municipiosEncontrados = municipios.find( (identificador) => {
        // console.log(identificador.nome)
        if(nomeDoMunicipio == identificador.nome.toLowerCase()){
            return true
        }
        return false
    })
    console.log(municipiosEncontrados)
})