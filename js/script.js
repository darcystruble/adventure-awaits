////////////////////
// DOM ELEMENTS
let imageParks = document.querySelector('#park-photo')
let imageDescrip = document.querySelector('#park-descrip')
let navBar = document.querySelector('nav')

// STICKY NAV BAR

// RANDOM PHOTO BOX
const postPhoto = async () => {
    let newPhoto = await axios.get('https://developer.nps.gov/api/v1/multimedia/galleries?api_key=IY3dDsdp6sk5U4T51VeAKTqB99vPv2c4yfuWrIF5')
    let random = Math.floor(Math.random()*51)
    imageParks.src = `${newPhoto.data.data[random].images[0].url}`
    imageParks.alt = `${newPhoto.data.data[random].images[0].altText}`
    imageDescrip.innerText = newPhoto.data.data[random].images[0].description
    
}

postPhoto()