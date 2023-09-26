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
    let state = selectState.value
    let age = selectAge.value
    const parkInfo = await axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=${state}&q=hiking&api_key=IY3dDsdp6sk5U4T51VeAKTqB99vPv2c4yfuWrIF5`)
    const accessiblePark = await axios.get(`https://developer.nps.gov/api/v1/amenities/parksplaces?id=04D29064-B9A1-4031-AD0E-98E31EF69604&start=0&api_key=IY3dDsdp6sk5U4T51VeAKTqB99vPv2c4yfuWrIF5`)
    const infoBlurbs = await axios.get(`https://developer.nps.gov/api/v1/thingstodo?stateCode=${state}&limit=250&api_key=IY3dDsdp6sk5U4T51VeAKTqB99vPv2c4yfuWrIF5`)
    console.log(accessiblePark, parkInfo, infoBlurbs)

    // FIRST AGE GROUP
    if (age === 'one'){
        // arrays
        let parkCodeArr = []
        // find accessible hikes in state
        accessiblePark.data.data[0][0].parks.forEach((park) => {
            let parkLink = document.createElement('a')
            let parkHeader = document.createElement('h4')
            let parkImg = document.createElement('img')
            let parkHolder = document.createElement('div')
            // if State matches park state
            if(park.states.includes(state)){
                parkLink.innerText = park.fullName
                parkLink.href = park.url
                parkCodeArr.push(park.parkCode)
            }
            parkHeader.append(parkLink)
            parkHolder.append(parkHeader)
            mainHike.append(parkHolder)
        })
        parkCodeArr.forEach((code) => {
            infoBlurbs.data.data.forEach((blurb) => {
                if(blurb.relatedParks[0].parkCode === code){
                    console.log(blurb.shortDescription)
                } else {
                    console.log('no')
                }
            })
        })
        // infoBlurbs.data.data.forEach((blurb) => {
        //     let sameCode = blurb.relatedParks[0].parkCode
        //     if (parkCodeArr.every(park => sameCode.includes(park))){
        //         console.log(sameCode)
        //     }
        // })
    }
})

// statePicked.addEventListener('click', async () => {
//     let newParkCode
//     const answers = await axios.get('https://developer.nps.gov/api/v1/amenities/parksplaces?q=accessible%20sites&api_key=IY3dDsdp6sk5U4T51VeAKTqB99vPv2c4yfuWrIF5')
//     const playground = await axios.get('https://developer.nps.gov/api/v1/activities/parks?q=playground&api_key=IY3dDsdp6sk5U4T51VeAKTqB99vPv2c4yfuWrIF5')
//     const parkPictures = await axios.get(`https://developer.nps.gov/api/v1/multimedia/galleries?parkCode=${newParkCode}&api_key=IY3dDsdp6sk5U4T51VeAKTqB99vPv2c4yfuWrIF5`)
//     const moreInfo = await axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=${selectBar.value}&api_key=IY3dDsdp6sk5U4T51VeAKTqB99vPv2c4yfuWrIF5`)
//     console.log(moreInfo)

//     let accessibleSites = answers.data.data[1]
//     let scenicView = answers.data.data[15]
//     let trailhead = answers.data.data[19]
//     // console.log(playground, juniorRanger)

//     // console.log(selectState.value)
//     // Age select 0-1, stroller friendly
//     if(selectBar.value === 'one'){
//         divMessage.classList.remove('.display-one')
//         let accessArr = []
//         let trailArr = []
//         // Go through each park and look for accessible site in state, push to accessArr
//         accessibleSites[0].parks.forEach((acc) => {
//             if(acc.states.includes(selectState.value)){
//                 accessArr.push(acc.name)
//             }
//         })
//         // Go through each park and look for trailheads in state, push to trailArr
//         trailhead[0].parks.forEach((trail => {
//             if(trail.states.includes(selectState.value)){
//                 trailArr.push(trail.name)
//             }
//         }))
//         // Array that takes only the array items that are the same
//         const primary = accessArr.filter(el => trailArr.includes(el))
//         // Array that returns the rest of accessArr
//         const secondary = accessArr.filter(el => primary.includes(el)=== false)
//         // console.log(secondary, primary, accessArr)
//         // Create new header for options
//         let label = document.createElement('h3')
//         label.innerText = 'Best Options: Stroller Friendly Hikes'
//         mainMessage.append(label)
//         // Answers for Best Options
//         primary.forEach((item) => {
//             let newMessage = document.createElement('div')
//             newMessage.innerText = item
//             let newPic = document.createElement('img')
//             let newAccess = document.createElement('a')
//             // let newTrail = document.createElement('div')
//             accessibleSites[0].parks.forEach((park) => {
//                 if(park.name === item){
//                     newParkCode = park.parkCode
//                     newAccess.innerText = park.url
//                     newAccess.href = park.url
//                     console.log(park, parkPictures, newParkCode)
//                 } else {return}
//             })
//             let thisDiv = document.createElement('div')
//             thisDiv.append(newMessage, newAccess)
//             thisDiv.classList.add('info-box')
//             mainMessage.append(thisDiv)
//         })
//         // Create new header for second best options
//         let label2 = document.createElement('h3')
//         label2.innerText = 'Good Options: Stroller Friendly Parks'
//         mainMessage.append(label2)
//         secondary.forEach((item) => {
//             let newMessage = document.createElement('div')
//             newMessage.innerText = item
//             let newAccess = document.createElement('a')
//             // let newTrail = document.createElement('div')
//             accessibleSites[0].parks.forEach((park) => {
//                 if(park.name === item){
//                     newAccess.innerText = park.url
//                     newAccess.href = park.url
//                 } else {return}
//             })
//             let thisDiv = document.createElement('div')
//             thisDiv.append(newMessage, newAccess)
//             thisDiv.classList.add('info-box')
//             mainMessage.append(thisDiv)
//         })
//         }
//          else if(selectBar.value === 'two'){
//             divMessage.classList.remove('.display-one')
//             let accessArr = []
//             let trailArr = []
//             // Go through each park and look for accessible site in state, push to accessArr
//             accessibleSites[0].parks.forEach((acc) => {
//                 if(acc.states.includes(selectState.value)){
//                     accessArr.push(acc.name)
//                 }
//             })
//             // Go through each park and look for trailheads in state, push to trailArr
//             trailhead[0].parks.forEach((trail => {
//                 if(trail.states.includes(selectState.value)){
//                     trailArr.push(trail.name)
//                 }
//             }))
//             // Array that takes only the array items that are the same
//             const primary = accessArr.filter(el => trailArr.includes(el))
//             // Array that returns the rest of accessArr
//             const secondary = trailArr.filter(el => primary.includes(el)=== false)
//             // console.log(secondary, primary, accessArr)
//             // Create new header for options
//             let label = document.createElement('h3')
//             label.innerText = 'Best Options: Stroller Friendly Hikes'
//             mainMessage.append(label)
//             // Answers for Best Options
//             primary.forEach((item) => {
//                 let newMessage = document.createElement('div')
//                 newMessage.innerText = item
//                 let newTrail = document.createElement('a')
//                 // let newTrail = document.createElement('div')
//                 accessibleSites[0].parks.forEach((park) => {
//                     if(park.name === item){
//                         newTrail.innerText = park.url
//                         newTrail.href = park.url
//                     } else {return}
//                 })
//                 let thisDiv = document.createElement('div')
//                 thisDiv.append(newMessage, newTrail)
//                 thisDiv.classList.add('info-box')
//                 mainMessage.append(thisDiv)
//             })
//             // Create new header for second best options
//             let label2 = document.createElement('h3')
//             label2.innerText = 'Good Options: Hiking Trails'
//             mainMessage.append(label2)
//             secondary.forEach((item) => {
//                 let newMessage = document.createElement('div')
//                 newMessage.innerText = item
//                 let newTrail = document.createElement('a')
//                 // let newTrail = document.createElement('div')
//                 trailhead[0].parks.forEach((park) => {
//                     if(park.name === item){
//                         newTrail.innerText = park.url
//                         newTrail.href = park.url
//                     } else {return}
//                 })
//                 let thisDiv = document.createElement('div')
//                 thisDiv.append(newMessage, newTrail)
//                 thisDiv.classList.add('info-box')
//                 mainMessage.append(thisDiv)
//             })
//             let label3 = document.createElement('h3')
//             label3.innerText = 'Parks with a Playground'
//             mainMessage.append(label3)
//             playground.data.data[0].parks.forEach((park) => {
//                 console.log(park)
//                 let newPlayground = document.createElement('div')
//                 let playgroundText = document.createElement('div')
//                 let playgroundLink = document.createElement('a')
//                 if(park.states.includes(selectState.value)){
//                     playgroundText.innerText = park.fullName
//                     playgroundLink.innerText = park.url
//                     playgroundLink.href = park.url
//                 } else {
//                     return
//                 }
//                 newPlayground.append(playgroundText, playgroundLink)
//                 newPlayground.classList.add('info-box')
//                 mainMessage.append(newPlayground)
//                 // if(park.states.includes(selectState.value)){
//                 //     label3.style.display('none')
//                 // }
//             })
//         }
//         else {
//             return
//         }
        
//     })

