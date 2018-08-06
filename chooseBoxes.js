// let regPads = document.querySelector('#regPads')
// let medPads = document.querySelector('#medPads')
// let hevPads = document.querySelector('#hevPads')
// let regTamps = document.querySelector('#regTamp')
// let medTamps = document.querySelector('#medTamp')
// let hevTamps = document.querySelector('#hevPads')
let tamps = document.querySelector('#tamps')
let pads = document.querySelector('#pads')
let snacks = document.querySelector('#snacks')
let bodycare = document.querySelector('#bodycare')
let padsandtampons = document.querySelector('#padsandtampons')




let skincare =document.querySelector('#skincare')
// let pantyliners = document.querySelector('#pantyliners')
let skincareChoice
let daysSubmit = document.querySelector("#nextButton")

console.log("starttrial")

tamps.addEventListener('click', () => {
  tamps.classList.toggle("darker")
})

padsandtampons.addEventListener('click', () => {
  padsandtampons.classList.toggle("darker")
})

pads.addEventListener('click', () => {
  pads.classList.toggle("darker")
})

skincare.addEventListener('click', () => {
  skincare.classList.toggle("darker")
  skincareChoice = 1
})

bodycare.addEventListener('click', () => {
  bodycare.classList.toggle("darker")
  skincareChoice = 1
})

snacks.addEventListener('click', () => {
  snacks.classList.toggle("darker")
  skincareChoice = 1
})

daysSubmit.addEventListener('click', () =>{
    user = localStorage.getItem("user")
    user = JSON.parse(user)
    user.skinCare = skincareChoice
  console.log(user)
 firebase.database().ref('/users').push(user).then(()=>{
      window.location = "custom.html"
    })
})

   