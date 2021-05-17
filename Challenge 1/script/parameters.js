var minus = document.getElementById("minus_icon");
var speed_parameter = document.getElementById("speed_parameter");
var plus = document.getElementById("add_icon");
var fuel_consumption = document.getElementById("consumption_parameter");

speed_parameter.innerHTML = (Math.random() * 100).toFixed(0);
fuel_consumption.innerHTML = (speed_parameter.innerHTML * 0.1).toFixed(1);

minus.onclick = function () {
  speed_parameter.innerHTML = Number(speed_parameter.innerHTML) - 1;
  fuel_consumption.innerHTML = (
    Number(fuel_consumption.innerHTML) - 0.1
  ).toFixed(1);
};

plus.onclick = function () {
  speed_parameter.innerHTML = Number(speed_parameter.innerHTML) + 1;
  fuel_consumption.innerHTML = (
    Number(fuel_consumption.innerHTML) + 0.1
  ).toFixed(1);
};
