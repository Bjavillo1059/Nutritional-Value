var nutrientEl = $('.search-input');
var itemValueId = $('#item-value');
var selectImage = $('#nutrition-image-div')
var nutriValAll = $('#full-nutrient-list')

var nutrients;
var overView;

var inputEl = $('.search-input')
var searchButton = $("#search")

searchButton.on('click', () => {
  console.log('button pressed')
  useNutritionixAPI(inputEl.val())
})

function useNutritionixAPI(nutrientData) {
  var query = "https://trackapi.nutritionix.com/v2/natural/nutrients"
  var headers = {
    "Content-Type": "application/json",
    "x-app-id": "8badfcd6",
    "x-app-key": "d2c050133fb86f9f6b7eb3da8042f19d"
  }
  var body = {
    "query": nutrientData,
  }

  fetch(query, {
    method: "POST",
    headers,
    body: JSON.stringify(body)
  })
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data)
      nutrients = data
      useNutritionixData(data)
    })
}

function useNutritionixData(nutrients) {
  document.querySelector('#nutrition-display').innerHTML = `
<div class="work-feature-block row">
  <div class="columns medium-7" id="nutrition-image-div">
  <img class="thumbnail" src="${nutrients.foods[0].photo.highres}">
  </div>
  <div class="columns medium-5">
    <h2 class="work-feature-block-header">Serving Size & Weight</h2>
    <p class="size-weight" value="serving-size">${'Serving Qty: ' + nutrients.foods[0].serving_qty}</p>
    <p class="size-weight" value="serving-size">${'Serving Unit Size: ' + nutrients.foods[0].serving_unit}</p>
    <p class="size-weight" value="serving-size">${'Serving Weight in Grams: ' + nutrients.foods[0].serving_weight_grams}</p>
    <h2 class="nutrition-value-block-header">Nutrition Values</h2>
    <ul class="nutrival-list">
      <li class="nutrivalues" value="calories">${'Calories: ' + nutrients.foods[0].nf_calories}</li>
      <li class="nutrivalues" value="total-fat">${'Fats: ' + nutrients.foods[0].nf_total_fat}</li>
      <li class="nutrivalues" value="cholesterol">${'Cholesterol: ' + nutrients.foods[0].nf_cholesterol}</li>
      <li class="nutrivalues" value="sodium">${'Sodium: ' + nutrients.foods[0].nf_sodium}</li>
      <li class="nutrivalues" value="potassium">${'Potassium: ' + nutrients.foods[0].nf_potassium}</li>
      <li class="nutrivalues" value="total-carbohyrdrate">${'Carbohydrates: ' + nutrients.foods[0].nf_total_carbohydrate}</li>
      <li class="nutrivalues" value="protein">${'Protein: ' + nutrients.foods[0].nf_protein}</li>
    </ul>
    <br> <br>
    <h3>Below you will find some recipes that can be used for the specific item you searched!</h3>
  </div>
</div>
`
}

//RECIPE SEARCH JSS AREA


let inputElement = document.querySelector('.search-input')

let searchBtn = document.querySelector("#search")

//Recipe
//Event listener for the search button
searchBtn.addEventListener("click", () => {
  console.log("button pressed")
  sendApiRequest(inputElement.value)
})

//Recipe
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

//Recipe
//Recipes resluls API data
function useApiData(data) {
  document.querySelector('#results').innerHTML = `
    <div class="row">
      <div class="card columns small-12 medium-6 large-3">
        <img class="thumbnail" src="${data.hits[0].recipe.image}">
        <h5>${data.hits[0].recipe.label}</h5>
        <p class="recipeDesc">Recipe site: ${data.hits[0].recipe.source}</p>
        <a href="${data.hits[0].recipe.url}" target="_blank" class="button hollow small small-only-expanded">Get The Recipe</a>
      </div>
      <div class="card columns small-12 medium-6 large-3">
        <img class="thumbnail" src="${data.hits[1].recipe.image}">
        <h5>${data.hits[1].recipe.label}</h5>
        <p class="recipeDesc">Recipe site: ${data.hits[1].recipe.source}</p>
        <a href="${data.hits[1].recipe.url}" target="_blank" class="button hollow small small-only-expanded">Get The Recipe</a>
      </div>
      <div class="card columns small-12 medium-6 large-3">
        <img class="thumbnail" src="${data.hits[2].recipe.image}">
        <h5>${data.hits[2].recipe.label}</h5>
        <p class="recipeDesc">Recipe site: ${data.hits[2].recipe.source}</p>
        <a href="${data.hits[2].recipe.url}" target="_blank" class="button hollow small small-only-expanded">Get The Recipe</a>
      </div>
      <div class="card columns small-12 medium-6 large-3">
        <img class="thumbnail" src="${data.hits[3].recipe.image}">
        <h5>${data.hits[3].recipe.label}</h5>
        <p class="recipeDesc">Recipe site: ${data.hits[3].recipe.source}</p>
        <a href="${data.hits[3].recipe.url}" target="blank" class="button hollow small small-only-expanded">Get The Recipe</a>
      </div>
    </div>
 `
}