const statsDiv = document.querySelector("#stats");

function getElement(text) {
  return document.querySelector(text);
}

function displayPokemonInfo(pokeDex) {
  getElement("#pokedexImg").src = pokeDex.sprites.other.dream_world.front_default;

  for (let i = 0; i < pokeDex.stats.length; i++) {
    let tag = document.createElement("span");
    tag.textContent = pokeDex.stats[i].stat.name + " " + pokeDex.stats[i].base_stat;
    statsDiv.appendChild(tag);
  }
}

