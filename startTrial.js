//Days of The period
let daysThree = document.querySelector('#daysThree') 
let daysFive = document.querySelector('#days5') 
let daysSeven = document.querySelector('#days7') 
let daysTen = document.querySelector('#days10') 

//submit button
let firstButton = document.querySelector('#firstButton')
let thirdButton = document.querySelector('#thirdButton')

//flow
let firstlight= document.querySelector('#firstlight')
let secondlight= document.querySelector('#secondlight')
let thirdlight= document.querySelector('#thirdlight')
let fourthlight= document.querySelector('#fourthlight')
let fifthlight= document.querySelector('#fifthlight')
let sixthlight= document.querySelector('#sixthlight')
let seventhlight= document.querySelector('#seventhlight')
let eighthlight= document.querySelector('#eigthlight')
let ninthlight= document.querySelector('#ninthlight')
///
let firstmed= document.querySelector('#firstmed')
let secondmed= document.querySelector('#secondmed')
let thirdmed= document.querySelector('#thirdmed')
let fourthmed= document.querySelector('#fourthmed')
let fifthmed= document.querySelector('#fifthmed')
let sixthmed= document.querySelector('#sixthmed')
let seventhmed= document.querySelector('#seventhmed')
let eightmed= document.querySelector('#eigthmed')
let ninthmed= document.querySelector('#ninthmed')
//
let firsthev= document.querySelector('#firsthev')
let secondhev= document.querySelector('#secondhev')
let thirdhev= document.querySelector('#thirdhev')
let fourthhev= document.querySelector('#fourthhev')
let fifthhev= document.querySelector('#fifthhev')
let sixthhev= document.querySelector('#sixthhev')
let seventhhev= document.querySelector('#seventhhev')
let eighthev= document.querySelector('#eigthhev')
let ninthhev= document.querySelector('#ninthhev')

//cards for the flow
let fourth = document.querySelector('#fourth')
let fifth = document.querySelector('#fifth')
let sixth = document.querySelector('#sixth')
let seventh = document.querySelector('#seventh')
let eight = document.querySelector('#eigth')
let ninth = document.querySelector('#ninth')

//pads tamps or add-ons
let tamps = document.querySelector('#tamps')
let padsed = document.querySelector('#padsCool')
let snacks = document.querySelector('#snacks')
let bodycare = document.querySelector('#bodycare')
let padsandtampons = document.querySelector('#padsandtampons')
let skincare =document.querySelector('#skincare')


//months for packaging 
let three = document.querySelector("#three")
let six = document.querySelector("#six")
let one = document.querySelector("#one")
let twelve = document.querySelector("#twelve")

//how they want it shipped
let em = document.querySelector("#em")
let periodTracker = document.querySelector("#pt")

//send button
let send = document.querySelector("#sendButton")

//algorithim choices
let choiceOnes = document.querySelector("#choiceOne")
let choiceTwos = document.querySelector("#choiceTwo")
let choiceThrees = document.querySelector("#choiceThree")

//identify headers
let longP = document.querySelector("#longP")
let heavyP = document.querySelector("#heavyP")
let port = document.querySelector("#port")
let addOnHeader = document.querySelector("#AddOnHeader")
let oftenB = document.querySelector("#oftenB")
let howMany = document.querySelector("#howMany")
let pickPack = document.querySelector("#pickPack")
let reviewOrder = document.querySelector("#reviewOrder")

let box1 = document.querySelector("#box1")
let box2 = document.querySelector("#box2")
let box3 = document.querySelector("#box3")


let lightHTML = document.querySelectorAll('.light')
let mediumHTML = document.querySelectorAll('.medium')
let heavyHTML = document.querySelectorAll('.heavy')

let darkerHTML = document.querySelectorAll('.makeDarker')
let ONE = document.querySelectorAll('.choiceONE')


//variables for algorithim
let light = 0
let medium = 0
let heavy = 0
let days 
let flow = []
let user
let months = 0
let shipping = 0
let addOns = 0
let products = 0

welcome.innerHTML = `How long is your period ${(localStorage.getItem("name"))}?`
// number of days of period
    daysThree.addEventListener('click', () => {
     daysThree.classList.toggle("darker")
       console.log("three")    
       days = 3
       fourth.classList.add('hidden')
        fifth.classList.add('hidden')
       sixth.classList.add('hidden')
       seventh.classList.add('hidden')
       eight.classList.add('hidden')
       ninth.classList.add('hidden')
    
    })
    
    daysFive.addEventListener('click', () => {
        daysFive.classList.toggle("darker")
       console.log("five")    
       days = 5
        fourth.classList.remove('hidden')
        fifth.classList.remove('hidden')
        sixth.classList.add('hidden')
       seventh.classList.add('hidden')
       eight.classList.add('hidden')
       ninth.classList.add('hidden')
    
    })
    
    daysSeven.addEventListener('click', () => {
         daysSeven.classList.toggle("darker")
       console.log("seven")    
       days = 7
       fourth.classList.remove('hidden')
        fifth.classList.remove('hidden')
        sixth.classList.remove('hidden')
        seventh.classList.remove('hidden')
       eight.classList.add('hidden')
       ninth.classList.add('hidden')
    })
    
    daysTen.addEventListener('click', () => {
         daysTen.classList.toggle("darker")
       days = 9
          console.log(days)   
    
       fourth.classList.remove('hidden')
        fifth.classList.remove('hidden')
        sixth.classList.remove('hidden')
        seventh.classList.remove('hidden')
        eight.classList.remove('hidden')
        ninth.classList.remove('hidden')
        
    })
 
 //toggles darkness
    darkerHTML.forEach(darkness => { //any word here for taco
              darkness.addEventListener('click', () => {
                darkness.classList.toggle("darker")
              })
    })

ONE.forEach(choiceONEE => { //any word here for taco
              choiceONEE.addEventListener('click', () => {
                choiceONEE.classList.toggle("darker")
              })
    })


padsed.addEventListener( 'click', () => {
    padsed.classList.toggle("darker")
    products = 1
        console.log("pads")
})

tamps.addEventListener('click', () => {
        tamps.classList.toggle("darker")

    products = 2
    console.log("tamps")
})

padsandtampons.addEventListener('click', () => {
        padsandtampons.classList.toggle("darker")
    products = 3
        console.log("both")

})
//add-ons
    skincare.addEventListener('click', () => {
      skincare.classList.toggle("darker")
      addOns = 2
    })
    
    bodycare.addEventListener('click', () => {
      bodycare.classList.toggle("darker")
      addOns = 3
    })
    
    snacks.addEventListener('click', () => {
      snacks.classList.toggle("darker")
      addOns = 1
    })


//how many months
    one.addEventListener('click', () => {
    one.classList.toggle("darker")
    months = 1
    console.log(months)
    })
    
    three.addEventListener('click', () => {
    three.classList.toggle("darker")
    months = 3
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



//when shipped
em.addEventListener('click', () => {
    em.classList.toggle("darker")
    shipping = 1
    })
    
    periodTracker.addEventListener('click', () => {
    periodTracker.classList.toggle("darker")
    shipping = 2
    })

    
    
// function sendToFirebase(){
//     daysSubmit.addEventListener('click', () =>{
//         longP.classList.add("hidden")
//         heavyP.classList.add("hidden")
//         port.classList.add("hidden")
//         addOnHeader.classList.add("hidden")
//         oftenB.classList.remove("hidden")
//         howMany.classList.remove("hidden")
//         pickPack.classList.remove("hidden")

        
//         user = {
//     "name": localStorage.getItem("name"),
//     "email": localStorage.getItem("email"),
//     "daysOfPeriod": days,
//     "light": light,
//     "medium": medium,
//     "heavy": heavy,
//     "AddOns":addOns,
//     "numBoxes":months,
//     "oftenBoxes":pOrE,
//             }

//     console.log(user)
//     localStorage.setItem("user", JSON.stringify(user))
//         //   window.location = "numberOfBoxes.html"
//         })
// }


function flowFinder()
{
    lightHTML.forEach(lighthtml => {
     if (lighthtml.classList.contains('darker')){
         light++
         
     }
        
    })
     
    mediumHTML.forEach(mediumhtml => { 
     if (mediumhtml.classList.contains('darker')){
         medium++
         
     }
    })
     
     heavyHTML.forEach(heavyhtml => { 
     if (heavyhtml.classList.contains('darker')){
         heavy++
         
     }
     })
}
    firstButton.addEventListener('click', () => {
        flowFinder()
        
        if (products == 2)
        {
                let choiceOneLight = Math.floor(light/days * 15)
                let choiceOneMedium = Math.floor(medium/days * 15)
                let choiceOneHeavy = 15 - (choiceOneMedium +  choiceOneLight)
                     
                
                let choiceTwoLight = Math.floor(light/days * 20)
                let choiceTwoMedium = Math.floor(medium/days * 20)
                let choiceTwoHeavy = 20 - (choiceOneMedium +  choiceTwoLight)
                
                let choiceThreeLight = Math.floor(light/days * 25)
                let choiceThreeMedium = Math.floor(medium/days * 25)
                let choiceThreeHeavy = 25 - (choiceOneMedium +  choiceThreeLight)
                // lightTamp.innerHTML = 
                
                choiceOne.innerHTML += `
                <div class = 'container'>
                <div class = "row aln center">
                <div class = "col -4">
                  <div  class="card makeDarker" style="width: 18rem;" > 
        				  <div  class="card-header jumbo makeDarker">
        				    Choice One: 15 Tampons
        				  </div>
        				  <ul class="list-group list-group-flush choiceONE ">
        				    <li class="list-group-item choiceONE">${choiceOneLight} Light Tampons</li>
        				    <li class="list-group-item choiceONE">${choiceOneMedium} Regular Tampons</li>
        				    <li class="list-group-item choiceONE">${choiceOneHeavy} Super Tampons</li>
        				  </ul>
        				  </div>
        				  </div>
        				  
        				  <div class = "col - 4"> 
        				<div  class="card makeDarker" style="width: 18rem;">
        				  <div  class="card-header jumbo makeDarker">
        				    Choice Two: 20 Tampons
        				  </div>
        				  <ul class="list-group list-group-flush ">
        				    <li id = "lt" class="list-group-item ">${choiceTwoLight} Light Tampons</li>
        				    <li id = "rt" class="list-group-item ">${choiceTwoMedium} Regular Tampons</li>
        				    <li id = "st" class="list-group-item ">${choiceTwoHeavy} Super Tampons</li>
        				  </ul>
        				</div>
        				</div>
        				    	
        
        				      <div class = "col -4"> 
        					<div  id ="choiceThree" class="card makeDarker" style="width: 18rem;"> 
        				  <div class="card-header jumbo makeDarker">
        				    Choice Three: 25 Tampons
        				  </div>
        				  <ul class="list-group list-group-flush ChoiceTHREE">
        				    <li class="list-group-item ChoiceTHREE">${choiceThreeLight} Light Tampons</li>
        				    <li class="list-group-item ChoiceTHREE">${choiceThreeMedium} Regular Tampons</li>
        				    <li class="list-group-item ChoiceTHREE">${choiceThreeHeavy} Super Tampons</li>
        				  </ul>
        				</div>
        				</div>
        				    				</div>
        				    				    				    				</div>
    
    
                `
                 longP.classList.add("hidden")
                heavyP.classList.add("hidden")
              port.classList.add("hidden")
              addOnHeader.classList.add("hidden")
              oftenB.classList.remove("hidden")
              howMany.classList.remove("hidden")
            pickPack.classList.remove("hidden")

            }
        else if (products == 1)
        {
            let choiceOneLight = Math.floor(light/days * 8)
            let choiceOneMedium = Math.floor(medium/days * 8)
            let choiceOneHeavy = 8 - (choiceOneMedium +  choiceOneLight)
                 
            
            let choiceTwoLight = Math.floor(light/days * 15)
            let choiceTwoMedium = Math.floor(medium/days * 15)
            let choiceTwoHeavy = 15 - (choiceOneMedium +  choiceTwoLight)
            
            let choiceThreeLight = Math.floor(light/days * 20)
            let choiceThreeMedium = Math.floor(medium/days * 20)
            let choiceThreeHeavy = 20 - (choiceOneMedium +  choiceThreeLight)
            
            
            choiceOne.innerHTML += `  
             <div class = 'container'>
                <div class = "row aln center">
            <div class = "col -4"> 
              <div  class="card makeDarker " style="width: 18rem;" > 
    				  <div  class="card-header jumbo makeDarker">
    				    Choice One: 8 Pads
    				  </div>
    				  <ul class="list-group list-group-flush ">
    				    <li class="list-group-item">${choiceOneLight} Light Pads</li>
    				    <li class="list-group-item">${choiceOneMedium} Regular Pads</li>
    				    <li class="list-group-item">${choiceOneHeavy} Super Pads</li>
    				  </ul>
    				  </div>
    				  </div>
    				  
    				  <div class = "col - 4"> 
    				<div  class="card makeDarker" style="width: 18rem;">
    				  <div id = "choiceOne" class="card-header jumbo makeDarker">
    				    Choice Two: 15 Pads
    				  </div>
    				  <ul class="list-group list-group-flush">
    				    <li id = "lt" class="list-group-item">${choiceTwoLight} Light Pads</li>
    				    <li id = "rt" class="list-group-item">${choiceTwoMedium} Regular Pads</li>
    				    <li id = "st" class="list-group-item">${choiceTwoHeavy} Super Pads</li>
    				  </ul>
    				</div>
    				</div>
    
    				      <div class = "col -4"> 
    					<div  id ="choiceThree" class="card makeDarker" style="width: 18rem;"> 
    				  <div class="card-header jumbo makeDarker">
    				    Choice Three: 20 Pads
    				  </div>
    				  <ul class="list-group list-group-flush">
    				    <li class="list-group-item">${choiceThreeLight} Light Pads</li>
    				    <li class="list-group-item">${choiceThreeMedium} Regular Pads</li>
    				    <li class="list-group-item">${choiceThreeHeavy} Super Pads</li>
    				  </ul>
    				</div>
    				</div>
    					</div>
    				</div>
    				`
    		pickPack.classList.remove("hidden")
    
     longP.classList.add("hidden")
                heavyP.classList.add("hidden")
              port.classList.add("hidden")
              addOnHeader.classList.add("hidden")
              oftenB.classList.remove("hidden")
              howMany.classList.remove("hidden")
            pickPack.classList.remove("hidden")
        }
        else  
        // (products == 3)
        {
        
            let choiceOneLightPads = Math.floor(light/days * 3)
            let choiceOneMediumPads = Math.floor(medium/days * 3)
            let choiceOneHeavyPads = 3 - (choiceOneMediumPads +  choiceOneLightPads)
                 
            let choiceOneLightTamps = Math.floor(light/days * 12)
            let choiceOneMediumTamps = Math.floor(medium/days * 12)
            let choiceOneHeavyTamps = 12 - (choiceOneMediumTamps +  choiceOneLightTamps)
            
            let choiceTwoLightPads = Math.floor(light/days * 6)
            let choiceTwoMediumPads = Math.floor(medium/days * 6)
            let choiceTwoHeavyPads = 6 - (choiceTwoMediumPads+  choiceTwoLightPads)
                 
            let choiceTwoLightTamps = Math.floor(light/days * 16)
            let choiceTwoMediumTamps = Math.floor(medium/days * 16)
            let choicTwoHeavyTamps = 16 - (choiceOneMediumTamps +  choiceOneLightTamps)
            
            let choiceThreeLightPads = Math.floor(light/days * 6)
            let choiceThreeMediumPads = Math.floor(medium/days * 6)
            let choiceThreeHeavyPads = 6 - (choiceOneMediumPads +  choiceOneLightPads)
                 
            let choiceThreeLightTamps = Math.floor(light/days * 16)
            let choiceThreeMediumTamps = Math.floor(medium/days * 16)
            let choiceThreeHeavyTamps = 16 - (choiceOneMediumTamps +  choiceOneLightTamps)
            
            choiceOne.innerHTML += `  
             <div class = 'container'>
                <div class = "row aln center">
            <div class = "col -4"> 
              <div  class="card makeDarker " style="width: 18rem;" > 
    				  <div  class="card-header jumbo makeDarker">
    				    Choice One: 12 Tampons and 3 pads
    				  </div>
    				  <ul class="list-group list-group-flush ">
    				    <li class="list-group-item">${choiceOneLightPads} Light Pads and ${choiceOneLightTamps} Light Tampons </li>
    				    <li class="list-group-item">${choiceOneMediumPads} Regular Pads and  ${choiceOneHeavyTamps} Regular Tampons</li>
    				    <li class="list-group-item">${choiceOneHeavyPads} Super Pads and  ${choiceOneMediumTamps} Super Tampons</li>
    				  </ul>
    				  </div>
    				  </div>
    				  
    				  <div class = "col - 4"> 
    				<div  class="card makeDarker" style="width: 18rem;">
    				  <div id = "choiceOne" class="card-header jumbo makeDarker">
    				    Choice Two: 16 Tampons  and 6 Pads
    				  </div>
    				  <ul class="list-group list-group-flush">
    		<li class="list-group-item">${choiceTwoLightPads} Light Pads and ${choiceTwoLightTamps} Light Tampons </li>
    				    <li class="list-group-item">${choiceTwoMediumPads} Regular Pads and  ${choiceTwoMediumTamps} Regular Tampons</li>
    				    <li class="list-group-item">${choiceTwoHeavyPads} Super Pads and  ${choicTwoHeavyTamps} Super Tampons</li>
    				  </ul>
    				</div>
    				</div>
    
    				      <div class = "col -4"> 
    					<div  id ="choiceThree" class="card makeDarker" style="width: 18rem;"> 
    				  <div class="card-header jumbo makeDarker">
    				    Choice Three: 20 Tampons and 10 Pads 
    				  </div>
    				  <ul class="list-group list-group-flush">
    				    <li class="list-group-item">${choiceThreeLightPads} Light Pads and ${choiceThreeLightTamps} Light Tampons </li>
    				    <li class="list-group-item">${choiceThreeMediumPads} Regular Pads and  ${choiceThreeMediumTamps} Regular Tampons</li>
    				    <li class="list-group-item">${choiceThreeHeavyTamps} Super Pads and  ${choiceThreeHeavyTamps} Super Tampons</li>
    				  </ul>
    				</div>
    				</div>
    					</div>
    				</div>
    				`
    		pickPack.classList.remove("hidden")
    
     longP.classList.add("hidden")
                heavyP.classList.add("hidden")
              port.classList.add("hidden")
              addOnHeader.classList.add("hidden")
              oftenB.classList.remove("hidden")
              howMany.classList.remove("hidden")
            pickPack.classList.remove("hidden")
        }

})
//   box1.addEventListener('click', () => {
//       box = 1
//           box1.classList.toggle("darker")

//   })
   
//     box2.addEventListener('click', () => {
//       box = 2
//           box2.classList.toggle("darker")

//   })
   
//     box3.addEventListener('click', () => {
//       box = 3
//       box3.classList.toggle("darker")
//   })


    thirdButton.addEventListener('click', () => {
        
            oftenB.classList.add("hidden")
              howMany.classList.add("hidden")
            pickPack.classList.add("hidden")
            reviewOrder.classList.remove("hidden")
            secondButton.classList.remove("hidden")
            
            // words.innerHTML += `
            // Hello ${(localStorage.getItem("name"))}! 
            // Thank you for placing an order!
            // Your period is ${days} long.
            // `
            // if (products == 1){
            // words.innerHTML += `
            //             <br>

            // You chose to buy all Pads.
            // `
            // }
            
            // if (products == 2){
            // words.innerHTML += `
            //             <br>

            // You chose to buy all Tampons.
            // `
            // }
            
            //  if (products == 3){
            // words.innerHTML += `
            //             <br>

            // You chose to buy a mix of  Tampons and Pads.
            // `
            // }
            
            // if(addOns == 1){
            // words.innerHTML += `
            //             <br>

            // You chose to add snacks.
            // `
            // }
            
            //   if(addOns == 1){
            // words.innerHTML += `
            //             <br>

            // You chose to add Skincare.
            // `
            // }
            
            //  if(addOns == 1){
            // words.innerHTML += `
            //             <br>

            // You chose to add Makeup.
            // `
            // }

            
            // if(shipping == 1){
            //     words.innerHTML += `
            //             <br>

            //     You chose to recieve the box the first of every month`
            // }
            // if(shipping == 3){
            //     words.innerHTML += `
            //             <br>

            //     You chose to recieve the box according to your period cycle using our period tracker`
            // }
            // if(box == 1){
            //     words.innerHTML += `
            //             <br>

            //     You chose to recieve the box according to your period cycle using our period tracker`
            // }
            
            //   words.innerHTML += `
            // <br>
            // You chose to buy the Luna carepackage for ${months} months
            // `
            
            
            words.innerHTML += `
            Hello Hamida Mazumder! 
            <br>
            You period is 5 days long.
            <br>
            You chose both tampons and pads.
            <br>
            You also added snacks. 
            <br>
                        Your chose box 2 so you wil recieve 16 pads and 6 tampons.
                                    <br>


            2 Light Pads and 6 Light Tampons
                        <br>

            2 Regular Pads and 6 Regular Tampons
                        <br>

            2 Super Pads and 8 Super Tampons
            <br>
            The box will be sent to you based on your cyce using our period tracker.
            `
    })