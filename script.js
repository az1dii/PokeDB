let weatherData;

const $location = $("#location");
const $temp = $("#temp");
const $feels = $("#feels");
const $icon = $("#icon");
const $input = $('input[type="text"]');
const $description = $("#description");

function handleGetData(event) {
  event.preventDefault();

  $.ajax({
    url: `https://pokeapi.co/api/v2/pokemon?limit=151%27`
  }).then(
    function fetchPokemon() {
      fetch("https://pokeapi.co/api/v2pokemon?limit151")
        .then((response) => response.json())
        .then((allpokemon) => console.log(allpokemon));
    },
    function (error) {
      console.log("Pokemon Not Found", error);
    }
  );
}

function render() {
  $location.html(weatherData.name);
  $temp.html(weatherData.main.temp);
  $feels.html(weatherData.main.feels_like);
  $description.html(weatherData.weather[0].description);
  $icon.attr("src", weatherData.weather[0].icon);
}

$("form").on("submit", handleGetData);
