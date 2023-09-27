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
    secondHike.replaceChildren()
    let state = selectState.value
    let age = selectAge.value

    const parkInfo = await axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=${state}&q=hiking&api_key=IY3dDsdp6sk5U4T51VeAKTqB99vPv2c4yfuWrIF5`)
    const accessiblePark = await axios.get(`https://developer.nps.gov/api/v1/amenities/parksplaces?id=04D29064-B9A1-4031-AD0E-98E31EF69604&start=0&api_key=IY3dDsdp6sk5U4T51VeAKTqB99vPv2c4yfuWrIF5`)
    const playground = await axios.get(`https://developer.nps.gov/api/v1/amenities/parksplaces?id=7736B50E-5210-46C3-B59D-5C5D1886C2A6&api_key=IY3dDsdp6sk5U4T51VeAKTqB99vPv2c4yfuWrIF5`)
    const scenic = await axios.get(`https://developer.nps.gov/api/v1/amenities/parksplaces?id=79247274-A3FB-42C4-9361-45A2BFADE78C&api_key=IY3dDsdp6sk5U4T51VeAKTqB99vPv2c4yfuWrIF5`)
    console.log(accessiblePark, parkInfo, playground)

    // FIRST AGE GROUP
    if (age === 'one'){
        let headInfo = document.createElement('h2')
        headInfo.innerText = 'Parks with Accessible Trails'
        mainHike.append(headInfo)
        // arrays
        let parkNameArr = []
        // find accessible hikes in state
        accessiblePark.data.data[0][0].parks.forEach((park) => {
            if(park.states.includes(state)){
                parkNameArr.push(park.fullName)
            }
        })
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
    } else if (age === 'two'){
        let headInfo = document.createElement('h2')
        headInfo.innerText = 'Parks with Accessible Trails'
        mainHike.append(headInfo)
        // arrays
        let parkNameArr = []
        // find accessible hikes in state
        accessiblePark.data.data[0][0].parks.forEach((park) => {
            if(park.states.includes(state)){
                parkNameArr.push(park.fullName)
            }
        })
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
        // secondary hike information
        let headInfo2 = document.createElement('h2')
        headInfo2.innerText = 'Parks with Playgrounds and Hiking'
        secondHike.append(headInfo2)
        let parkNameArr2 = []
        // find accessible hikes in state
        playground.data.data[0][0].parks.forEach((park) => {
            if(park.states.includes(state)){
                parkNameArr2.push(park.fullName)
            }
        })
        parkNameArr2.forEach((park) => {
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
                secondHike.append(parkHeader, parkHolder)
            })
        })
    } else if (age === 'six'){
        // arrays
        let headInfo = document.createElement('h2')
        headInfo.innerText = 'Parks with Playgrounds and Hiking'
        mainHike.append(headInfo)
        let parkNameArr = []
        // find accessible hikes in state
        playground.data.data[0][0].parks.forEach((park) => {
            if(park.states.includes(state)){
                parkNameArr.push(park.fullName)
            }
        })
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
        let headInfo2 = document.createElement('h2')
        headInfo2.innerText = 'Parks with Scenic Views and Photo Spots'
        secondHike.append(headInfo2)
        // array
        let parkNameArr2 = []
        // find scenic hikes in state
        scenic.data.data[0][0].parks.forEach((park) => {
            if(park.states.includes(state)){
                parkNameArr2.push(park.fullName)
            }
        })
        parkNameArr2.forEach((park) => {
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
                secondHike.append(parkHeader, parkHolder)
            })
        })
    } else if (age === 'ten'){
        // Page Header Info
        let headInfo = document.createElement('h2')
        headInfo.innerText = 'Parks with Scenic Views and Photo Spots'
        mainHike.append(headInfo)
        // array
        let parkNameArr = []
        // find scenic hikes in state
        scenic.data.data[0][0].parks.forEach((park) => {
            if(park.states.includes(state)){
                parkNameArr.push(park.fullName)
            }
        })
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
    } else {
        return
    }
})