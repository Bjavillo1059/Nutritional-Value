
var selectedItem = $('#dropdown-nutrient');
var carbsOp = $('#carbs');
var proteinOp = $('#protein');
var fatsOp = $('#fats');
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

nutrientEl.on("change", () => {
  console.log($('.search-input').val())
  var inputItem = $('.search-input').val()
  var selectImage = $('<img>')
  if (nutrients) {
    // maybe add else statement for error
  } if (inputItem === 'nutrient-data') 
    selectImage.attr('src', nutrients.foods[0].photo.thumb)
    nutriValAll.text(nutrients.foods[0].full_nutrients)

  // } else if (inputItem === 'calories') {
  //   selectImage.attr('src', nutrients.foods[0].photo.thumb)
  //   nutriDisplayEl.inner('Calories: ' + nutrients.foods[0].nf_calories)

  // } else if (inputItem === 'total-fat') {
  //   selectImage.attr('src', nutrients.foods[0].photo.thumb)
  //   nutriDisplayEl.inner(nutrients.foods[0].nf_total_fat)

  // } else if (inputItem === 'cholesterol') {
  //   selectImage.attr('src', nutrients.foods[0].photo.thumb)
  //   nutriDisplayEl.inner(nutrients.foods[0].nf_cholesterol)

  // } else if (inputItem === 'sodium') {
  //   selectImage.attr('src', nutrients.foods[0].photo.thumb)
  //   nutriDisplayEl.inner(nutrients.foods[0].nf_sodium)

  // } else if (inputItem === 'potassium') {
  //   selectImage.attr('src', nutrients.foods[0].photo.thumb)
  //   nutriDisplayEl.inner(nutrients.foods[0].nf_potassium)

  // } else if (inputItem === 'total-carbohydrates') {
  //   selectImage.attr('src', nutrients.foods[0].photo.thumb)
  //   nutriDisplayEl.inner(nutrients.foods[0].nf_total_carbohydrate)

  // } else (inputItem === 'protein')
  // selectImage.attr('src', nutrients.foods[0].photo.thumb)
  // nutriDisplayEl.inner(nutrients.foods[0].nf_protein)

  nutriValAll.append(selectImage)
  nutrientEl.append(nutriValAll)

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

      // call function to display overView nutrients
      // overView will consist of 
    })
    // .then(totalData => {
    //   console.log(totalData)
    //   overView = totalData
    // })
}

//RECIPE SEARCH JSS AREA


let inputElement = document.querySelector('.search-input')

let searchBtn = document.querySelector("#search")


let searchBtn = document.querySelector('#search')

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
        <p>Recipe site: ${data.hits[0].recipe.source}</p>
        <a href="${data.hits[0].recipe.url}" target="_blank" class="button hollow small small-only-expanded">Get The Recipe</a>
      </div>
      <div class="card columns small-12 medium-6 large-3">
        <img class="thumbnail" src="${data.hits[1].recipe.image}">
        <h5>${data.hits[1].recipe.label}</h5>
        <p>Recipe site: ${data.hits[1].recipe.source}</p>
        <a href="${data.hits[1].recipe.url}" target="_blank" class="button hollow small small-only-expanded">Get The Recipe</a>
      </div>
      <div class="card columns small-12 medium-6 large-3">
        <img class="thumbnail" src="${data.hits[2].recipe.image}">
        <h5>${data.hits[2].recipe.label}</h5>
        <p>Recipe site: ${data.hits[2].recipe.source}</p>
        <a href="${data.hits[2].recipe.url}" target="_blank" class="button hollow small small-only-expanded">Get The Recipe</a>
      </div>
      <div class="card columns small-12 medium-6 large-3">
        <img class="thumbnail" src="${data.hits[3].recipe.image}">
        <h5>${data.hits[3].recipe.label}</h5>
        <p>Recipe site: ${data.hits[3].recipe.source}</p>
        <a href="${data.hits[3].recipe.url}" target="blank" class="button hollow small small-only-expanded">Get The Recipe</a>
      </div>
    </div>
 `
}