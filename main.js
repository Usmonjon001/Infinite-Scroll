const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// UnSplash API
let count = 10;
const apiKey = 'Vz3tkBnFmXovIukJmMaCZ_iIYGW5D8y24KsJqX9cYAQ';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get Photos from Unsplash API
async function getPhotos(){
    try {
        const response = await fetch(apiUrl)
        photosArray = await response.json();
        displayPhotos(photosArray)
    }
    catch (err){
        // Catch Error Here...
    }
}

// Creating elements
function displayPhotos(data){
    data.map((elements) =>{
        let anchor = document.createElement('a');
        let img = document.createElement('img');
        img.setAttribute('src', elements)
    })
}


// On Load
getPhotos()