//function convertPokemonTypesToLi(pokemonTypes){
//    return pokemonTypes.map((typeSlot)=>`<li class="type>${typeSlot.type.name}</li>`)
//}

let offset=0
let limit = 20
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton=document.getElementById('loadMoreButton')

function convertPokemonToLi(pokemon){
    return `
        <li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                
                <div class="detail">
                    <ol class="types ">
                        
                    ${pokemon.types.map((type)=>`<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}">
                </div>
            </li>
    `
}



function loadPokemonItems(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml= pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML+=newHtml
})
}

loadPokemonItems(offset,limit)

loadMoreButton.addEventListener('click',()=>{
    offset +=limit
    loadPokemonItems(offset,limit)
})