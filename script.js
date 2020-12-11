// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
       let pilotNameInput = document.querySelector("input[name=pilotName]");
       let copilotNameInput = document.querySelector("input[name=copilotName]");
       let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
       let cargoMassInput = document.querySelector("input[name=cargoMass]");
       
       if (pilotNameInput.value === "" || !isNaN(pilotNameInput.value)){
           alert("Please enter a valid pilot name.");
           event.preventDefault();
       }
       if (copilotNameInput.value === "" || !isNaN(copilotNameInput.value)){
           alert("Please enter a valid co-pilot name.");
           event.preventDefault();
       }
       if (fuelLevelInput.value === "" || isNaN(fuelLevelInput.value)){
           alert("Please enter a valid fuel level.");
           event.preventDefault(); 
       }
       if (cargoMassInput.value === "" || isNaN(cargoMassInput.value)){
           alert("Please enter a valid cargo mass.");
           event.preventDefault();
       }
       
   });
   console.log(typeof pilotNameInput.value); 
});
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
