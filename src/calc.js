var productionRate = 0;

function updateNumTurrets() {
  const sizeX = parseInt(document.getElementById("shipSizeX").value);
  const sizeY = parseInt(document.getElementById("shipSizeY").value);
  const thrusterCount = parseInt(document.getElementById("thrusterCount").value);
  let numTurrets = Math.floor(sizeX / 3) * 2 + Math.floor(sizeY / 3) * 2 - thrusterCount;
  numTurrets = Math.max(0, Math.min(numTurrets, 104));
  document.getElementById("numTurrets").value = numTurrets;
}

function calculateAmmoConsumption() {
  var ammoType = document.getElementById("ammoType").value;
  if (ammoType === "standardAmmo") {
    var ammoConsumptionRate = 1;
    productionRate = 4 / 3;
  } else if (ammoType === "trashAmmo") {
    var ammoConsumptionRate = 0.5;
    productionRate = 1 / 3;
  } else if (ammoType === "flakAmmo") {
    var ammoConsumptionRate = 0.5;
    productionRate = 4 / 3;
  } else if (ammoType === "punchAmmo") {
    var ammoConsumptionRate = 0.5;
    productionRate = 4 / 3;
  } else if (ammoType === "yankAmmo") {
    var ammoConsumptionRate = 0.5;
    productionRate = 4 / 3;
  } else if (ammoType === "scattershotAmmo") {
    var ammoConsumptionRate = 0.5;
    productionRate = 4 / 3;
  } else if (ammoType === "sniperAmmo") {
    var ammoConsumptionRate = 0.5;
    productionRate = 4 / 3;
  } else if (ammoType === "slugAmmo") {
    var ammoConsumptionRate = 0.25;
    productionRate = 4 / 3;
  }
  document.getElementById("ammoConsumptionRate").value = ammoConsumptionRate;
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
  var sizeX = document.getElementById("shipSizeX").value;
  var sizeY = document.getElementById("shipSizeY").value;
  var thrusterCount = document.getElementById("thrusterCount").value;
  var mass = (sizeX * sizeY) ** 0.5 * 2;

  var total_thrust = (thrusterCount / 4 * 2000) + 2000;
  var max_thrust = mass * 100;
  if (max_thrust > total_thrust) { total_thrust = max_thrust }
  var max_speed = Math.round(20 + 0.4 * total_thrust / mass);

  document.getElementById("shipSpeed").value = Math.max(0, max_speed);
}

function calculateSpace() {
  var totalShipSize = document.getElementById("shipSizeY").value * document.getElementById("shipSizeX").value;
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
  var regenRate = Math.round(((1 / ((-0.95 * generators) + 0.95 + generators)) * generators * 100) - (tanks*500*0.02)) + 100;
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
  var coresConsumed = Math.round((shieldRegen*60) / 5000);
  document.getElementById("coresConsumed").value = coresConsumed;
}

function limitValues() {
  var shipSizeX = document.getElementById("shipSizeX").value;
  var shipSizeY = document.getElementById("shipSizeY").value;
  var thrusterCount = document.getElementById("thrusterCount").value;
  var generators = document.getElementById("shieldGenerators").value;
  var tanks = document.getElementById("shieldTanks").value;
  var shieldSpace = document.getElementById("shieldSpace").value;
  var totalShipSize = document.getElementById("shipSizeY").value * document.getElementById("shipSizeX").value;

  document.getElementById("thrusterCount").value = Math.max(0, Math.min(thrusterCount, (Math.floor(shipSizeX / 3) * 2 + Math.floor(shipSizeY / 3) * 2)));

  document.getElementById("shipSizeX").value = Math.max(0, Math.min(shipSizeX, 78));
  document.getElementById("shipSizeY").value = Math.max(0, Math.min(shipSizeY, 78));

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
}

updateAllCalculations();
