// - Title box Jumbotron 
// - search function
// drop donw menu with searchable functions of specific items
//    - Meat - commonly used item in recipe
//    - Fruits/Veggies - commonly used item in recipe
//    - Serving Size
//    - Ingredients list
//          - query to recipe site
// 

// - description of how the site works (about me)
// - what information does the site display

//     - pulls up previous searches
//     - pulls up common popular foods

//     - weight
//     - lipids (fats)
//     - protein
//     - carbohydrates
//           - fiber
//     - total caloric value
$(document).foundation();

var selectedItem = $('#dropdown-nutrient');
var overviewOp = $('#overview');
var carbsOp = $('#carbs');
var proteinOp = $('#protein');
var fatsOp = $('#fats');
var vitamins = $('#vitamins');
var itemValueId = $('#item-value');

function getApi() {
    var reqNutirixUrl = 'https://www.nutritionix.com/database';

    fetch(reqNutirixUrl)
    .then(res => res.json())
    .then(data => console.log(data))
    // .then(function (response) {
    //   return response.json();
    // })
    // .then(function (data) {
    //   for (var i = 0; i < data.length; i++) {
    //     var listItem = carbsOp + itemValueId;
    //     listItem.textContent = data[i].html_url;
    //     carbsOp.appendChild(listItem);
    //   }
    // });
}