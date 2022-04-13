let pokemonUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";
let pokemonMap = new Map();

const nextBtn = document.querySelector("#nextPage");
const previousBtn = document.querySelector("#previousPage");

nextBtn.addEventListener("click", nextPage);
previousBtn.addEventListener("click", previousPage);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function nextPage() {

  let values = pokemonUrl.split("=");

  let offset = parseInt(values[1].substring(0, values[1].indexOf("&"))) + 20;

  pokemonUrl = "https://pokeapi.co/api/v2/pokemon?offset=" + offset + "&limit=20";

  fetchPokemons();
}

function previousPage() {

  let values = pokemonUrl.split("=");

  let offset = parseInt(values[1].substring(0, values[1].indexOf("&"))) - 20;

  pokemonUrl = "https://pokeapi.co/api/v2/pokemon?offset=" + offset + "&limit=20";

  fetchPokemons();
}


//---------------------- Get all pokemons from API
async function fetchPokemons() {
  pokemonMap.clear();
  await fetch(pokemonUrl)
    .then((res) => res.json())
    .then((res) => {
        res.results.forEach((pokemon) => {
          pokemonMap.set(pokemon.name, pokemon.url);
        })
      }
    )
    .catch(() => console.log("error, in fetch pokemons from url"));

  apiDisplayPokemon();
}

fetchPokemons();

//----------------------

const getPokemonsUrl = "http://localhost:8080/pokemon";
let myPokemonsMap = new Map();

async function getAllPokemons() {
  myPokemonsMap.clear();
  await fetch(getPokemonsUrl)
    .then((res) => res.json())
    .then((pokemon) =>
      pokemon.forEach((pokemon) => {
        myPokemonsMap.set(pokemon.pokeName, pokemon);
      })
    );

  dbDisplayPokemon();
}

getAllPokemons();

