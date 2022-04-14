const nextBtn = document.querySelector("#nextPage");
const previousBtn = document.querySelector("#previousPage");

nextBtn.addEventListener("click", nextPage);
previousBtn.addEventListener("click", previousPage);

function nextPage() {
  let values = pokemonUrl.split("=");

  let offset = parseInt(values[1].substring(0, values[1].indexOf("&"))) + 20;

  pokemonUrl =
    "https://pokeapi.co/api/v2/pokemon?offset=" + offset + "&limit=20";

  APIGetAllPokemons();
}

function previousPage() {
  let values = pokemonUrl.split("=");

  let offset = parseInt(values[1].substring(0, values[1].indexOf("&"))) - 20;

  pokemonUrl =
    "https://pokeapi.co/api/v2/pokemon?offset=" + offset + "&limit=20";

  APIGetAllPokemons();
}
