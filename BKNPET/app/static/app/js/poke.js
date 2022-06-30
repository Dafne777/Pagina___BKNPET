const input = document.querySelector("input");
const button = document.querySelector("button");
const pokemonContainer = document.querySelector(".pokemon-container");


button.addEventListener("click",(e) => {
    e.preventDefault();
    traerPokemon(input.value);
})

function traerPokemon(pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then((res) => res.json())
    .then((data) => {
        crearPokemon(data);
    })
}



function crearPokemon(pokemon){
    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;

    const poke_nombre = document.createElement('h3');
    poke_nombre.textContent = pokemon.name;




    $('#info').empty();

    const div = document.createElement('div');
    div.appendChild(img);
    div.appendChild(poke_nombre);


    pokemonContainer.appendChild(div);

}