const pokemon_number = document.getElementById("pknum");
const pokemon_name = document.getElementById("pkname");
const pokemon_img = document.getElementById("pkimg");

const pokemon_form = document.getElementById("form");
const pokemon_input = document.getElementById("input");

const pokemon_prev = document.getElementById("bnt-prev");
const pokemon_next = document.getElementById("bnt-next");

let searchPokemon = 1;

const fetchpokemon = async (pokemon)=> {
    const APIResponse = await fetch 
    ('https://pokeapi.co/api/v2/pokemon/${pokemon}');
    if(APIResponse.status ===200){
        const data = await APIResponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon) => {
    const data = await fetchpokemon (pokemon);
    if(data){
        pokemon_name.innerHTML = data.name;
        pokemon_number.innerHTML = data.id;
        pokemon_img.src = data['sprite']['versions']['generetion-v']['black-white']['animated']['front_default'];
}else{
    pokemon_name.innerHTML = 'Não encontrado';
    pokemon_number.innerHTML = ''
    pokemon_img.style.display = 'none'
}
    
    }