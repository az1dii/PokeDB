
let pokeDB;
//https://pokeapi.co/api/v2/pokemon/${name}

const $input = $('input[type="text"]');

// const $pokemon= $('#pokemon');
const $name = $('#name');
const $weight = $('#weight');
const $height = $('#height');
const $poster = $('#poster');
const $types =$('#types');
// const $description = $('#description');
// const $attribute = $('#attribute');

// // types colors
// const colors = {
// 	fire: "#FDDFDF",
// 	grass: "#DEFDE0",
// 	electric: "#FCF7DE",
// 	water: "#DEF3FD",
// 	ground: "#f4e7da",
// 	rock: "#d5d5d4",
// 	fairy: "#fceaff",
// 	poison: "#98d7a5",
// 	bug: "#f8d5a3",
// 	dragon: "#97b3e6",
// 	psychic: "#eaeda1",
// 	flying: "#F5F5F5",
// 	fighting: "#E6E0D4",
// 	normal: "#F5F5F5",
// };

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


function render(){
   $name.html(pokeDB.name);
   $weight.html(pokeDB.weight);
   $height.html(pokeDB.height);
   $types.html(pokeDB.types.map((type) => type.type.name).join(', '));
  //$description.html(pokeDB.description);
  $poster.attr("src", pokeDB.sprites['front_default']);
  


}



$('form').on('submit', fetch);
