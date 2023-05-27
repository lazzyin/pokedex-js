
/*const Pokeapi={}

function convertPokeapiDetailToPokemon(pokeDetail){
    const pokemon=new Pokemon()
    pokemon.name=pokeDetail.name
    pokemon.number=pokeDetail.id

    const types =pokeDetail.types.map((typeSlot)=>typeSlot.type.name)
    const[type]=types
    pokemon.types=types
    pokemon.type=type
    pokemon.photo=pokeDetail.sprites.other.dream_world.front_default

    return pokemon

}

Pokeapi.getPokemonDetail= (pokemon) =>{
    return fetch(pokemon.url)
    .then((response)=>response.json())
    .then(convertPokeapiDetailToPokemon)
}

Pokeapi.getPokemons = (offset=0,limit=10)=>{
     const url=`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`

   return fetch(url)
    .then((response)=>response.json())
    .then((jsonBody)=>jsonBody.results)
    .then((pokemons)=>pokemons.map(Pokeapi.getPokemonDetail))
    .then((detailRequest)=>Promise.all(detailRequest))
    .then((pokemonsDetails)=>{
        pokemonsDetails
        console.log(pokemonsDetails)
    })
    .catch((error)=>console.log(error))
}*/


const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}