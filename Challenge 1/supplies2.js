// // var userLunch = document.getElementById('user_lunch');

// // var mainDishButton = document.getElementById ('main_dish');
// // var soupButton = document.getElementById ('soup');
// // var drinkButton = document.getElementById ('drink');
// // var desertButton = document.getElementById ('desert');
// // var fruitButton = document.getElementById ('fruit');

// // var node = document.createElement ('li');

// // document.getElementsByClassName('select_button')[0].onclick = function() {
// //     var select = document.getElementsByClassName('select')[0].value;
// //     node.appendChild(document.createTextNode(select));
// //     userLunch.appendChild(node);
// // }
// // mainDishButton.onclick = function() {
// //     var select = document.getElementsByClassName('select')[0].value;
// //     var node = document.createElement ('li');
// //     console.log(select);
// //     // node.appendChild(document.createTextNode(select));
// //     // userLunch.appendChild(node);

// // }

// // var userLunch = document.getElementById('user_lunch');
// var node = document.createElement ('li');

// document.getElementById('add_food').onclick = function(){
//     // for (i = 0; i < 5; i++) {
//     var test = document.getElementsByClassName
    
//     document.getElementById('li')[i].innerHTML = ;

    var selectMain = document.getElementsByClassName('select')[0].value;
    var selectSoup = document.getElementsByClassName('select')[1].value;
    var selectDrink = document.getElementsByClassName('select')[2].value;
    var selectDesert = document.getElementsByClassName('select')[3].value;
    var selectFruit = document.getElementsByClassName('select')[4].value;

    

    // for (i = 0; i < 5; i++) {
    //     // var select = document.getElementsByClassName ('select')[i].value;
    //     var select = document.querySelectorAll ('select'[i]).value;
    //     // return select;
    // }

    document.getElementById('add_food').onclick = function(){
    
    alert("Your lunch is getting ready! Here is what you have: " + selectMain + ", " + selectSoup + ", " + selectDrink + ", " + selectDesert + ", " + selectFruit);
}

// var lunch = document.querySelectorAll ('select').value;
// var node = document.createElement ('li');
// var textNode = document.createTextNode (lunch);

// document.getElementById ('add_food').onclick = function() {
//     for (i = 0; i < 5; i++) {
//         var lunch = document.querySelectorAll ('select').value;
//         document.getElementById('user_lunch').appendChild (node);
//         node.appendChild(lunch);
//     }
// }
