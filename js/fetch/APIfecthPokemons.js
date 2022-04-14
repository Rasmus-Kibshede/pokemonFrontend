let pokemonUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";
let pokemonMap = new Map();

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//---------------------- Get all pokemons from API
async function APIGetAllPokemons() {
  pokemonMap.clear();
  await fetch(pokemonUrl)
    .then((res) => res.json())
    .then((res) => {
      res.results.forEach((pokemon) => {
        pokemonMap.set(pokemon.name, pokemon.url);
      });
    })
    .catch(() => console.log("error, in fetch pokemons from url"));

  apiDisplayPokemon();
}

APIGetAllPokemons();
