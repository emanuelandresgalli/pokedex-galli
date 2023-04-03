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

//generar el html a partir de el nombre y la imagen del pokemon
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

//Imprimir el html, a partir de la funcion de la generacion, asignando los valores correspondientes
async function printInHTML(searchTerm = "", pokemons) {
  //Esta es la manera de limpiar el html antes de llenarlo, por que si no estuviera esta linea, se sobreescribiria cada vez que se llena
  divPokeDex$$.innerHTML = "";

  for (let i = 0; i < pokemons.length; i++) {
    generateHTML(pokemons[i].name, pokemons[i].image, pokemons[i].types, pokemons[i].id);
  }
}

window.onload = async () => {
  pokemons = await getPoke();
  printInHTML("", pokemons);
};











// const getPokemon = () => {
//    const linkPrincipal = 'https://pokeapi.co/api/v2/pokemon/'
//    const promesasPokemon = []
//    for (let numeroPokemon = 1; numeroPokemon <= 150; numeroPokemon++) {
//      const acceso = fetch(`${linkPrincipal}${numeroPokemon}`)
//        .then((respuesta) => respuesta.json())
//      promesasPokemon.push(acceso)
//    }
//    return Promise.all(promesasPokemon)
//  }
 
//  getPokemon().then((pokemones) => {
//    const nuevoArray = pokemones.map((pokemon) => {
//      return {
//        nombre: pokemon.name,
//        imagen: pokemon.sprites.front_default,
//      }
//    })
//    console.log(nuevoArray)
//  })

//  const contenedor = document.querySelector('.container')
//  nuevoArray.forEach((pokemon) => {
//    const figure = document.createElement('figure')
//    const img = document.createElement('img')
//    img.src = pokemon.imagen
//    img.alt = pokemon.nombre
//    const nombre = document.createElement('figcaption')
//    nombre.textContent = pokemon.nombre
//    figure.appendChild(img)
//    figure.appendChild(nombre)
//    contenedor.appendChild(figure)
//  })







// pokemons = [];

// async function getPoke(){
//    const pokemons = [];
//    for (let i = 1; i <= 150; i++){
//       await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
//       Then((response)=> response.json())
//       Then((pokemon)=>
//       pokemons.push({
//          name: pokemon.name,
//          image: pokemon.sprites.other.dream_world.front_default,
//       })
//       );
//    }
//    return pokemons;
// }
// console.log(getPoke());








// const li$$ = document.createElement('li');
//  ol$$.appendChild(li$$)
//  li$$.innerHTML = `${pokemones}`;

// const getPokemon = async () => {
   
//  const response = await fetch ('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0')
 
//  const res = await response.json();

// //  console.log(res.results)
// return res.results

// }

// const getPokemon = ()=> {
//    const linkPrincipal = 'https://pokeapi.co/api/v2/pokemon/'
//    const listaPokemon = []
//    for (let numeroPokemon = 1; numeroPokemon <=150; numeroPokemon++){
//       const acceso = fetch (`${linkPrincipal}${numeroPokemon}`)
//       .then((respuesta)=> respuesta.json())
//       .then((res)=> console.log(res));
//    }
//    return listaPokemon;
   
// }
// getPokemon();

// const newLista = res.map(pokemon => pokemon.name)
// console.log(newLista);

// const mapPokemones = (pokemonesSinMapear) => {
//      return pokemonesSinMapear.map((pokemon)=> ({
//         nombre: pokemon.name,
//         imagen: pokemon.,
//      }))
//    }


//    const init = async () => {
      
//       const pokemones = await getPokemones();
//       const mappedCharacters = mapPokemones(pokemones)
//       drawCharacters(mappedCharacters)
//       drawInput(mappedCharacters)
  
  
  
//   }
//   init()







// const pokemon = res.map((res) => ({
//    name: res.name,
//    image: res.sprites.other.dream_world.front_default, 
// })

// const mapPokemones = (pokemones) => {
// // console.log(pokemones);
// return pokemones.map((pokemon)=>({
//    nombre: pokemon.name,
//    url: pokemon.sprites.other.dream_world.front_default,
// }))
// }






// const drawPokemones = (pokemonesMapeados) => {
//     const ol$$ = document.querySelector('#pokedex');
// //    //  div.appendChild(ol$$) 
// //    //  const li$$ = document.createElement('li');
// //    //  ol$$.appendChild(li$$)
// //    //  li$$.innerHTML=''
    
//     for (const pokemon of pokemonesMapeados) {
      
      
//         const figure$$ = document.createElement('figure');
//          ol$$.appendChild(figure$$)
//          const figCaption$$ = document.createElement('figcaption')
//          figure$$.appendChild(figCaption$$)
//          figCaption$$.textContent= pokemon.name

//          const img$$ = document.createElement('img')
//          figure$$.appendChild(img$$)
//          img$$.setAttribute('src', pokemon.sprites.other.dream_world.front_default)
//     }
// }

// const init = async () => {
//    const pokemones = await getPoke();
// //    console.log(pokemones);
// const mappedPokemones = mapPokemones(pokemones)
// // console.log(mappedPokemones);
// drawPokemones(mappedPokemones)
// }
// init()
// console.log(drawPokemones);








//   const get = () => {
//   fetch('https://pokeapi.co/api/v2/pokemon/')
//     .then((response)=>response.json())
//    .then((res)=> console.log(res))
//   }
// get();
// let pokemones =[]
//  for (let i = 0; i < 150; i++) {
//     // const element = res.results[i];
//   const 
    
//  }

 
 









// let pokemones = []

// const get = async () => {
//     let pokemon = [];
//     for (let i = 1; i <= 150; i++) {
       
//         await fetch("https://pokeapi.co/api/v2/pokemon/" +i)
//         .then((Response)=>Response.json()).then((res)=> pokemon.push(res))
        
//     }
//     return pokemon;
// }
// async function asignarPokemones (){
//     pokemones = await  get()
// }
// asignarPokemones()






