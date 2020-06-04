var rs = require ('readline-sync')
var axios = require("axios")
var fs = require('fs')

var pkm = rs.question('Digite o Nome ou Id do Pokemon para consulta: ').toLowerCase()

axios.get(`https://pokeapi.co/api/v2/pokemon/${pkm}`)
    .then((resposta) => {
        var pokemon = resposta.data
        var pokename = pokemon.name
        var habilidades = []
        pokemon.abilities.forEach((habilidade) => {
            habilidades.push(habilidade.ability.name)
        })
        var tipos = []
        pokemon.types.forEach((tipo) => {
            tipos.push(tipo.type.name)
        })
        class PokemonCompleto {
            constructor(name, habilidade, tipo){
                this.name = name
                this.habilidade = habilidade
                this.tipo = tipo
            }
        }
        var pkmCompleto = new PokemonCompleto(pokename, habilidades, tipos)   
        var dexEmString = JSON.stringify(pkmCompleto)
        var caminhoDaDex = 'pokeDEX.json'
        fs.writeFileSync(caminhoDaDex, dexEmString)
    })
    .catch((erro) => console.log(erro))