var input = document.getElementById("earth_miles");
var convert = document.getElementById("convert");
var mars_miles = document.getElementById("mars_miles");
var numbers = /[0-9]/g;

convert.onclick = function () {
  if (input.value !== "" && input.value.match(numbers)) {
    mars_miles.value = input.value * 1.5;
  } else {
    alert("Please insert numbers in the field 'Earth Miles'");
    return false;
  }
};
