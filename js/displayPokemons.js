'use strict'

const divPokemons = document.querySelector("#div-pokemons");
const tablePokemons = document.querySelector("#table-pokemons");
const tableMyPokemons = document.querySelector("#table-my-pokemons");

//Runs in the fetchPokemon script
function displayPokemonFromMap() {
  let index = 1;
  pokemonMap.forEach((value, key) => {
    let rowCount = tablePokemons.rows.length;
    let row = tablePokemons.insertRow(rowCount);
    let colCount = 0;
    let cell;
    row.id = rowCount + "";

    cell = row.insertCell(colCount++);
    const pTag = document.createElement("p");
    pTag.textContent = index;
    cell.appendChild(pTag);


    cell = row.insertCell(colCount++);
    const aTag = document.createElement("a");
    aTag.textContent = capitalizeFirstLetter(key);
    aTag.href = value;
    cell.appendChild(aTag);

    cell = row.insertCell(colCount++);
    const addInput = document.createElement("input");
    addInput.type = "button";
    addInput.textContent = "add";
    addInput.value = "add pokemon";
    addInput.onclick = async function () {

      //insert to database here
      await postPokemon(key, value);

      insertPokemonDataToTable();

      //Remove this line and display the database result ind the pokemonMyTable
      //tableMyPokemons.children[0].appendChild(row);
    }
    cell.appendChild(addInput);

    index++;
  });
}

async function insertPokemonDataToTable() {

  //clear table here
  /*for (let i = 1; i < tableMyPokemons.rows.length; i++) {
    tableMyPokemons.deleteRow(i);
  }*/

  await getAllPokemons();

  //remove and make it so it's only the table that reloads
  window.location.reload();
}


function displayPokemonFromMyMap() {
  let index = 1;

  myPokemonsMap.forEach((value, key) => {

    let rowCount = tableMyPokemons.rows.length;
    let row = tableMyPokemons.insertRow(rowCount);
    let colCount = 0;
    let cell;
    row.id = rowCount + "";

    cell = row.insertCell(colCount++);
    const pTag = document.createElement("p");
    pTag.textContent = index;
    cell.appendChild(pTag);


    cell = row.insertCell(colCount++);
    const aTag = document.createElement("a");
    aTag.textContent = capitalizeFirstLetter(key);
    aTag.href = value.url;
    cell.appendChild(aTag);

    cell = row.insertCell(colCount++);
    const addInput = document.createElement("input");
    addInput.type = "button";
    addInput.textContent = "remove";
    addInput.value = "remove pokemon";
    addInput.onclick = function () {

      //tableMyPokemons.deleteRow(row.rowIndex);
      restDeletePokemon(myPokemonsMap.get(key));

    }
    cell.appendChild(addInput);

    index++;
  });
}


async function restDeletePokemon(pokemon) {

  const url = "http://localhost:8080/pokemon/" + pokemon.id;

  const fetchOptions = {
    method: "DELETE",
    header: {
      "content-type": "application/json"
    },
    body: ""
  };

  const response = await fetch(url, fetchOptions);

  if (!response.ok) {
    alert("error when deleting a pokemon");
  }

//remove and make it so it's only the table that reloads
  window.location.reload();
}

















