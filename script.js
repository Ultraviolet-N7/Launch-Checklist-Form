// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
       let pilotNameInput = document.querySelector("input[name=pilotName]");
       let copilotNameInput = document.querySelector("input[name=copilotName]");
       let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
       let cargoMassInput = document.querySelector("input[name=cargoMass]");
       let pilotStatus = document.getElementById("pilotStatus");
       let copilotStatus = document.getElementById("copilotStatus");
       let faultyItems = document.getElementById("faultyItems");
       let submitButton = document.getElementById("formSubmit");
       
        
       if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" ||cargoMassInput.value === ""){
           alert("All fields are required.");
           event.preventDefault();
       } else if (!isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value) || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)){
           alert("Please ensure that all fields contain valid data.");
           event.preventDefault();
       } else {
        pilotStatus.style.color = "green";
        copilotStatus.style.color = "green";
        faultyItems.style.visibility = "visible"
        pilotStatus.innerHTML = `${pilotNameInput.value} is ready.`
        copilotStatus.innerHTML = `${copilotNameInput.value} is ready.`
        event.preventDefault();
            //if (fuelLevelInput.value )
       }
       
     
   });
    
});
// faultyItems.style.visibility = "visible";
//         pilotStatus.innerHTML = `${pilotNameInput.value} is ready.`
//         copilotStatus.innerHTML = `${copilotNameInput.value} is ready.`
//         console.log("This worked.");
//         event.preventDefault();
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
