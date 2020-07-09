(function(){
    'use strict'


// based on https://www.youtube.com/watch?v=hSsdhUG9rBI


function addImages(num){
  for(var i=0; i<num; i++){
    const container = document.querySelector(".container")
    const imageDiv = document.createElement('div')
    imageDiv.className = "card"
    const imgElement = document.createElement('img')
    imgElement.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+(i+1)+".png"
    //codigo a prueba
    const textDiv = document.createElement('div')
    const textElement = document.createElement('p')
    textElement.innerHTML = pokemons[i].name.english + "<br>" + "Tipo: " + pokemons[i].type +
    "<br>" + "Ataque: " + pokemons[i].base.Attack + "<br>" + "Defensa: " + pokemons[i].base.Defense +
    "<br>" + "Velocidad: " + pokemons[i].base.Speed
    textDiv.append(textElement)
    imageDiv.append(textDiv)
    imageDiv.append(imgElement)
    container.append(imageDiv)
  }
}

addImages(pokemons.length)


/* VERSION FUNCIONANDO
    function addImage(){
  const container = document.querySelector(".container")

    // Adiciona div al HTML
    const  imageDiv = document.createElement('div')
    imageDiv.className = 'one-three'

    // div que contendra imagen
    const imgElement = document.createElement('img')
    imgElement.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"

    imageDiv.append(imgElement)
    container.append(imageDiv)
}


function addImages(num){
  for(var i=0; i < num; i++){
    addImage()
  }
}

addImages(pokemons.length)
*/



/*
var loadMore = function() {
  for (var i=0; i<= pokemons.length; i++){
    
    var pokeName = pokemons[i].name.english
    var nombrePokemon = document.getElementById('nombre')
    nombrePokemon.innerHTML = pokeName

    var pokeType = pokemons[i].type
    var tipoPokemon = document.getElementById('tipo')
    tipoPokemon.innerHTML = "Tipo: "+ pokeType

    var pokeAttack = pokemons[i].base.Attack
    var ataquePokemon = document.getElementById('ataque')
    ataquePokemon.innerHTML = "Ataque: "+ pokeAttack

    var pokeDefense = pokemons[i].base.Defense
    var defensaPokemon = document.getElementById('defensa')
    defensaPokemon.innerHTML = "Defensa: "+ pokeDefense

    var pokeSpAttack = pokemons[i].base["Sp. Attack"]
    var spAtaquePokemon = document.getElementById('sp-ataque')
    spAtaquePokemon.innerHTML = "Ataque Especial: "+ pokeSpAttack

    var pokeSpDefense = pokemons[i].base["Sp. Defense"]
    var spDefensaPokemon = document.getElementById('sp-defensa')
    spDefensaPokemon.innerHTML = "Defensa Especial: "+ pokeSpDefense
    
  }
}
*/

})()



