"use strict";

const divPokemons = document.querySelector("#div-pokemons");
const tablePokemons = document.querySelector("#table-pokemons");
const tableMyPokemons = document.querySelector("#table-my-pokemons");

/*function refreshTable() {
  $("#tableMyPokemons").load("index.html #tableMyPokemons");
}*/


//Runs in the fetchPokemon script
function apiDisplayPokemon() {


  //fix so the doesnt remove the first tr.
  while (tablePokemons.hasChildNodes()) {
    tablePokemons.removeChild(tablePokemons.lastChild);
  }

  let index = 1;
  pokemonMap.forEach((value, key) => {
    let rowCount = tablePokemons.rows.length;
    let row = tablePokemons.insertRow(rowCount);
    let colCount = 0;
    let cell;
    row.id = rowCount + "";

    cell = row.insertCell(colCount++);
    const pTag = document.createElement("p");
    pTag.textContent = findPokemonIndex(value);
    cell.appendChild(pTag);

    cell = row.insertCell(colCount++);
    const aTag = document.createElement("a");
    aTag.textContent = capitalizeFirstLetter(key);
    aTag.href = value;
    cell.appendChild(aTag);

    cell = row.insertCell(colCount++);
    const addInput = document.createElement("input");
    addInput.type = "button";
    addInput.value = "Catch pokemon";
    addInput.onclick = async function () {

      //TODO doesnt work like it should. Work correctly in debug mode
      await postPokemon(key, value);
      await getAllPokemons();

    };
    cell.appendChild(addInput);

    index++;
  });
}


function dbDisplayPokemon() {

  console.log("display all pokemons - 3")

  //fix so the doesnt remove the first tr.
  while (tableMyPokemons.hasChildNodes()) {
    tableMyPokemons.removeChild(tableMyPokemons.lastChild);
  }

  let index = 1;
  myPokemonsMap.forEach((value, key) => {
    let rowCount = tableMyPokemons.rows.length;
    let row = tableMyPokemons.insertRow(rowCount);
    let colCount = 0;
    let cell;
    row.id = rowCount + "";

    cell = row.insertCell(colCount++);
    const pTag = document.createElement("p");

    pTag.textContent = value.pokeIndex;
    cell.appendChild(pTag);

    cell = row.insertCell(colCount++);
    const aTag = document.createElement("a");
    aTag.textContent = capitalizeFirstLetter(key);
    aTag.href = value.url;
    cell.appendChild(aTag);

    cell = row.insertCell(colCount++);
    const removeInput = document.createElement("input");
    removeInput.type = "button";
    removeInput.value = "Release pokemon";
    removeInput.onclick = async function () {
      tableMyPokemons.deleteRow(row.rowIndex);
      await restDeletePokemon(myPokemonsMap.get(key));

    };
    cell.appendChild(removeInput);

    index++;
  });
}

async function restDeletePokemon(pokemon) {
  const url = "http://localhost:8080/pokemon/" + pokemon.id;

  const fetchOptions = {
    method: "DELETE",
    header: {
      "content-type": "application/json",
    },
    body: "",
  };

  const response = await fetch(url, fetchOptions);

  if (!response.ok) {
    alert("error when deleting a pokemon");
  }
}
