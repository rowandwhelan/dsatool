var productionRate = 0;
var pastUnitType = "shipBlocks";
var trueShipX = 30;
var trueShipY = 30;

function updateUnitType(){
  var unitType = document.querySelector('input[name="unitType"]:checked').value;
  var sizeX = parseInt(document.getElementById("shipSizeX").value);
  var sizeY = parseInt(document.getElementById("shipSizeY").value);
  if (unitType == "shipBlocks") {
    document.getElementById("label-for-shipSizeX").innerText = "Ship Size X (in ship blocks):";
    document.getElementById("label-for-shipSizeY").innerText = "Ship Size Y (in ship blocks):";
    if (pastUnitType == "RCs") {
      document.getElementById("shipSizeX").value = Math.round(sizeX*3)
      document.getElementById("shipSizeY").value = Math.round(sizeY*3)
    }
    if (pastUnitType == "worldBlocks") {
      document.getElementById("shipSizeX").value = Math.round(sizeX*8-2)
      document.getElementById("shipSizeY").value = Math.round(sizeY*8-2)
    } 
    document.getElementById("shipSizeX").value = Math.max(0, Math.min(sizeX, 78));
    document.getElementById("shipSizeY").value = Math.max(0, Math.min(sizeY, 78));
    trueShipX = document.getElementById("shipSizeX").value;
    trueShipY = document.getElementById("shipSizeY").value;
    pastUnitType = "shipBlocks";
  }  else if (unitType === "RCs") {
    document.getElementById("label-for-shipSizeX").innerText = "Ship Size X (in RCs):";
    document.getElementById("label-for-shipSizeY").innerText = "Ship Size Y (in RCs):";
      if (pastUnitType === "shipBlocks") {
      document.getElementById("shipSizeX").value = Math.round((sizeX/3) * 10) / 10;
      document.getElementById("shipSizeY").value = Math.round((sizeY/3) * 10) / 10; 
    } 
      if (pastUnitType === "worldBlocks") {
      document.getElementById("shipSizeX").value = Math.round((sizeX*(8/3)-2/3) * 10) / 10;
      document.getElementById("shipSizeY").value = Math.round((sizeY*(8/3)- 2/3) * 10) / 10;
    } 
    document.getElementById("shipSizeX").value = Math.max(0, Math.min(sizeX, (Math.round(26*10)/10)));
    document.getElementById("shipSizeY").value = Math.max(0, Math.min(sizeY, (Math.round(26*10)/10)));
    trueShipX = Math.round(document.getElementById("shipSizeX").value*3);
    trueShipY = Math.round(document.getElementById("shipSizeY").value*3);
    pastUnitType = "RCs";
  } else if (unitType === "worldBlocks") {
    document.getElementById("label-for-shipSizeX").innerText = "Ship Size X (in world blocks):";
    document.getElementById("label-for-shipSizeY").innerText = "Ship Size Y (in world blocks):";
      if (pastUnitType === "shipBlocks") {
      document.getElementById("shipSizeX").value = Math.round((sizeX/8+2) * 100) / 100;
      document.getElementById("shipSizeY").value = Math.round((sizeY/8+2) * 100) / 100;
    } 
    if (pastUnitType === "RCs") {
      document.getElementById("shipSizeX").value = Math.round((sizeX/(8/3)+2/3) * 100) / 100;
      document.getElementById("shipSizeY").value = Math.round((sizeY/(8/3)+2/3) * 100) / 100;
    } 
    document.getElementById("shipSizeX").value = Math.max(0, Math.min(sizeX, 10));
    document.getElementById("shipSizeY").value = Math.max(0, Math.min(sizeY, 10));
    trueShipX = Math.round(document.getElementById("shipSizeX").value*8-2);
    trueShipY = Math.round(document.getElementById("shipSizeY").value*8-2);
    pastUnitType = "worldBlocks";
  }
}

function updateNumTurrets() {
  var thrusterCount = parseInt(document.getElementById("thrusterCount").value);
  var numTurrets = Math.floor(trueShipX / 3) * 2 + Math.floor(trueShipY / 3) * 2 - thrusterCount;
  numTurrets = Math.max(0, Math.min(numTurrets, 104));
  document.getElementById("numTurrets").value = numTurrets;
}

function calculateAmmoConsumption() {
  var ammoType = document.getElementById("ammoType").value;
  if (ammoType === "standardAmmo") {
    var ammoConsumptionRate = 1;
    var damage = 100;
    productionRate = 4 / 3;
  } else if (ammoType === "trashAmmo") {
    var ammoConsumptionRate = 0.5;
    var damage = 100;
    productionRate = 1 / 3;
  } else if (ammoType === "flakAmmoFar") {
    var ammoConsumptionRate = 0.5;
    var damage = 350;
    productionRate = 4 / 3;
  } else if (ammoType === "flakAmmoNear") {
    var ammoConsumptionRate = 0.5;
    var damage = 100;
    productionRate = 4 / 3;
  } else if (ammoType === "punchAmmo") {
    var ammoConsumptionRate = 0.5;
    var damage = 50;
    productionRate = 4 / 3;
  } else if (ammoType === "yankAmmo") {
    var ammoConsumptionRate = 0.5;
    var damage = 50;
    productionRate = 4 / 3;
  } else if (ammoType === "scattershotAmmo") {
    var ammoConsumptionRate = 0.5;
    var damage = 150;
    productionRate = 4 / 3;
  } else if (ammoType === "sniperAmmo") {
    var ammoConsumptionRate = 0.5;
    var damage = 150;
    productionRate = 4 / 3;
  } else if (ammoType === "slugAmmo") {
    var ammoConsumptionRate = 0.25;
    var damage = 250;
    productionRate = 4 / 3;
  }
  document.getElementById("ammoConsumptionRate").value = ammoConsumptionRate;
  var numTurrets = parseInt(document.getElementById("numTurrets").value);
  document.getElementById("damagePerSecond").value = (ammoConsumptionRate*damage*numTurrets/2);
}

function updateShieldLoadIndicator() {
  var shieldLoad = parseInt(document.getElementById("shieldLoad").value);
  document.getElementById("shieldLoadIndicator").innerText = shieldLoad + '%';
}

function updateFirePercentageIndicator() {
  var firePercent = parseInt(document.getElementById("firePercentage").value);
  document.getElementById("firePercentageIndicator").innerText = firePercent + '%';
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
  var fabricatorsRequired = Math.ceil((ammoConsumptionRate * turretNumber * firePercentage * 0.5) / productionRate);
  document.getElementById("fabricatorsRequired").value = fabricatorsRequired;
}

function calculateSpeed() {
  var thrusterCount = document.getElementById("thrusterCount").value;
  var mass = (trueShipX * trueShipY) ** 0.5 * 2;

  var total_thrust = (thrusterCount / 4 * 2000) + 2000;
  var max_thrust = mass * 100;
  if (max_thrust > total_thrust) { total_thrust = max_thrust }
  var max_speed = Math.round(20 + 0.4 * total_thrust / mass);

  document.getElementById("shipSpeed").value = Math.max(0, max_speed);
}

function calculateSpace() {
  var totalShipSize = trueShipY * trueShipX;
  var generators = parseInt(document.getElementById("shieldGenerators").value);
  var tanks = parseInt(document.getElementById("shieldTanks").value);
  var space = generators * 8 + tanks * 4;
  var spacePercent = Math.round((space / totalShipSize) * 100);
  document.getElementById("shieldSpace").value = spacePercent + "%";
}

function calculateTotalShieldCapacity() {
  var tanks = document.getElementById("shieldTanks").value;
  var totalShieldCapacity = 2000 + tanks * 500;
  document.getElementById("totalHealth").value = totalShieldCapacity;
}

function calculateShieldRegen() {
  var generators = parseInt(document.getElementById("shieldGenerators").value);
  var tanks = parseInt(document.getElementById("shieldTanks").value);
  if (generators > 0){
    var regenRate = Math.round(((1 / ((-0.95 * generators) + 0.95 + generators)) * generators * 100) - (tanks*500*0.02)) + 100;
  } else {
  var regenRate = Math.round((1 / ((-0.95 * generators) + 0.95 + generators)) * generators * 100) + 100;
  }
  if (regenRate <= 0) {
    regenRate = 0
    document.getElementById("labelForShieldRegen").innerText = "Shield Regen (HP/second): [Warning: Shield regen cannot support the shield system and calculations will be inaccurate. Add more generators]"
  } if (regenRate > 0) {
    document.getElementById("labelForShieldRegen").innerText = "Shield Regen (HP/second):"
  }
  document.getElementById("shieldRegen").value = regenRate;
}

function calculateTimeToFullHealth() {
  var totalHealth = document.getElementById("totalHealth").value;
  var shieldRegen = document.getElementById("shieldRegen").value;
  var timeToFullHealth = Math.round(totalHealth / shieldRegen);
  document.getElementById("timeToFullHealth").value = timeToFullHealth;
}

function calculateCoresConsumed() {
  var shieldRegen = parseInt(document.getElementById("shieldRegen").value);
  var tanks = parseInt(document.getElementById("shieldTanks").value);
  var shieldLoad = document.getElementById("shieldLoad").value / 100;
  if (shieldLoad != 0) {
  if (Math.round(((shieldRegen*shieldLoad-100)*60) / 5000) > 0) {
  var coresConsumed = Math.round(((shieldRegen*shieldLoad-100)*60) / 5000);
  } else {
    var coresConsumed = Math.round(((shieldRegen*shieldLoad)*60) / 5000);
  }
  } else if (shieldLoad = 0){
    var coresConsumed = Math.round((tanks*500*0.02) / 5000);
  }
  document.getElementById("coresConsumed").value = coresConsumed;
}

function limitValues() {
  var thrusterCount = document.getElementById("thrusterCount").value;
  var generators = document.getElementById("shieldGenerators").value;
  var tanks = document.getElementById("shieldTanks").value;
  var shieldSpace = document.getElementById("shieldSpace").value;
  var totalShipSize = trueShipX * trueShipY;

  document.getElementById("thrusterCount").value = Math.max(0, Math.min(thrusterCount, (Math.floor(trueShipX / 3) * 2 + Math.floor(trueShipY / 3) * 2)));

  document.getElementById("shieldGenerators").max = Math.floor((totalShipSize - (tanks * 4)) / 8);
  document.getElementById("shieldTanks").max = Math.floor((totalShipSize - (generators * 8)) / 4);
  document.getElementById("shieldGenerators").value = Math.max(0, Math.min(generators, document.getElementById("shieldGenerators").max));
  document.getElementById("shieldTanks").value = Math.max(0, Math.min(tanks, document.getElementById("shieldTanks").max));

  document.getElementById("shieldSpace").value = Math.max(0, Math.min(100, shieldSpace));

}

document.addEventListener("input", updateAllCalculations);
document.addEventListener("change", updateAllCalculations);

function updateAllCalculations() {
  limitValues();
  updateUnitType();
  calculateTotalShieldCapacity();
  calculateShieldRegen();
  calculateTimeToFullHealth();
  calculateCoresConsumed();
  calculateSpace();
  calculateSpeed();
  calculateFabricatorsRequired();
  calculateAmmoConsumption();
  updateFirePercentageIndicator();
  updateNumTurrets();
  updateAmmoOutput();
  updateShieldLoadIndicator()
}

updateAllCalculations();
