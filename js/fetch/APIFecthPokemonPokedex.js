let storage = JSON.parse(localStorage.getItem("pokemon"));

let pokeDex;

async function APIPokedex() {
  await fetch(storage.url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      pokeDex = data;
    })
    .catch(() => console.log("error, in fetch pokedex from url"));

  displayPokemonInfo(pokeDex);
}

APIPokedex();

