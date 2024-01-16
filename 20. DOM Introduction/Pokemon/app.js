

const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const pokemonContainer = document.querySelector(".pokemons");


for (let i = 1; i <= 151; i++) {
    let pokemon = document.createElement("div");
    pokemon.classList.add("pokemon");

    let pokemonImage = document.createElement("img");
    let pokemonImgSource = `${baseURL}${i}.png`;
    pokemonImage.setAttribute("src", pokemonImgSource);

    let pokemonId = document.createElement("span");
    pokemonId.innerText = i;
    pokemonId.classList.add("pokemon-id");

    // let pokemonName = document.createElement("div");
    // pokemon.classList.add("pokemon-name");

    pokemon.appendChild(pokemonId);
    pokemon.prepend(pokemonImage); 


    pokemonContainer.append(pokemon);
}

