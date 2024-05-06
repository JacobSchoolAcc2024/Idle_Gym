let str = 1
let strGain = 1
let energy = 5;
let injury = 0;
let weights = 0;
let enemy_hp = 100;
let player_hp = 100;
let energyRecoveryInterval = 2000;
let enemy_str = 2;
let enemy_level = 1;



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

// Function for fighting enemy  
function fightEnemy(){
    enemy_hp -= str;
    player_hp -= enemy_str;
    if (player_hp <= 0){
        player_hp=0;
        str=0;
    }
    if(enemy_hp <= 0){
        enemy_level += 1;
        enemy_hp = 100;
        enemy_str +=2;
    } 
    document.getElementById("player_str").innerText = "player strength: " + str;
    document.getElementById("enemy_HP").innerText = "enemy HP: " + enemy_hp;
    document.getElementById("player_HP").innerText = "player HP: " + player_hp;
    document.getElementById("enemy_level").innerText = "enemy level: " + enemy_level;
    
}
