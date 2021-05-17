var temperature = document.getElementById("temperature_parameter");
var minus = document.getElementById("minus_icon");
var plus = document.getElementById("add_icon");

minus.onclick = function () {
    temperature.innerHTML = Number(temperature.innerHTML) - 1;

  };

plus.onclick = function () {
    temperature.innerHTML = Number(temperature.innerHTML) + 1;
    console.log(temperature.innerHTML);

  }; 