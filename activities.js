////////////////////////////
// DOM ELEMENTS
const selectActivity = document.querySelector('#activity-select')
const selectState = document.querySelector('#state-select')
const button = document.querySelector('#get-activities')

let currentState = 'CA' //selectState.value
let currentActivity = '09DF0950-D319-4557-A57E-04CD2F63FF42' //selectActivity.value

// EVENT LISTENER & FUNCTION
button.addEventListener('click', async () => {
    let thisParkCode = 'acad'
    const information = await axios.get(`https://developer.nps.gov/api/v1/activities/parks?id=${currentActivity}&api_key=IY3dDsdp6sk5U4T51VeAKTqB99vPv2c4yfuWrIF5`)
    const parkInfo = await axios.get(`https://developer.nps.gov/api/v1/parks?parkCode=${thisParkCode}&api_key=IY3dDsdp6sk5U4T51VeAKTqB99vPv2c4yfuWrIF5`)
    console.log(information)
    // State Array
    let stateParkCode = []
    information.data.data[0].parks.forEach((item) => {
        if (item.states === currentState){
            stateParkCode.push(item.parkCode)
        }
    })
})
