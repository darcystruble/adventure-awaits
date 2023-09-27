////////////////////////////
// DOM ELEMENTS
const selectActivity = document.querySelector('#activity-select')
const selectState = document.querySelector('#state-select')
const button = document.querySelector('#get-activities')
const mainActive = document.querySelector('#active-main')


// EVENT LISTENER & FUNCTION
// Get parkCode name function

button.addEventListener('click', async () => {
    mainActive.replaceChildren()
    let currentState = selectState.value
    let currentActivity = selectActivity.value
    console.log(currentActivity)
    
    const information = await axios.get(`https://developer.nps.gov/api/v1/activities/parks?id=${currentActivity}&api_key=IY3dDsdp6sk5U4T51VeAKTqB99vPv2c4yfuWrIF5`)
    const parkInfo = await axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=${currentState}&q=hiking&api_key=IY3dDsdp6sk5U4T51VeAKTqB99vPv2c4yfuWrIF5`)
    console.log(information, parkInfo)
    // State Array
    let stateParkCode = []
    information.data.data[0].parks.forEach((item) => {
        if (item.states === currentState){
            stateParkCode.push(item.parkCode)
        }
    })
    let headInfo = document.createElement('h2')
    headInfo.innerText = `Hi`
    mainActive.append(headInfo)
    stateParkCode.forEach((code) => {
        parkInfo.data.data.forEach((park) => {
            let parkLink = document.createElement('a')
            let parkHeader = document.createElement('h4')
            let parkImg = document.createElement('img')
            let parkDescription = document.createElement('div')
            let parkDesignation = document.createElement('div')
            let parkDirecInfo = document.createElement('div')
            let parkDirections = document.createElement('a')
            let parkHolder = document.createElement('div')
            if(park.parkCode === code){
                console.log(code)
                parkLink.innerText = park.fullName
                parkLink.href = park.url
                parkHeader.append(parkLink)
                parkImg.src = park.images[0].url
                parkImg.classList.add('float')
                parkDescription.innerText = park.description
                parkDirecInfo.innerText = park.directionsInfo
                parkDesignation.innerText = `Park Designation: ${park.designation}`
                parkDirections.innerText = `Click here for more information about directions to the park`
                parkDirections.href = park.directionsUrl
                parkHolder.append(parkImg, parkDesignation, parkDescription, parkDirecInfo, parkDirections)
                parkHolder.classList.add('park-holder')
            }
            mainActive.append(parkHeader, parkHolder)
        })
        
    })
})
