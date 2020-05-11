var searchBox = new google.maps.places.SearchBox();
var searchBox = new google.maps.places.SearchBox(document.querySelector("#city-search"));
searchBox.addListener('places_changed', function() {});
searchBox.addListener('places_changed', function() {
    var locale = searchBox.getPlaces()[0];
});

document.querySelector("#latitude").value = place.geometry.location.lat();
document.querySelector("#longitude").value = place.geometry.location.lng();



function obtenerDatos() {
    fetch("https://api.darksky.net/forecast/[key]/[latitude],[longitude]")
    .then(function(respuesta){
    return respuesta.json();
    }).then(function(respuesta){
    let nombre = document.getElementById('nombre');
    nombre.innerHTML=respuesta.name;
})
}


// fetch(apiLinkDS, {
//     mode: 'no-cors'
//   })