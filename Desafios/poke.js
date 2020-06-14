/*Ids do HTML
busca = input de chamar pkm
nomePKM = revela o nome do pkm
sprite = revela a img do pkm
ability = revela as habilidade
type = revela os tipos
confirma = tecla pra confirmar o input*/

// let pkm = document.getElementById("busca").value
// console.log(pkm)
async function confirmaChamada(){
    let pkm = document.getElementById("busca").value
    console.log(pkm)
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pkm}`)
    .then((resposta) =>{
        let pokemon = resposta.data
        let nome = pokemon.name
        let id = pokemon.id
        console.log(nome)
        mostraNomeNoHtml(nome)
        document.getElementById('sprite').src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`

    })
}
function mostraNomeNoHtml(nomenohtml){
    let nomePk = document.getElementById("nomePKM")
    nomePk.innerHTML = nomenohtml
}