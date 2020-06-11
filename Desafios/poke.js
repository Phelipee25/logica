const rs = require('readline-sync')
const axios = require('axios')
const fs = require('fs')

// let urlNome = 'https://pokeapi.co/api/v2/pokemon/'
// let urlTipo = 'https://pokeapi.co/api/v2/type/'
// let urlHabilidade = 'https://pokeapi.co/api/v2/ability/'

// let pkm = rs.question('Digite o nome ou id do pokemon que quer consultar: ')
let pkm = document.getElementById("busca").nodeValue;
pkm.addEventListener("keydown", function(event){
    if (event.keyCode === 13){
        console.log(pkm);
    }
});

// async function pegaNomePKM() {
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
                constructor(name, habilidade, tipo) {
                    this.name = name
                    this.habilidade = habilidade
                    this.tipo = tipo
                }
            }
            let PKM = new PokemonCompleto(pokename, habilidades, tipos)
            async function pegaTipoPKM() { //essa função pega os nomes do tipo do pkm
                for(let i = 0; i < PKM.tipo.length; i++){
                axios.get(`https://pokeapi.co/api/v2/type/${PKM.tipo[i]}`)
                    .then((resposta) => {
                        let tipo = resposta.data
                        let tipoUm = tipo.name
                        console.log(tipoUm)
                    })
                }
            }
            async function pegaHabilidadePKM(x) {    //essa função pega os nomes das habilidades e seus efeitos
                for(let i = 0; i < PKM.habilidade.length; i++){
                axios.get(`https://pokeapi.co/api/v2/ability/${PKM.habilidade[i]}`)
                    .then((resposta) =>{
                    let efeito = resposta.data
                    let efxUm = efeito.name
                    var efxDesc = efeito.effect_entries[1].effect
                    setTimeout((x)=>{
                        console.log(efxUm + '\n' + '\n' + efxDesc + '\n')
                    }, 1000)
                                        
                    })
                }
            }
            async function pegaDanoPKM(x) { //essa função vai mostrar fraquezas e fortitudes dos tipos do pkm
                for(let i = 0; i < PKM.tipo.length; i++){
                    axios.get(`https://pokeapi.co/api/v2/type/${PKM.tipo[i]}`)
                    .then((resposta) => {
                        let tipoDano = resposta.data
                        let danos = tipoDano.damage_relations
                        let dobroDe = []
                        let dobroEm = []
                        let metadeDe = []
                        let metadeEm = []
                        let zeroDe = []
                        let zeroEm = []
                        setTimeout((x)=>{
                            for(let i = 0; i < danos.double_damage_from.length; i++){
                                dobroDe.push(danos.double_damage_from[i].name)
                            }
                            for(let i = 0; i < danos.double_damage_to.length; i++){
                                dobroEm.push(danos.double_damage_to[i].name)
                            }
                            for(let i = 0; i < danos.half_damage_from.length; i++){
                                metadeDe.push(danos.half_damage_from[i].name)
                            }
                            for(let i = 0; i < danos.half_damage_to.length; i++){
                                metadeEm.push(danos.half_damage_to[i].name)
                            }
                            for(let i = 0; i < danos.no_damage_from.length; i++){
                                zeroDe.push(danos.no_damage_from[i].name)
                            }
                            for(let i = 0; i < danos.no_damage_to.length; i++){
                                zeroEm.push(danos.no_damage_to[i].name)
                            }
                        }, 3000)
                    })
                }
            }
            pegaTipoPKM(PKM)
            pegaHabilidadePKM(PKM)
            pegaDanoPKM(PKM)
        })
// }













// async function SalvaDEX() {

// }