<<<<<<< HEAD
$(document).foundation();
=======
>>>>>>> 827d178959612030645352f615dc1f36c521d5f4

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
<<<<<<< HEAD
=======

>>>>>>> 827d178959612030645352f615dc1f36c521d5f4
}


let inputEl = document.querySelector('.search-input')
let searchButton = document.querySelector("#search")


//Event listener for the search button
searchButton.addEventListener("click", () => {
  console.log("button pressed")
  sendApiRequest()
})


//API request from Edamam.com
async function sendApiRequest() {
  let APP_ID = "fd634ac0"
  let API_KEY = "3d340a87803709d247b5368e6f03062c"
  let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=spaghetti`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  useApiData(data)
}


//Recipes resluls API data
function useApiData(data) {
  document.querySelector('#results').innerHTML = `
    <div class="grid-container">
        <div class="grid-x grid-margin-x small-up-2 medium-up-3">
          <div class="card" style="width: 300px;">
            <img class="thumbnail" src="${data.hits[0].recipe.image}">
            <h5>${data.hits[0].recipe.label}</h5>
            <p>Recipe site: ${data.hits[0].recipe.source}</p>
            <a href="${data.hits[0].recipe.url}"class="button hollow small small-only-expanded">Get The Recipe</a>
          </div>
          <div class="card" style="width: 300px;">
            <img class="thumbnail" src="${data.hits[1].recipe.image}">
            <h5>${data.hits[1].recipe.label}</h5>
            <p>Recipe site: ${data.hits[1].recipe.source}</p>
            <a href="${data.hits[1].recipe.url}"class="button hollow small small-only-expanded">Get The Recipe</a>
          </div>
          <div class="card" style="width: 300px;">
            <img class="thumbnail" src="${data.hits[2].recipe.image}">
            <h5>${data.hits[2].recipe.label}</h5>
            <p>Recipe site: ${data.hits[2].recipe.source}</p>
            <a href="${data.hits[2].recipe.url}"class="button hollow small small-only-expanded">Get The Recipe</a>
          </div>
      </div>
    </div>
  </div>
 `
}

