let pokeDB;
//https://pokeapi.co/api/v2/pokemon/${name}

const $input = $('input[type="text"]');

const $pName = $('#name');
const $pImg = $('#poster');
const $pId =$('#id');
const $pStats =$('#stats');
const $pStatsn = $('#statsn');
const $pTypes =$('#types');


const $weight = $('#weight');
const $height = $('#height');


// types colors
const typeColors = {
	fire: "#FDDFDF",
	grass: "#DEFDE0",
	electric: "#FCF7DE",
	water: "#DEF3FD",
	ground: "#f4e7da",
	rock: "#d5d5d4",
	fairy: "#fceaff",
	poison: "#98d7a5",
	bug: "#f8d5a3",
	dragon: "#97b3e6",
	psychic: "#eaeda1",
	flying: "#F5F5F5",
	fighting: "#E6E0D4",
	normal: "#F5F5F5",
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


function render(){
   $pName.html(pokeDB.name);
   $pTypes.html(pokeDB.types.map((type) => type.type.name).join(', '));
   $pId.html(pokeDB.id);
   $pStats.html(pokeDB.stats.map((stat) =>stat.stat.name).join(', '));
   $pStatsn.html(pokeDB.stats.map((stat) =>stat.base_stat).join(', '));
   
  
   $weight.html(pokeDB.weight);
   $height.html(pokeDB.height);
  
   $pImg.attr("src", pokeDB.sprites['front_default']);
  
}




$('form').on('submit', fetch);
