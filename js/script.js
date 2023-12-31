////////////////////

// DOM ELEMENTS
let loveHeader = document.querySelector('#love-header')
let loveText = document.querySelector('#love-text')
let loveLink = document.querySelector('#love-link')

let citizenImg = document.querySelector('#citizen-img')
let textCitizen = document.querySelector('#citizen-text')
let linkCitizen = document.querySelector('#citizen-link')
let birdImg = document.querySelector('#bird-img')
let textBird = document.querySelector('#bird-text')
let linkBird = document.querySelector('#bird-link')
let titleKids = document.querySelector('#kids-title')
let imageKids = document.querySelector('#kids-photo')
let kidsDescrip = document.querySelector('#kids-descrip')
let kidsLink = document.querySelector('#kids-link')
let imageParks = document.querySelector('#park-photo')
let imageDescrip = document.querySelector('#park-descrip')
let navBar = document.querySelector('nav')
let hamburger = document.querySelector('.hamburger')

// RANDOM PHOTO BOX
const importanceOfNature = async () => {
    let articles = await axios.get(`https://developer.nps.gov/api/v1/articles?q=children%20and%20nature&api_key=IY3dDsdp6sk5U4T51VeAKTqB99vPv2c4yfuWrIF5`)
    console.log(articles)
    titleKids.innerText = articles.data.data[0].title
    imageKids.src = articles.data.data[0].listingImage.url
    kidsDescrip.innerText = articles.data.data[0].listingDescription
    kidsLink.innerText = 'Read More'
    kidsLink.href = articles.data.data[0].url
    // citizen science
    citizenImg.src = articles.data.data[3].listingImage.url
    textCitizen.innerText = articles.data.data[3].listingDescription
    linkCitizen.innerText = 'Read More'
    linkCitizen.href = articles.data.data[3].url
    // love of nature
    loveHeader.innerText = articles.data.data[41].title
    loveText.innerText = articles.data.data[41].listingDescription
    loveLink.href = articles.data.data[41].url
    loveLink.innerText = 'Read More'
    // bird watching
    birdImg.src = articles.data.data[32].listingImage.url
    textBird.innerText = articles.data.data[32].listingDescription
    linkBird.innerText = 'Read More'
    linkBird.href = articles.data.data[32].url
}


const postPhoto = async () => {
    let newPhoto = await axios.get('https://developer.nps.gov/api/v1/multimedia/galleries?api_key=IY3dDsdp6sk5U4T51VeAKTqB99vPv2c4yfuWrIF5')
    let random = Math.floor(Math.random()*51)
    imageParks.src = `${newPhoto.data.data[random].images[0].url}`
    imageParks.alt = `${newPhoto.data.data[random].images[0].altText}`
    imageDescrip.innerText = newPhoto.data.data[random].images[0].description
}
importanceOfNature()
postPhoto()