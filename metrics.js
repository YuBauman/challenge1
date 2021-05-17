var input = document.getElementById ('earth_miles');
var convert = document.getElementById ('convert');
var mars_miles = document.getElementById ('mars_miles');

convert.onclick = function() {
    mars_miles.value = input.value * 8;
}