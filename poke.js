
fetch('https://pokeapi.co/api/v2/pokemon/61/')
.then(respuesta => respuesta.json())
.then(pokemon => {
  let element = document.getElementById('elemento')
  element.innerHTML = `<p> Nombre: ${pokemon.name}<p>
  <img src='${pokemon.sprites.front_default}'><p> Experiencia inicial: ${pokemon.base_experience}<p><p> Altura: ${pokemon.height}<p><p> Peso: ${pokemon.weight}<p>`;
  console.log(pokemon)
})
.catch(err=>console.log(err))

fetch('https://pokeapi.co/api/v2/pokemon/342/')
.then(response => response.json())
.then(pokemon2 => {
  let element2 = document.getElementById('elemento2')
  element2.innerHTML = `<p> Nombre: ${pokemon2.name}<p>
  <img src='${pokemon2.sprites.front_default}'><p> Experiencia inicial: ${pokemon2.base_experience}<p><p> Altura: ${pokemon2.height}<p><p> Peso: ${pokemon2.weight}<p>`;
  console.log(pokemon2)
})
.catch(err=>console.log(err))


fetch('https://pokeapi.co/api/v2/pokemon/246/')
.then(response => response.json())
.then(pokemon3 => {
  let element3 = document.getElementById('elemento3')
  element3.innerHTML = `<p> Nombre: ${pokemon3.name}<p>
  <img src='${pokemon3.sprites.front_default}'><p> Experiencia inicial: ${pokemon3.base_experience}<p><p> Altura: ${pokemon3.height}<p><p> Peso: ${pokemon3.weight}<p>`;
  console.log(pokemon3)
})
.catch(err=>console.log(err))