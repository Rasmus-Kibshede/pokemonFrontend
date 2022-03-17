const url = "https://pokemonkea.azurewebsites.net/pokemon";

const pokemon = {
  name: "",
  url: "",
};

let body = {};

const postPokemonRequest = {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: body,
};

function postPokemon(key, value) {
  pokemon.name = key;
  pokemon.url = value;

  body = JSON.stringify(pokemon);
  postPokemonRequest.body = body;

  fetch(url, postPokemonRequest).catch((err) => console.log(err));
}
