let pokeDB;
//https://pokeapi.co/api/v2/pokemon/${name}

const $input = $('input[type="text"]');

const $pName = $('#name');
const $pImg = $('#poster');
const $pId =$('#id');

// STATS
const $pStats =$('#stats');
const $pStats1 =$('#stats1');
const $pStats2 =$('#stats2');
const $pStats3 =$('#stats3');
const $pStats4 =$('#stats4');
const $pStats5 =$('#stats5');

const $pStatsn =$('#statsn');
const $pStatsn1 =$('#statsn1');
const $pStatsn2 =$('#statsn2');
const $pStatsn3 =$('#statsn3');
const $pStatsn4 =$('#statsn4');
const $pStatsn5 =$('#statsn5');


const $pTypes =$('#types');




function fetch(event){
  event.preventDefault();

  //API setup
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

//fetch data
function render(){
   $pName.html(pokeDB.name);
   $pTypes.html(pokeDB.types.map((type) => type.type.name).join(', '));
   $pId.html("#"+ pokeDB.id);
  
  //Stats Names
   $pStats.html(pokeDB.stats[0].stat.name)
   $pStats1.html(pokeDB.stats[1].stat.name)
   $pStats2.html(pokeDB.stats[2].stat.name)
   $pStats3.html(pokeDB.stats[3].stat.name)
   $pStats4.html(pokeDB.stats[4].stat.name)
   $pStats5.html(pokeDB.stats[5].stat.name)

  //Stats Numbers
   $pStatsn.html(pokeDB.stats[0].base_stat)
   $pStatsn1.html(pokeDB.stats[1].base_stat)
   $pStatsn2.html(pokeDB.stats[2].base_stat)
   $pStatsn3.html(pokeDB.stats[3].base_stat)
   $pStatsn4.html(pokeDB.stats[4].base_stat)
   $pStatsn5.html(pokeDB.stats[5].base_stat)
  
  //Pokemon Img
   $pImg.attr("src", pokeDB.sprites['front_default']);
}


$('form').on('submit', fetch);
