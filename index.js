'use strict';
let apiKey = "24698e1e0dde7266415dbae978800489";
let appId = "e7e63e83"



async function getRequest(baseUrl, ...queryArgs){
    url = baseUrl;
    for(let i = 0; i<queryArgs.length; i++) url+=queryArgs[i];

    return axios.get(url)
    .then(response => {
        return(response.data);
    })
    .catch(errur => {
        console.error(errur.message);
    });
}