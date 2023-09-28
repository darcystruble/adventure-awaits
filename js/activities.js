////////////////////////////
// DOM ELEMENTS
const selectState = document.querySelector('#state-select')
const button = document.querySelector('#get-activities')

// EACH CONTAINER
const artsContainer = document.querySelector('.arts-list')
const bikingContainer = document.querySelector('.biking-list')
const campingContainer = document.querySelector('.camping-list')
const fishingContainer = document.querySelector('.fishing-list')
const hikingContainer = document.querySelector('.hiking-list')
const playgroundContainer = document.querySelector('.playground-list')
const snowplayContainer = document.querySelector('.snow-list')
const swimmingContainer = document.querySelector('.swim-list')
const foodContainer = document.querySelector('.food-list')

// EVENT LISTENER & FUNCTION

button.addEventListener('click', async () => {
    let currentState = selectState.value
    const artInfo = await axios.get(`https://developer.nps.gov/api/v1/activities/parks?id=09DF0950-D319-4557-A57E-04CD2F63FF42&api_key=IY3dDsdp6sk5U4T51VeAKTqB99vPv2c4yfuWrIF5`)
    const bikingInfo = await axios.get(`https://developer.nps.gov/api/v1/activities/parks?id=7CE6E935-F839-4FEC-A63E-052B1DEF39D2&api_key=IY3dDsdp6sk5U4T51VeAKTqB99vPv2c4yfuWrIF5`)
    const campingInfo = await axios.get(`https://developer.nps.gov/api/v1/activities/parks?id=A59947B7-3376-49B4-AD02-C0423E08C5F7&api_key=IY3dDsdp6sk5U4T51VeAKTqB99vPv2c4yfuWrIF5`)
    const fishingInfo = await axios.get(`https://developer.nps.gov/api/v1/activities/parks?id=AE42B46C-E4B7-4889-A122-08FE180371AE&api_key=IY3dDsdp6sk5U4T51VeAKTqB99vPv2c4yfuWrIF5`)
    const hikingInfo = await axios.get(`https://developer.nps.gov/api/v1/activities/parks?id=BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA&api_key=IY3dDsdp6sk5U4T51VeAKTqB99vPv2c4yfuWrIF5`)
    const playgroundInfo = await axios.get(`https://developer.nps.gov/api/v1/activities/parks?id=7779241F-A70B-49BC-86F0-829AE332C708&api_key=IY3dDsdp6sk5U4T51VeAKTqB99vPv2c4yfuWrIF5`)
    const snowplayInfo = await axios.get(`https://developer.nps.gov/api/v1/activities/parks?id=C38B3C62-1BBF-4EA1-A1A2-35DE21B74C17&api_key=IY3dDsdp6sk5U4T51VeAKTqB99vPv2c4yfuWrIF5`)
    const swimmingInfo = await axios.get(`https://developer.nps.gov/api/v1/activities/parks?id=587BB2D3-EC35-41B2-B3F7-A39E2B088AEE&api_key=IY3dDsdp6sk5U4T51VeAKTqB99vPv2c4yfuWrIF5`)
    const foodInfo = await axios.get(`https://developer.nps.gov/api/v1/activities/parks?id=1DFACD97-1B9C-4F5A-80F2-05593604799E&api_key=IY3dDsdp6sk5U4T51VeAKTqB99vPv2c4yfuWrIF5`)

    // remove old serach answers
    artsContainer.replaceChildren()
    bikingContainer.replaceChildren()
    campingContainer.replaceChildren()
    hikingContainer.replaceChildren()
    playgroundContainer.replaceChildren()
    snowplayContainer.replaceChildren()
    swimmingContainer.replaceChildren()
    foodContainer.replaceChildren()

    artInfo.data.data[0].parks.forEach((park) => {
        let parkNameA = document.createElement('a')
        let parkNameLi = document.createElement('li')
        if(park.states === currentState){
            parkNameA.innerText = park.fullName
            parkNameA.href = park.url
            parkNameA.setAttribute('target', 'blank')
            parkNameLi.append(parkNameA)
        } else {
            return
        }
        artsContainer.append(parkNameLi)
    })
    if (artsContainer.querySelectorAll('li').length === 0) {
        let noParkFound = document.createElement('li')
        noParkFound.innerText = 'No results found.'
        artsContainer.append(noParkFound)
    }
    
    bikingInfo.data.data[0].parks.forEach((park) => {
        let parkNameA = document.createElement('a')
        let parkNameLi = document.createElement('li')
        if(park.states === currentState){
            parkNameA.innerText = park.fullName
            parkNameA.href = park.url
            parkNameA.setAttribute('target', 'blank')
            parkNameLi.append(parkNameA)
        } else {
            return
        }
        bikingContainer.append(parkNameLi)
    })
    if (bikingContainer.querySelectorAll('li').length === 0) {
        let noParkFound = document.createElement('li')
        noParkFound.innerText = 'No results found.'
        bikingContainer.append(noParkFound)
    }

    campingInfo.data.data[0].parks.forEach((park) => {
        let parkNameA = document.createElement('a')
        let parkNameLi = document.createElement('li')
        if(park.states === currentState){
            console.log(park.fullName)
            parkNameA.innerText = park.fullName
            parkNameA.href = park.url
            parkNameA.setAttribute('target', 'blank')
            parkNameLi.append(parkNameA)
        } else {
            return
        }
        campingContainer.append(parkNameLi)
    })
    if (campingContainer.querySelectorAll('li').length === 0) {
        let noParkFound = document.createElement('li')
        noParkFound.innerText = 'No results found.'
        campingContainer.append(noParkFound)
    }

    fishingInfo.data.data[0].parks.forEach((park) => {
        let parkNameA = document.createElement('a')
        let parkNameLi = document.createElement('li')
        if(park.states === currentState){
            console.log(park.fullName)
            parkNameA.innerText = park.fullName
            parkNameA.href = park.url
            parkNameA.setAttribute('target', 'blank')
            parkNameLi.append(parkNameA)
        } else {
            return
        }
        fishingContainer.append(parkNameLi)
    })
    if (fishingContainer.querySelectorAll('li').length === 0) {
        let noParkFound = document.createElement('li')
        noParkFound.innerText = 'No results found.'
        fishingContainer.append(noParkFound)
    }

    hikingInfo.data.data[0].parks.forEach((park) => {
        let parkNameA = document.createElement('a')
        let parkNameLi = document.createElement('li')
        if(park.states === currentState){
            console.log(park.fullName)
            parkNameA.innerText = park.fullName
            parkNameA.href = park.url
            parkNameA.setAttribute('target', 'blank')
            parkNameLi.append(parkNameA)
        } else {
            return
        }
        hikingContainer.append(parkNameLi)
    })
    if (hikingContainer.querySelectorAll('li').length === 0) {
        let noParkFound = document.createElement('li')
        noParkFound.innerText = 'No results found.'
        hikingContainer.append(noParkFound)
    }

    playgroundInfo.data.data[0].parks.forEach((park) => {
        let parkNameA = document.createElement('a')
        let parkNameLi = document.createElement('li')
        if(park.states === currentState){
            console.log(park.fullName)
            parkNameA.innerText = park.fullName
            parkNameA.href = park.url
            parkNameA.setAttribute('target', 'blank')
            parkNameLi.append(parkNameA)
        } else {
            return
        }
        playgroundContainer.append(parkNameLi)
    })
    if (playgroundContainer.querySelectorAll('li').length === 0) {
        let noParkFound = document.createElement('li')
        noParkFound.innerText = 'No results found.'
        playgroundContainer.append(noParkFound)
    }

    snowplayInfo.data.data[0].parks.forEach((park) => {
        let parkNameA = document.createElement('a')
        let parkNameLi = document.createElement('li')
        if(park.states === currentState){
            console.log(park.fullName)
            parkNameA.innerText = park.fullName
            parkNameA.href = park.url
            parkNameA.setAttribute('target', 'blank')
            parkNameLi.append(parkNameA)
        } else {
            return
        }
        snowplayContainer.append(parkNameLi)
    })
    if (snowplayContainer.querySelectorAll('li').length === 0) {
        let noParkFound = document.createElement('li')
        noParkFound.innerText = 'No results found.'
        snowplayContainer.append(noParkFound)
    }

    swimmingInfo.data.data[0].parks.forEach((park) => {
        let parkNameA = document.createElement('a')
        let parkNameLi = document.createElement('li')
        if(park.states === currentState){
            console.log(park.fullName)
            parkNameA.innerText = park.fullName
            parkNameA.href = park.url
            parkNameA.setAttribute('target', 'blank')
            parkNameLi.append(parkNameA)
        } else {
            return
        }
        swimmingContainer.append(parkNameLi)
    })
    if (swimmingContainer.querySelectorAll('li').length === 0) {
        let noParkFound = document.createElement('li')
        noParkFound.innerText = 'No results found.'
        swimmingContainer.append(noParkFound)
    }
    
    foodInfo.data.data[0].parks.forEach((park) => {
        let parkNameA = document.createElement('a')
        let parkNameLi = document.createElement('li')
        if(park.states === currentState){
            console.log(park.fullName)
            parkNameA.innerText = park.fullName
            parkNameA.href = park.url
            parkNameA.setAttribute('target', 'blank')
            parkNameLi.append(parkNameA)
        } else {
            return
        }
        foodContainer.append(parkNameLi)
    })
    if (foodContainer.querySelectorAll('li').length === 0) {
        let noParkFound = document.createElement('li')
        noParkFound.innerText = 'No results found.'
        foodContainer.append(noParkFound)
    }
})

