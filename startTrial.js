let daysThree = document.querySelector('#daysThree') 
let daysFive = document.querySelector('#days5') 
let daysSeven = document.querySelector('#days7') 
let daysTen = document.querySelector('#days10') 
let daysSubmit = document.querySelector('#startTrialButton')
let firstlight= document.querySelector('#firstlight')
let secondlight= document.querySelector('#secondlight')
let thirdlight= document.querySelector('#thirdlight')
let firstmed= document.querySelector('#firstmed')
let secondmed= document.querySelector('#secondmed')
let thirdmed= document.querySelector('#thirdmed')
let firsthev= document.querySelector('#firsthev')
let secondhev= document.querySelector('#secondhev')
let thirdhev= document.querySelector('#thirdhev')

let fourthhev= document.querySelector('#fourthhev')
let fourthmed= document.querySelector('#fourthmed')
let fourthlight= document.querySelector('#fourthlight')

let forth = document.querySelector('#fourth')
let fifth = document.querySelector('#fifth')

let fifthhev= document.querySelector('#fifthhev')
let fifthmed= document.querySelector('#fifthmed')
let fifthlight= document.querySelector('#fifthlight')

let days 
// let buttons = document.querySelectorAll('.all')
let flow = []
let user

//for each all of these buttons 
daysThree.addEventListener('click', () => {
 daysThree.classList.toggle("darker")
   console.log("three")    
   days = 3
})

daysFive.addEventListener('click', () => {
     daysFive.classList.toggle("darker")
   console.log("five")    
   days = 5
fourth.classList.remove('hidden')
fifth.classList.remove('hidden')

})

daysSeven.addEventListener('click', () => {
     daysSeven.classList.toggle("darker")
   console.log("seven")    
   days = 7
})

daysTen.addEventListener('click', () => {
     daysTen.classList.toggle("darker")
   console.log("ten")   
   days = 10
})


firstlight.addEventListener('click', () => {
  firstlight.classList.toggle("darker")
    flow = 1
        console.log(flow)

})

firstmed.addEventListener('click', () => {
  firstmed.classList.toggle("darker")
  flow = 2 
      console.log(flow)

})

firsthev.addEventListener('click', () => {
    firsthev.classList.toggle("darker")
      console.log(flow)
    flow = 3
    
})


secondlight.addEventListener('click', () => {
  secondlight.classList.toggle("darker")
    flow = 4
          console.log(flow)

})

secondmed.addEventListener('click', () => {
  secondmed.classList.toggle("darker")
  flow = 5 
        console.log(flow)

})

secondhev.addEventListener('click', () => {
    secondhev.classList.toggle("darker")
      console.log(flow)
    flow = 6
    
})


thirdlight.addEventListener('click', () => {
  thirdlight.classList.toggle("darker")
    flow = 7
          console.log(flow)

})

thirdmed.addEventListener('click', () => {
  thirdmed.classList.toggle("darker")
  flow = 8
        console.log(flow)

})

thirdhev.addEventListener('click', () => {
    thirdhev.classList.toggle("darker")
    flow = 9
          console.log(flow)

    
})

fourthlight.addEventListener('click', () => {
  fourthlight.classList.toggle("darker")
    flow = 10
          console.log(flow)

})

fourthmed.addEventListener('click', () => {
  fourthmed.classList.toggle("darker")
  flow =11
        console.log(flow)

})

fourthhev.addEventListener('click', () => {
    fourthhev.classList.toggle("darker")
    flow = 12
          console.log(flow)

    
})

fifthlight.addEventListener('click', () => {
  fifthlight.classList.toggle("darker")
    flow = 13
          console.log(flow)

})

fifthmed.addEventListener('click', () => {
 fifthmed.classList.toggle("darker")
  flow =14
        console.log(flow)

})

fifthhev.addEventListener('click', () => {
    fourthhev.classList.toggle("darker")
    flow = 15
          console.log(flow)

    
})



daysSubmit.addEventListener('click', () =>{
    user = {
    "name": localStorage.getItem("name"),
    "email": localStorage.getItem("email"),
    "daysOfPeriod": days,
    "flow": flow,
    "snacks":"",
    "skinCare":"",
    "Body":"",
    "numBoxes":"",
    "oftenBoxes":""
}

console.log(user)
localStorage.setItem("user", JSON.stringify(user))
      window.location = `chooseBoxes.html`
})

    