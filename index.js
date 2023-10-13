"use strict";

// MARK: VARIABLES
let apiKey = "24698e1e0dde7266415dbae978800489";
let appId = "e7e63e83";
let exampleSearch = `https://api.edamam.com/api/recipes/v2?type=public&app_id=e7e63e83&app_key=24698e1e0dde7266415dbae978800489&diet=low-carb&health=alcohol-free&cuisineType=Italian&mealType=Breakfast&excluded=sausage`;


// MARK: FUNCTTIONS
async function getRequest(url) {
	return axios
		.get(url)
		.then((response) => {
			console.log(response.data);
			return response.data;
		})
		.catch((errur) => {
			console.log(errur.message);
		});
}

function createUrl(e) {
	let url =
		"https://api.edamam.com/api/recipes/v2?type=public&app_id=e7e63e83&app_key=24698e1e0dde7266415dbae978800489";

	if (e.target.cuisine.value != "Select All") {
		url = url + "&cuisine=" + e.target.cuisine.value;
	}

	if (e.target.meal.value != "All") {
		url = url + "&mealType=" + e.target.meal.value;
	}

	if (e.target.diet.value != "All") {
		url = url + "&diet=" + e.target.diet.value.toLowerCase();
	}

	if (e.target.restriction.value != "None") {
		url = url + "&health=" + e.target.restriction.value.toLowerCase();
	}

	if (e.target.ingr.value.length > 0) {
		url = url + "&excluded=" + e.target.ingr.value;
	}

	console.log(url);
	return url;
}

function displayMeals(apiData) {
  let allNames = document.querySelectorAll(".recommendations__menuname");
  let allImgs = document.querySelectorAll(".recommendations__img");
  let allCalories = document.querySelectorAll(".recommendations__caloriesvalue");

  for(let i = 0; i<3; i++){
    allImgs[i].src = apiData.hits[i].recipe.image;
    allNames[i].innerText = apiData.hits[i].recipe.label;
    allCalories[i].innerText = apiData.hits[i].recipe.calories;
  }
}


// MARK: MAIN
const form = document.querySelector(".menu");
form.addEventListener("submit", async function (e) {
	e.preventDefault();
	let apiData = await getRequest(createUrl(e));
	displayMeals(apiData);
});
