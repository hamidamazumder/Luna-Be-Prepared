let signUpButton = document.querySelector('#signUp')

function signInWithGoogle(){
        var googleAuthProvider = new firebase.auth.GoogleAuthProvider
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(function(data){
        console.log(data)
        addUserToScreen(data)
        })
    }
    
    window.onload-startup()
