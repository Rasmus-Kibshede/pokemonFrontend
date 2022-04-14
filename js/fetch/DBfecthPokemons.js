const getPokemonsUrl = "http://localhost:8080/pokemon";
let myPokemonsMap = new Map();

async function DBGetAllPokemons() {
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

DBGetAllPokemons();
