$(document).foundation();

var selectedItem = $('#dropdown-nutrient');
var overviewOp = $('#overview');
var carbsOp = $('#carbs');
var proteinOp = $('#protein');
var fatsOp = $('#fats');
var vitamins = $('#vitamins');
var itemValueId = $('#item-value');

async function getNutritionApi(search) {
  let nutritionAppId = "8badfcd6"
  let nutritionApiKey = '7bbd96e0c6fe2d09ae1c6f6d6d1b81c3'
  let reqNutirixUrl = await fetch(`https://www.nutritionix.com/database/common-foods?app_id=${nutritionAppId}&app_key=${nutritionApiKey}&q=${search}`);
  console.log(reqNutirixUrl)
  let nutrientData = await reqNutirixUrl.json()
  console.log(nutrientData)
  useNutritionixAPI(nutrientData)
}

function useNutritionixAPI(nutrientData) {
  document.querySelector('#nutrient-results')
}


let inputEl = document.querySelector('#middle-label')
let searchButton = document.querySelector("#search")


//Event listener for the search button
searchButton.addEventListener("click", () => {
  console.log("button pressed")
  sendApiRequest(inputEl.value)
})


//API request from Edamam.com
async function sendApiRequest(search) {
  let APP_ID = "fd634ac0"
  let API_KEY = "3d340a87803709d247b5368e6f03062c"
  let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${search}`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  useApiData(data)
}


//Recipes results API data
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

