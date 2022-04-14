const statsDiv = document.querySelector("#stats");

function getElement(text) {
  return document.querySelector(text);
}

function displayPokemonInfo(pokeDex) {
  getElement("#pokedexImg").src = pokeDex.sprites.other.dream_world.front_default;

  for (let i = 0; i < pokeDex.stats.length; i++) {

    let div = document.createElement("div");

    let key = document.createElement("span");
    key.textContent = pokeDex.stats[i].stat.name.toUpperCase();
    div.appendChild(key);

    let value = document.createElement("span");
    value.textContent = pokeDex.stats[i].base_stat;
    div.appendChild(value);
    statsDiv.appendChild(div);
  }
}

