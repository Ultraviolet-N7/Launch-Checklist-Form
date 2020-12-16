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

// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.querySelector("form");
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
    response.json().then(function(json){
        let target = document.getElementById("missionTarget");
        target.innerHTML = `<h2>Mission Destination</h2>
        <ol>
           <li>Name: ${json[0].name}</li>
           <li>Diameter: ${json[0].diameter}</li>
           <li>Star: ${json[0].star}</li>
           <li>Distance from Earth: ${json[0].distance}</li>
           <li>Number of Moons: ${json[0].moons}</li>
        </ol>
        <img src="${json[0].image}">`
    });
   });
   form.addEventListener("submit", function(event){
       let pilotNameInput = document.querySelector("input[name=pilotName]");
       let copilotNameInput = document.querySelector("input[name=copilotName]");
       let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
       let cargoMassInput = document.querySelector("input[name=cargoMass]");
       let pilotStatus = document.getElementById("pilotStatus");
       let copilotStatus = document.getElementById("copilotStatus");
       let fuelStatus = document.getElementById("fuelStatus");
       let cargoStatus = document.getElementById("cargoStatus");
       let faultyItems = document.getElementById("faultyItems");
       let launchStatus = document.getElementById("launchStatus");
              
        
       if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" ||cargoMassInput.value === ""){
           alert("All fields are required.");
           event.preventDefault();
       } else if (!isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value) || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)){
           alert("Please ensure that all fields contain valid data.");
           event.preventDefault();
       } else {
        pilotStatus.style.color = "green";
        copilotStatus.style.color = "green";
        faultyItems.style.visibility = "visible";
        pilotStatus.innerHTML = `${pilotNameInput.value} is ready.`;
        copilotStatus.innerHTML = `${copilotNameInput.value} is ready.`;
        event.preventDefault();
            if (fuelLevelInput.value < 10000 && cargoMassInput.value > 10000){
                launchStatus.style.color = "red";
                launchStatus.innerHTML = `Shuttle not ready for launch.`;
                fuelStatus.style.color = "red";
                cargoStatus.style.color = "red";
                fuelStatus.innerHTML = `Fuel level must be a minimum of 10,000 liters.`;
                cargoStatus.innerHTML = `Cargo mass must not exceed 10,000 kilograms.`;
            
            }else if (fuelLevelInput.value < 10000){
                launchStatus.style.color = "red";
                launchStatus.innerHTML = `Shuttle not ready for launch.`;
                fuelStatus.style.color = "red";
                cargoStatus.style.color = "green";
                fuelStatus.innerHTML = `Fuel level must be a minimum of 10,000 liters.`;
            }else if (cargoMassInput.value > 10000){
                launchStatus.style.color = "red";
                launchStatus.innerHTML = `Shuttle not ready for launch.`;
                cargoStatus.style.color = "red";
                fuelStatus.style.colr = "green";
                cargoStatus.innerHTML = `Cargo mass must not exceed 10,000 kilograms.`;
                       
            }else{
                launchStatus.style.color = "green";
                launchStatus.innerHTML = `Shuttle is ready for launch!`;
                fuelStatus.style.color = "green";
                cargoStatus.style.color = "green";
                
            }

            }
            
    });
    
});


