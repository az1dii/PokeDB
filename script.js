//https://pokeapi.co/api/v2/pokemon/${name}
let pokeDB


const $input = $('input[type="text"]');

const $card = $('#card');
const $name = $('#name');
const $container = $('#container');
const $weight = $('#weight');
const $height = $('#height');
const $poster = $('#poster');
const $types =$('#types');
const $id =$('#id');
const $stats=$('#stats');


const typeColors = {
  electric: '#FFEA70',
  normal: '#B09398',
  fire: '#FF675C',
  water: '#0596C7',
  ice: '#AFEAFD',
  rock: '#999799',
  flying: '#7AE7C7',
  grass: '#4A9681',
  psychic: '#FFC6D9',
  ghost: '#561D25',
  bug: '#A2FAA3',
  poison: '#795663',
  ground: '#D2B074',
  dragon: '#DA627D',
  steel: '#1D8A99',
  fighting: '#2F2F2F',
  default: '#2A1A1F',
};


function fetch(event){
  event.preventDefault();

  $.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/${$input.val()}`
  }).then(
    function(data){
        console.log(data);
        pokeDB = data;
        render();  // call render function
        // $input.value() clear text in search box
    },
    function(error){
      console.log("Pokemon Not Found", error)
    }
  )
}

const color = typeColors[$types];

function render(){
   $name.html(pokeDB.name);
   $weight.html(pokeDB.weight);
   $height.html(pokeDB.height);
   $types.html(pokeDB.types.map((type) => type.type.name).join(', '));
   $poster.attr("src", pokeDB.sprites['front_default']);
   $id.html(pokeDB.id);


   
  
   
  

}




$('form').on('submit', fetch);
