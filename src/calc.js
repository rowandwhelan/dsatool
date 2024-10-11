var productionRate = 4;
var trueShipX = 30;
var trueShipY = 30;
var totalGens = 20;
var totalTanks = 10;
var batteryNumber = 0;
var ammoConsumptionRate = 1/1.5;

document.getElementById("addBattery").addEventListener("click", addBattery);
document.getElementById("removeBattery").addEventListener("click", removeBattery);
addBattery();

function addBattery(){
  batteryNumber++
  document.getElementById("shieldBatteryEndpoint").insertAdjacentHTML("beforebegin", `  
    <h3 id="batteryHeading${batteryNumber}">Shield battery #${batteryNumber}:</h3>
    <label for="shieldGenerators${batteryNumber}" id="label-for-shieldGenerators${batteryNumber}">Number of shield generators:</label>
    <input type="number" id="shieldGenerators${batteryNumber}" name="shieldGenerators${batteryNumber}" placeholder="20" value="20" min="0"/>
    <label for="shieldTanks${batteryNumber}" id="label-for-shieldTanks${batteryNumber}">Number of shield tanks:</label>
    <input type="number" id="shieldTanks${batteryNumber}" name="shieldTanks${batteryNumber}" placeholder="10" value="10" min="0"/>`)
updateAllCalculations();
}

function removeBattery(){
  document.getElementById(`batteryHeading${batteryNumber}`).remove();
  document.getElementById(`shieldGenerators${batteryNumber}`).remove();
  document.getElementById(`label-for-shieldGenerators${batteryNumber}`).remove();
  document.getElementById(`shieldTanks${batteryNumber}`).remove();
  document.getElementById(`label-for-shieldTanks${batteryNumber}`).remove();
  batteryNumber--
  updateAllCalculations();
}

document.addEventListener("input", function (e) {
  if (e.target.name === "unitType") {
    var unitType = document.querySelector('input[name="unitType"]:checked').value;
    if (unitType === "shipBlocks") {
      document.getElementById("label-for-shipSizeX").innerText = "Ship size X (in ship blocks):";
      document.getElementById("label-for-shipSizeY").innerText = "Ship size Y (in ship blocks):";
      document.getElementById("shipSizeX").value = trueShipX;
      document.getElementById("shipSizeY").value = trueShipY;
    } else if (unitType === "RCs") {
      document.getElementById("label-for-shipSizeX").innerText = "Ship size X (in RCs):";
      document.getElementById("label-for-shipSizeY").innerText = "Ship size Y (in RCs):";
      document.getElementById("shipSizeX").value = (trueShipX / 3).toFixed(1);
      document.getElementById("shipSizeY").value = (trueShipY / 3).toFixed(1);
    } else if (unitType === "worldBlocks") {
      document.getElementById("label-for-shipSizeX").innerText = "Ship size X (in world blocks):";
      document.getElementById("label-for-shipSizeY").innerText = "Ship size Y (in world blocks):";
      document.getElementById("shipSizeX").value = ((trueShipX + 2) / 8).toFixed(3);
      document.getElementById("shipSizeY").value = ((trueShipY + 2) / 8).toFixed(3);
    }
  }
});

function updateUnitCount() {
  var unitType = document.querySelector('input[name="unitType"]:checked').value;
  X = document.getElementById("shipSizeX").value;
  Y = document.getElementById("shipSizeY").value;  
  if (unitType === "shipBlocks") {
    trueShipX = Math.round(X);
    trueShipY = Math.round(Y);
  } else if (unitType === "RCs") {
    trueShipX = Math.round(X * 3);
    trueShipY = Math.round(Y * 3);
  } else if (unitType === "worldBlocks") {
    trueShipX = Math.round(X * 8 - 2);
    trueShipY = Math.round(Y * 8 - 2);
  }
  document.getElementById("shipSizeX").style.borderColor = '';
  document.getElementById("shipSizeY").style.borderColor = '';
  if ((trueShipX > 78) || (trueShipX < 0)){
    document.getElementById("shipSizeX").style.borderColor = 'red';
  } 
  if ((trueShipY > 78) || (trueShipY < 0)){
    document.getElementById("shipSizeY").style.borderColor = 'red';
  } 
  trueShipX = Math.max(0, Math.min(trueShipX, 78));
  trueShipY = Math.max(0, Math.min(trueShipY, 78));
}

function updateNumTurrets() {
  var thrusterCount = parseInt(document.getElementById("thrusterCount").value);
  var numTurrets = Math.floor(trueShipX / 3) * 2 + Math.floor(trueShipY / 3) * 2 - thrusterCount;
  console.log(Math.floor(trueShipX / 3) * 2, Math.floor(trueShipY / 3) * 2, thrusterCount)
  numTurrets = Math.max(0, Math.min(numTurrets, 104));
  document.getElementById("numTurrets").value = numTurrets;
}

function calculateAmmoConsumption() {
  var ammoType = document.getElementById("ammoType").value;
  if (ammoType === "standardAmmo") {
    var damage = 200;
  } else if (ammoType === "flakAmmoFar") {
    var damage = 300;
  } else if (ammoType === "flakAmmoNear") {
    var damage = 150;
  } else if (ammoType === "punchAmmo") {;
    var damage = 75;
  } else if (ammoType === "yankAmmo") {
    var damage = 75;
  } else if (ammoType === "scattershotAmmo") {
    var damage = 300;
  } else if (ammoType === "sniperAmmoMin") {
    var damage = 150;
  } else if (ammoType === "sniperAmmoMax") {
    var damage = 300;
  } else if (ammoType === "slugAmmoMin") {
    var damage = 200;
  } else if (ammoType === "slugAmmoMax") {
    var damage = 400;
  }
  document.getElementById("ammoConsumptionRate").value = ammoConsumptionRate;
  var numTurrets = parseInt(document.getElementById("numTurrets").value);
  document.getElementById("damagePerSecond").value = (ammoConsumptionRate * damage * numTurrets) / 2;
}

function updateShieldLoadIndicator() {
  var coresOrBoosters = document.querySelector('input[name="coresOrBoosters"]:checked').value;
  if (parseInt(document.getElementById("shieldLoad").value) === 0) {
    if (coresOrBoosters === "cores"){
    document.getElementById("labelForShieldLoadIndicator").innerText = "Core leak when batteries off:";
    } else if (coresOrBoosters === "boosters"){
      document.getElementById("labelForShieldLoadIndicator").innerText = "Booster leak when batteries off:";
    }
  } else {
    document.getElementById("labelForShieldLoadIndicator").innerText = "Shield load: " + parseInt(document.getElementById("shieldLoad").value) + "%";
  }
}

function updateFirePercentageIndicator() {
  document.getElementById("firePercentageIndicator").innerText = parseInt(document.getElementById("firePercentage").value) + "%";
}

function updateAmmoOutput() {
  var ammoSource = document.querySelector('input[name="ammoSource"]:checked').value;
  if (ammoSource === "preloaded") {
    document.getElementById("label-for-fabricatorsRequired").innerText = "Ammo required (20 minutes of combat):";
    calculateAmmoRequired();
  } else if (ammoSource === "fabricators") {
    document.getElementById("label-for-fabricatorsRequired").innerText = "Fabricators required:";
    calculateFabricatorsRequired();
  }
}

function calculateAmmoRequired() {
  var firePercentage = document.getElementById("firePercentage").value / 100;
  var ammoConsumptionRate = document.getElementById("ammoConsumptionRate").value;
  var turretNumber = document.getElementById("numTurrets").value;
  var ammoRequired = Math.ceil(ammoConsumptionRate * turretNumber * firePercentage * 0.5 * 60 * 20);
  document.getElementById("fabricatorsRequired").value = ammoRequired;
}

function calculateFabricatorsRequired() {
  var firePercentage = document.getElementById("firePercentage").value / 100;
  var ammoConsumptionRate = document.getElementById("ammoConsumptionRate").value;
  var turretNumber = document.getElementById("numTurrets").value;
  var fabricatorsRequired = Math.ceil((ammoConsumptionRate * turretNumber * 0.5 * firePercentage) / productionRate);
  document.getElementById("fabricatorsRequired").value = fabricatorsRequired;
}

function calculateLoadingType() {
  var firePercentage = document.getElementById("firePercentage").value / 100;
  var ammoConsumptionRate = document.getElementById("ammoConsumptionRate").value;
  var loadingType = Math.ceil(2 * ammoConsumptionRate * firePercentage);
  if (loadingType === 1) {
    document.getElementById("loadingType").value = "Single loaded";
  } else if (loadingType === 2) {
    document.getElementById("loadingType").value = "Double loaded";
  } else if (loadingType === 3) {
    document.getElementById("loadingType").value = "Triple loaded";
  } else if (loadingType === 4) {
    document.getElementById("loadingType").value = "Quadruple loaded";
  } else {
    document.getElementById("loadingType").value = "N/A";
  }
}

function calculateSpeed() {
  var thrusterCount = document.getElementById("thrusterCount").value;
  if (Math.floor((20 + 0.4 * ((thrusterCount-1) * 750 + 1125)) / (((trueShipX+2) * (trueShipY+2)) ** 0.5 * 2)) > 60) {
    document.getElementById("label-for-thrusterCount").innerText = "Total number of thrusters [above speed limit]:";
    document.getElementById("thrusterCount").style.borderColor = 'red';
  } else if (Math.floor((20 + 0.4 * (thrusterCount * 750 + 1125)) / (((trueShipX+2) * (trueShipY+2)) ** 0.5 * 2)) < 60) {
    document.getElementById("label-for-thrusterCount").innerText = "Total number of thrusters [below speed limit]:";
    document.getElementById("thrusterCount").style.borderColor = 'red'; 
  } else {
    document.getElementById("label-for-thrusterCount").innerText = "Total number of thrusters [at speed limit, perfect!]:";
    document.getElementById("thrusterCount").style.borderColor = '';
  } 
}

function calculateGensAndTanks(){
  totalGens = 0;
  totalTanks = 0;
  for (var i = 1; i <= batteryNumber; i++){
    totalGens += parseInt(document.getElementById(`shieldGenerators${i}`).value);
    totalTanks += parseInt(document.getElementById(`shieldTanks${i}`).value);
    if (totalTanks > 45){
      document.getElementById(`shieldTanks${i}`).value--
    }
  }
  if (batteryNumber <= 1){
    document.getElementById("label-for-batterySwap").style.display = "none";
    document.getElementById("batterySwap").style.display = "none";
  } else if (batteryNumber > 1){
      document.getElementById("label-for-batterySwap").style.display = "";
      document.getElementById("batterySwap").style.display = "";
  }
}

function calculateSpace() {
  var totalShipSize = trueShipY * trueShipX;
  var space = (totalGens * 8 + totalTanks * 4) * (4/3);
  var spacePercent = Math.round((space / totalShipSize) * 100);
  document.getElementById("shieldSpace").value = spacePercent + "%";
}

function calculateTotalShieldCapacity() {
  document.getElementById("totalHealth").value = 5000 + totalTanks * 1000;
  if (document.getElementById("batterySwap").checked && (batteryNumber > 1) && (totalGens > 0)) {
    document.getElementById("totalHealth").value = 5000 + totalTanks * 1000 / batteryNumber;
  }
}

function calculateShieldRegen() {
  var regenRate = Math.max(0, Math.round((1 / (-0.9 * totalGens + 0.9 + totalGens)) * totalGens * 100 - totalTanks * 1000 * 0.01) + 100);
 if (document.getElementById("batterySwap").checked && (batteryNumber > 1) && (totalGens > 0)){
    regenRate = Math.max(0, Math.round((1 / (-0.9 * totalGens + 0.9 + totalGens)) * totalGens * (200-100*(1/batteryNumber)) - totalTanks * 1000 * (0.01-0.01*((totalGens/batteryNumber)/totalGens))) + 100);
  } 
  if (regenRate === 0) {
    document.getElementById("labelForShieldRegen").innerText = "Shield regen (HP/second): [Warning: Shield regen too low! Add more generators]";
  } else if (regenRate > 0) {
    document.getElementById("labelForShieldRegen").innerText = "Shield regen (HP/second):";
  }
  document.getElementById("shieldRegen").value = regenRate;
}

function calculateTimeToFullHealth() {
  var totalHealth = document.getElementById("totalHealth").value;
  var shieldRegen = document.getElementById("shieldRegen").value;
  var timeToFullHealth = Math.round(totalHealth / shieldRegen);
  document.getElementById("timeToFullHealth").value = timeToFullHealth;
}

function calculateCoreConsumption() {
  var shieldRegen = parseInt(document.getElementById("shieldRegen").value);
  var shieldLoad = document.getElementById("shieldLoad").value / 100;
  var coreConsumption = 0;
  var coresOrBoosters = document.querySelector('input[name="coresOrBoosters"]:checked').value;
  if (shieldLoad === 0) {
    coreConsumption = Math.round((totalTanks * 500 * 0.01 * 60) / 5000);
  } else {
    coreConsumption = Math.max(0, ((shieldRegen * shieldLoad - 100 + 2 * (totalTanks * 500 * 0.02)) * 60) / 5000);
    if (document.getElementById("batterySwap").checked && (batteryNumber > 1) && (totalGens > 0)) {
      coreConsumption = Math.max(0, ((shieldRegen * shieldLoad - 100 + 2 * (totalTanks * 500 * (0.02-0.01*((totalGens/batteryNumber)/totalGens)))) * 60) / 5000);
    }

  }
  if (coresOrBoosters === "cores"){
    document.getElementById("coreConsumption").value = Math.round(coreConsumption);
    document.getElementById("label-for-coreConsumption").innerText = "Cores consumed per minute:";
    document.getElementById("label-for-matsRequiredForBoosters").style.display = 'none';
    document.getElementById("matsRequiredForBoosters").style.display = 'none';
  } else if (coresOrBoosters === "boosters") {
    document.getElementById("coreConsumption").value = Math.round(10*coreConsumption);
    document.getElementById("label-for-coreConsumption").innerText = "Boosters consumed per minute:";
    document.getElementById("label-for-matsRequiredForBoosters").style.display = '';
    document.getElementById("matsRequiredForBoosters").style.display = '';
    document.getElementById("matsRequiredForBoosters").value = Math.round(10*coreConsumption)*4*20;
  }
}

function calculateMatConsumption(){
 if (document.getElementById("matsRequiredForBoosters").value == ""){
  document.getElementById("metalConsumed").innerText = `Metal: ${parseInt(Math.ceil(document.getElementById("ammoConsumptionRate").value * document.getElementById("numTurrets").value * (document.getElementById("firePercentage").value / 100) * 0.5 * 60 * 20 / 4))}`
 } else {
  document.getElementById("metalConsumed").innerText = `Metal: ${(Math.ceil(document.getElementById("ammoConsumptionRate").value * document.getElementById("numTurrets").value * (document.getElementById("firePercentage").value / 100) * 0.5 * 60 * 20 / 4)) + parseInt(document.getElementById("matsRequiredForBoosters").value)}`
 }
  document.getElementById("expConsumed").innerText = `Explosives: ${Math.ceil(document.getElementById("ammoConsumptionRate").value * document.getElementById("numTurrets").value * (document.getElementById("firePercentage").value / 100) * 0.5 * 60 * 20 / 4)}`
  if (document.querySelector('input[name="coresOrBoosters"]:checked').value === "cores"){
    document.getElementById("coresConsumed").innerText = `Cores: ${document.getElementById("coreConsumption").value * 20}`
    document.getElementById("metalConsumed").innerText = `Metal: ${parseInt(Math.ceil(document.getElementById("ammoConsumptionRate").value * document.getElementById("numTurrets").value * (document.getElementById("firePercentage").value / 100) * 0.5 * 60 * 20 / 4))}`
  } else {
    document.getElementById("coresConsumed").innerText = `Cores: 0`;
    }
  document.getElementById("fuelConsumed").innerText = `Fuel: ${document.getElementById("thrusterCount").value * 20}`
}

function limitValues() {
  var thrusterCount = document.getElementById("thrusterCount").value;
  var shieldSpace = document.getElementById("shieldSpace").value;
  var totalShipSize = trueShipX * trueShipY;

  document.getElementById("thrusterCount").value = Math.max(0, Math.min(thrusterCount, Math.floor(trueShipX / 3) * 2 + Math.floor(trueShipY / 3) * 2));
  /*
  document.getElementById("shieldGenerators").max = Math.floor((totalShipSize - tanks * 4) / 8);
  document.getElementById("shieldTanks").max = Math.floor((totalShipSize - generators * 8) / 4);
  document.getElementById("shieldGenerators").value = Math.max(0, Math.min(generators, document.getElementById("shieldGenerators").max));
  document.getElementById("shieldTanks").value = Math.max(0, Math.min(tanks, document.getElementById("shieldTanks").max));
  */
  document.getElementById("shieldSpace").value = Math.max(0, Math.min(100, shieldSpace));
}

document.addEventListener("input", updateAllCalculations);

function updateAllCalculations() {
  limitValues();
  updateUnitCount();
  calculateGensAndTanks();
  calculateTotalShieldCapacity();
  calculateShieldRegen();
  calculateTimeToFullHealth();
  calculateCoreConsumption();
  calculateSpace();
  calculateSpeed();
  calculateAmmoConsumption();
  updateFirePercentageIndicator();
  updateShieldLoadIndicator();
  calculateFabricatorsRequired();
  updateNumTurrets();
  updateAmmoOutput();
  updateShieldLoadIndicator();
  calculateLoadingType();
  calculateMatConsumption();
}

updateAllCalculations();
