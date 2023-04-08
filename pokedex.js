const divPokeDex$$ = document.querySelector("#card");
// const divPoketitulo$$ = document.querySelector(".titulo");

let pokemons = [];

//Traer los pokemones con fetch
async function getPoke() {
  const pokemons = [];
  for (let i = 1; i <= 150; i++) {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then((response) => response.json())
      .then((pokemon) => {
        const objetoPokemon = {
          name: pokemon.name,
          image: pokemon.sprites.other.dream_world.front_default,
          types: pokemon.types,
          id: pokemon.id,
        };
        // console.log(pokemon)
        pokemons.push(objetoPokemon);
      });
  }
  return pokemons;
}

//generar el html con   el nombre y la imagen del pokemon
function generateHTML(name, image) {
  const divContainer = document.createElement("div");
  divContainer.classList.add("pokemonCard");
  const h3$$ = document.createElement("h3");
  h3$$.classList.add("nombres")
  const img$$ = document.createElement("img");
  h3$$.innerHTML = name;
  img$$.src = image;
  divContainer.appendChild(h3$$);
  divContainer.appendChild(img$$);
  divPokeDex$$.appendChild(divContainer);
}

//Imprime el html, a partir de la funcion de la generacion, asignando los valores correspondientes
async function printInHTML(search = "", pokemons) {
  //Esta es la manera de limpiar el html antes de llenarlo, por que si no estuviera esta linea, se sobreescribiria cada vez que se llena
  divPokeDex$$.innerHTML = "";

  for (let i = 0; i < pokemons.length; i++) {
    generateHTML(pokemons[i].name, pokemons[i].image, pokemons[i].types, pokemons[i].id);
  }
}
// se utiliza para cargar la página web y ejecutar 
// las acciones después de que se haya cargado completamente.
window.onload = async () => {
  pokemons = await getPoke();
  printInHTML("", pokemons);
};

const searchInput = document.querySelector('#searchInput');
searchInput.addEventListener('input', () => {
  const searchValue = searchInput.value.toLowerCase();
  const filteredPokemons = pokemons.filter(pokemon => pokemon.name.includes(searchValue));
  printInHTML(searchValue, filteredPokemons);
});



