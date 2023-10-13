"use strict";
let apiKey = "24698e1e0dde7266415dbae978800489";
let appId = "e7e63e83";
let appUrl = "https://api.edamam.com/api/recipes/";
let appBaseUrl = apUrl + appId + +apiKey;
let searchQuest =
  "https://api.edamam.com/search?q=`${searchqueryinput}`&app_id=e7e63e83&app_key=24698e1e0dde7266415dbae978800489&`${category}`";
alert("test");

async function getRequest(baseUrl, ...queryArgs) {
  url = baseUrl;
  for (let i = 0; i < queryArgs.length; i++) url += queryArgs[i];

  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((errur) => {
      console.error(errur.message);
    });
}
