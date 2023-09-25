///////////////////////
// DOM ELEMENTS
const buttonLessons = document.querySelector('#get-lessons')
const newDivsGoTo = document.querySelector('#learn-content')
const selectBar = document.querySelector('#grade-select')
let navBar = document.querySelector('nav')
newDivsGoTo.innerHTML = null

// STICKY NAVBAR
let sticky = navBar.offsetTop

navBar.addEventListener('scroll', () => {
    if (window.scrollY >= sticky){
        navBar.classList.add('sticky')
    } else {
        navBar.classList.remove('sticky')
    }
})

buttonLessons.addEventListener('click', async () => {
    let answer = await axios.get('https://developer.nps.gov/api/v1/lessonplans?api_key=IY3dDsdp6sk5U4T51VeAKTqB99vPv2c4yfuWrIF5')
    let barValue = selectBar.value
    newDivsGoTo.replaceChildren()
    // for each answer, log appropriate information
    answer.data.data.forEach((el) => {
        let sortThrough = el.gradeLevel
        console.log()
        // Elements to push information
        let newH3 = document.createElement('h3')
        let newSubject = document.createElement('div')
        let newGrade = document.createElement('div')
        let newDuration = document.createElement('div')
        let newObjective = document.createElement('div')
        let newURL = document.createElement('a')
        let elseMessage = document.createElement('div')
        if (barValue.includes('pre')){
            if (sortThrough.includes('Lower')){
                newH3.innerText = el.title
                newSubject.innerText =  `Subject: ${el.subject[0]}`
                newGrade.innerText = sortThrough
                newDuration.innerText = el.duration
                newObjective.innerText =  el.questionObjective
                newURL.innerText = el.url
                newURL.href = el.url
                let thisDiv = document.createElement('div')
                thisDiv.append(newH3, newSubject, newGrade, newDuration, newObjective, newURL)
                thisDiv.classList.add('info-box')
                newDivsGoTo.append(thisDiv)
            } 
        } else if (barValue.includes('third')) {
            if (sortThrough.includes('Upper')){
                newH3.innerText = el.title
                newSubject.innerText =  `Subject: ${el.subject[0]}`
                newGrade.innerText = sortThrough
                newDuration.innerText = el.duration
                newObjective.innerText =  el.questionObjective
                newURL.innerText = el.url
                newURL.href = el.url
                let thisDiv = document.createElement('div')
                thisDiv.append(newH3, newSubject, newGrade, newDuration, newObjective, newURL)
                thisDiv.classList.add('info-box')
                newDivsGoTo.append(thisDiv)
                }
        } else if (barValue.includes('sixth')) {
            if (sortThrough.includes('Middle')){
                newH3.innerText = el.title
                newSubject.innerText =  `Subject: ${el.subject[0]}`
                newGrade.innerText = sortThrough
                newDuration.innerText = el.duration
                newObjective.innerText =  el.questionObjective
                newURL.innerText = el.url
                newURL.href = el.url
                let thisDiv = document.createElement('div')
                thisDiv.append(newH3, newSubject, newGrade, newDuration, newObjective, newURL)
                thisDiv.classList.add('info-box')
                newDivsGoTo.append(thisDiv)
            }
        } else {
            return
        }
    })
})
