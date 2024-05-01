let str = 1
let strGain = 1
let energy = 5;
let injury = 0;
let weights = 0;
let energyRecoveryInterval = 2000;



function sit_up(){
    if (weights >= 5){
        if (energy >= 2.5 && injury < 10) {
            str += strGain + 1;
            energy -= 2.5;
            document.getElementById("str").innerText = "Strength: " + str;
            document.getElementById("energy").innerText = "Energy: " + energy;
        } else {
            injury += 1;
            document.getElementById("injury").innerText = "Injury: " + injury;
            if (injury >= 10) {
                alert("Injury reached 10. You lose all your strenght!");
                injury = 0;
                str = 0;
                energy = 0; // Reset energy to 0
                energyRecoveryInterval = 5000; // Increase energy recovery interval
                document.getElementById("str").innerText = "Strength: " + str;
                document.getElementById("injury").innerText = "Injury: " + injury;
            }
        }
        checkStr();
    }
}

function check_sit_up(){
    if (weights >= 5) {
        document.getElementById("wide_pushups").style.display = "block";
        return true
    }
    
}



function checkStr(){
    if (str >= 10) {
        document.getElementById("weight1").style.display = "block";
    }
    else {
        document.getElementById("weight1").style.display = "none";
    }
}

// Function to update strength
function updateStr() {
    if (energy >= 1 && injury < 10) {
        str += strGain;
        energy -= 1;
        document.getElementById("str").innerText = "Strength: " + str;
        document.getElementById("energy").innerText = "Energy: " + energy;
    } else {
        injury += 1;
        document.getElementById("injury").innerText = "Injury: " + injury;
        if (injury >= 10) {
            alert("Injury reached 10. You lose all your strenght!");
            injury = 0;
            str = 0;
            energy = 0; // Reset energy to 0
            energyRecoveryInterval = 5000; // Increase energy recovery interval
            document.getElementById("str").innerText = "Strength: " + str;
            document.getElementById("injury").innerText = "Injury: " + injury;
        }
    }
    checkStr();
}


function weight(){
    if(str>= 10){
      weights += 1;
      str -= 10; 
      strGain += 0.5;
      
      document.getElementById("str").innerText = "Strength: " + str;
      document.getElementById("weights_owned").innerText = "Weights owned: " + weights;
      
      checkStr();
      if (check_sit_up() === true) {
        sit_up()
      }
    }
  } 
  

// Function to regain energy
function regainEnergy() {
    if (energy < 5 && injury < 10) {
        energy += 1;
        document.getElementById("energy").innerText = "Energy: " + energy;
    } else if (injury === 10) {
        energy -= 2; // Decrement energy faster when injured
        document.getElementById("energy").innerText = "Energy: " + energy;
    }
}

// Function for injury recovery
function injuryRecovery() {
    if (injury > 0) {
        injury -= 1;
        document.getElementById("injury").innerText = "Injury: " + injury;
    }
}



// Set intervals for energy and injury recovery
setInterval(regainEnergy, energyRecoveryInterval);
setInterval(injuryRecovery, 10000);
