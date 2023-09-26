//////////////////////
// DOM ELEMENTS
// Selection Elements
let statePicked = document.querySelector('#get-hikes')
let selectAge = document.querySelector('#age-select')
let selectState = document.querySelector('#state-select')
// let divMessage = document.querySelector('.message')
// Content Elements
const mainHike = document.querySelector('#hike-main')
const secondHike = document.querySelector('#hike-second')

statePicked.addEventListener('click', async () => {
    mainHike.replaceChildren()
    let state = selectState.value
    let age = selectAge.value

    const parkInfo = await axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=${state}&q=hiking&api_key=IY3dDsdp6sk5U4T51VeAKTqB99vPv2c4yfuWrIF5`)
    const accessiblePark = await axios.get(`https://developer.nps.gov/api/v1/amenities/parksplaces?id=04D29064-B9A1-4031-AD0E-98E31EF69604&start=0&api_key=IY3dDsdp6sk5U4T51VeAKTqB99vPv2c4yfuWrIF5`)
    const playground = await axios.get(`https://developer.nps.gov/api/v1/amenities/parksplaces?id=7736B50E-5210-46C3-B59D-5C5D1886C2A6&api_key=IY3dDsdp6sk5U4T51VeAKTqB99vPv2c4yfuWrIF5`)
    console.log(accessiblePark, parkInfo)

    // FIRST AGE GROUP
    if (age === 'one'){
        // arrays
        let parkNameArr = []
        // find accessible hikes in state
        accessiblePark.data.data[0][0].parks.forEach((park) => {
            if(park.states.includes(state)){
                parkNameArr.push(park.fullName)
            }
        })
        console.log(parkNameArr)
        parkNameArr.forEach((park) => {
            parkInfo.data.data.forEach((info) => {
                let parkLink = document.createElement('a')
                let parkHeader = document.createElement('h4')
                let parkImg = document.createElement('img')
                let parkDescription = document.createElement('div')
                let parkDesignation = document.createElement('div')
                let parkDirecInfo = document.createElement('div')
                let parkDirections = document.createElement('a')
                let parkHolder = document.createElement('div')
                if (info.fullName === park){
                    parkLink.innerText = info.fullName
                    parkLink.href = info.url
                    parkHeader.append(parkLink)
                    parkImg.src = info.images[0].url
                    parkImg.classList.add('float')
                    parkDescription.innerText = info.description
                    parkDirecInfo.innerText = info.directionsInfo
                    parkDesignation.innerText = `Park Designation: ${info.designation}`
                    parkDirections.innerText = `Click here for more information about directions to the park`
                    parkDirections.href = info.directionsUrl
                    parkHolder.append(parkImg, parkDesignation, parkDescription, parkDirecInfo, parkDirections)
                    parkHolder.classList.add('park-holder')
                }
                
                mainHike.append(parkHeader, parkHolder)
            })
        })
    }
})