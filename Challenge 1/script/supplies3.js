var menu1 = {
  main: "Pasta with truffles",
  drink: "Coca Cola",
};

var menu2 = {
  main: "Tomato soup",
  drink: "Orange juice",
};

var menu3 = {
  main: "Sweet and sour wok",
  drink: "Tea",
};

var submit = document.getElementById("add_food");
var select = document.getElementById("select");

var message = document.getElementById("message");

function Lunch() {
  message.innerHTML = this.main + " and " + this.drink + ". Enjoy!";
}

submit.onclick = function () {
  if (select.selectedIndex == [0]) {
    menu1.Lunch = Lunch;
    menu1.Lunch();
  }
  if (select.selectedIndex == [1]) {
    menu2.Lunch = Lunch;
    menu2.Lunch();
  }
  if (select.selectedIndex == [2]) {
    menu3.Lunch = Lunch;
    menu3.Lunch();
  }
};
