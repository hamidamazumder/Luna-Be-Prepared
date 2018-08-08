let three = document.querySelector("#three")
let six = document.querySelector("#six")
let one = document.querySelector("#one")
let twelve = document.querySelector("#twelve")
let em = document.querySelector("#em")
let choiceOnes = document.querySelector("#choiceOne")
let choiceTwos = document.querySelector("#choiceTwo")
let choiceThrees = document.querySelector("#choiceThree")
let send = document.querySelector("#sendButton")
let periodTracker = document.querySelector("#pt")
let months = 0
let pOrE = 0

three.addEventListener('click', () => {
three.classList.toggle("darker")
months = 3
console.log(months)

})

one.addEventListener('click', () => {
one.classList.toggle("darker")
months = 1
console.log(months)

})


six.addEventListener('click', () => {
six.classList.toggle("darker")
months  = 6
console.log(months)
})


twelve.addEventListener('click', () => {
twelve.classList.toggle("darker")
months = 12
console.log(months)

})


em.addEventListener('click', () => {
em.classList.toggle("darker")
pOrE = 1
})

periodTracker.addEventListener('click', () => {
periodTracker.classList.toggle("darker")
pOrE = 2
})



// choiceOnes.addEventListener('click', () => {
// choiceOnes.classList.toggle("darker")
// console.log("manz")
// })

// choiceTwos.addEventListener('click', () => {
// choiceTwos.classList.toggle("darker")
// console.log("womanz")
// })

// choiceThrees.addEventListener('click', () => {
// choiceThrees.classList.toggle("darker")
// console.log("bananz")
// })

send.addEventListener('click', () => {
    
        user = {
    "name": localStorage.getItem("name"),
    "email": localStorage.getItem("email"),
    "daysOfPeriod": localStorage.getItem("days"),
    "light": localStorage.getItem("light"),
    "medium": localStorage.getItem("medium"),
    "heavy": localStorage.getItem("heavy"),
    "AddOns":localStorage.getItem("addOns"),
    "numBoxes":months,
    "oftenBoxes":pOrE
    }

    console.log(user)
    localStorage.setItem("user", JSON.stringify(user))
        //   window.location = "numberOfBoxes.html"
          
          
        user = localStorage.getItem("user")
        user = JSON.parse(user)
        // user.skinCare = skincareChoice
      console.log(user)
    // firebase.database().ref('/users').push(user).then(()=>{
        
    })
    
    


// choiceOnes.addEventListener('click', () => {
// choiceOnes.classList.toggle("darker")
// console.log("manz")
// })

// choiceTwos.addEventListener('click', () => {
// choiceTwos.classList.toggle("darker")
// console.log("womanz")
// })

// choiceThrees.addEventListener('click', () => {
// choiceThrees.classList.toggle("darker")
// console.log("bananz")
// })

// send.addEventListener('click', () => {
    
//         user = {
//     "name": localStorage.getItem("name"),
//     "email": localStorage.getItem("email"),
//     "daysOfPeriod": localStorage.getItem("days"),
//     "light": localStorage.getItem("light"),
//     "medium": localStorage.getItem("medium"),
//     "heavy": localStorage.getItem("heavy"),
//     "AddOns":localStorage.getItem("addOns"),
//     "numBoxes":months,
//     "oftenBoxes":pOrE
//     }

    // console.log(user)
    // localStorage.setItem("user", JSON.stringify(user))
        //   window.location = "numberOfBoxes.html"
          
          
        user = localStorage.getItem("user")
        user = JSON.parse(user)
        // user.skinCare = skincareChoice
      console.log(user)
    // firebase.database().ref('/users').push(user).then(()=>{
        
    // })