let startTrial = document.querySelector('#startTrialButton')

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


    window.onload-startup()
