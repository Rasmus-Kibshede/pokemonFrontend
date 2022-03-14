const pokemonUrl = "https://pokeapi.co/api/v2/pokemon";
let pokemonMap = new Map();

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//---------------------- Get all pokemons from API
async function fetchPokemons() {
  await fetch(pokemonUrl)
    .then((res) => res.json())
    .then((res) =>
      res.results.forEach((pokemon) => {
        pokemonMap.set(pokemon.name, pokemon.url);
      })
    )
    .catch(() => console.log("error, in fetch pokemons from url"));

  displayPokemonFromMap();
}

fetchPokemons();

//----------------------


const getPokemonsUrl = "https://pokemonkea.azurewebsites.net/pokemon";
let myPokemonsMap = new Map();

async function getAllPokemons() {
  await fetch(getPokemonsUrl)
    .then((res) => res.json())
    .then((pokemon) =>
      pokemon.forEach((pokemon) => {
        myPokemonsMap.set(pokemon.name, pokemon);
      })
    );

  displayPokemonFromMyMap();
}

getAllPokemons();
