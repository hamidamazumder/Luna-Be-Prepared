let startTrial = document.querySelector('#startTrialButton')
let product = document.querySelectorAll('.products')
startTrial.addEventListener('click', e =>{
        signInWithGoogle()
    
})


function signInWithGoogle(){
    console.log('hey')
        var googleAuthProvider = new firebase.auth.GoogleAuthProvider
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(function(data){
        console.log(data)
        addUserToScreen(data)
        })
    }
    
   function addUserToScreen (userData){
        let userName = userData.user.displayName
        localStorage.setItem("name", userName)
        let userEmail = userData.user.email
        localStorage.setItem("email", userEmail)
                   window.location = "startTrial.html"


   }

function startup(){
    console.log(localStorage.getItem("name"))

}

    product.forEach(products => { //any word here for taco
        products.addEventListener('click',  ()=>{
        window.location = "products.html"
        })
        })
        
    window.location

    window.onload-startup()

