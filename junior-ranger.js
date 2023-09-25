//////////////////////
// DOM ELEMENTS
const button = document.querySelector('button')
const stateSelect = document.querySelector('#state-select')
const mainContent = document.querySelector('#ranger-content')
const rangerPic = document.querySelector('#ranger-pic')
const rangerPic2 = document.querySelector('#ranger-pic-2')
const picDescription = document.querySelector('.pic-description')

const randomPic = async () => {
    const juniorRangerPics = await axios.get('https://developer.nps.gov/api/v1/multimedia/galleries?q=junior%20ranger&api_key=IY3dDsdp6sk5U4T51VeAKTqB99vPv2c4yfuWrIF5')
    let random = Math.floor(Math.random() * 51)
    let currentImage = juniorRangerPics.data.data[random].images[0]
    console.log(currentImage.url)
    rangerPic.src = currentImage.url
    rangerPic.alt = currentImage.altText
    picDescription.innerText = currentImage.description
}
randomPic()

button.addEventListener('click', async () => {
    const juniorRanger = await axios.get('https://developer.nps.gov/api/v1/activities/parks?q=junior%20ranger&api_key=IY3dDsdp6sk5U4T51VeAKTqB99vPv2c4yfuWrIF5')
    juniorRanger.data.data[0].parks.forEach((park) => {
        let nameDiv = document.createElement('div')
        let designationDiv = document.createElement('div')
        let urlDiv = document.createElement('a')
        let intoDiv = document.createElement('div')
        if(park.states.includes(stateSelect.value)){
            // console.log(park.fullName)
            nameDiv.innerText = park.fullName
            // console.log(park.designation)
            designationDiv.innerText = park.designation
            // console.log(park.url)
            urlDiv.innerText = park.url
            urlDiv.href = park.url
        } else {
            return
        }
        intoDiv.append(nameDiv, designationDiv, urlDiv)
        intoDiv.classList.add('info-box')
        mainContent.append(intoDiv)
    })
    // juniorRangerPics.data.data.forEach((pic) => {
    //     console.log(pic.relatedParks[0].states)
    // })
})