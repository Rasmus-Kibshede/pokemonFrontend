"use strict";

const url = "http://localhost:8080/pokemon";

const pokemon = {
  pokeIndex: "",
  pokeName: "",
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

async function postPokemon(key, value) {
  pokemon.pokeIndex = findPokemonIndex(value);
  pokemon.pokeName = key;
  pokemon.url = value;

  body = JSON.stringify(pokemon);
  postPokemonRequest.body = body;

  await fetch(url, postPokemonRequest).catch((err) => console.log(err));
  console.log("POST pokemon to DB - 1");
  console.log(key + " " + value);
}


function findPokemonIndex(url) {
  return url.split("/")[6];
}
