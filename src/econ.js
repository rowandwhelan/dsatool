const dayjs = require('dayjs');
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

let timeSlot;
econInit();

async function econInit(
  startDay,
  startMonth,
  startYear,
  endDay,
  endMonth,
  endYear
) {
  let buffer = 1;
  timeSlot = 14;
  if (timeSlot <= 1) {
    timeSlot = 1;
  }
  if (
    startDay === undefined ||
    startMonth === undefined ||
    startYear === undefined
  ) {
    const yesterday = dayjs().subtract(buffer, "days");
    startDay = yesterday.format("D");
    startMonth = yesterday.format("M");
    startYear = yesterday.format("YYYY");
  }

  if (endDay === undefined || endMonth === undefined || endYear === undefined) {
    const endSlot = dayjs().subtract(buffer + timeSlot, "days");
    endDay = endSlot.format("D");
    endMonth = endSlot.format("M");
    endYear = endSlot.format("YYYY");
  }
  await econGetDate(startDay, startMonth, startYear, endDay, endMonth, endYear);
}

async function econGetDate(
  startDay,
  startMonth,
  startYear,
  endDay,
  endMonth,
  endYear
) {
  let endDate = dayjs(`${endYear}-${endMonth}-${endDay}`);
  let currentDate = dayjs(`${startYear}-${startMonth}-${startDay}`);
  let countdown = 0;
  let miniCounter = 0;
  let datesToFetch = [];
  while (currentDate.isAfter(endDate) || currentDate.isSame(endDate)) {
    let formattedDate = currentDate.format("YYYY_M_D");
    datesToFetch.push(formattedDate);
    currentDate = currentDate.subtract(1, "day");
  }

  for (const date of datesToFetch) {
    if (miniCounter == 0) {
      document.getElementById("out").innerHTML = `Loading. ${Math.round((countdown/timeSlot) * 100)}%`;
    } else if (miniCounter == 1) {
      document.getElementById("out").innerHTML = `Loading.. ${Math.round((countdown/timeSlot) * 100)}%`;
    } else if (miniCounter == 2) {
      document.getElementById("out").innerHTML = `Loading... ${Math.round((countdown/timeSlot) * 100)}%`;
    }
    miniCounter++;
    if (miniCounter > 2) {miniCounter = 0};
    countdown++;
    await econGet(date);
  }
  econDataFetched = true;
  econInit = true;
  graphChart();
  document.getElementById("out").innerHTML = '';
}

async function econGet(date) {
  const apiUrl = `https://uncors.vercel.app/?url=https://pub.drednot.io/prod/econ/${date}/summary.json`;

  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      let econ = data;
      const itemDataResponse = await fetch(
        "https://uncors.vercel.app/?url=https://pub.drednot.io/prod/econ/item_schema.json",
      );
      if (itemDataResponse.ok) {
        const itemData = await itemDataResponse.json();
        output(econ, itemData, date);
      } else {
        console.error("Failed to fetch item schema data");
      }
    } else {
      console.error("Failed to fetch econ data");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
  
var econDataFetched = false;
var econInit = false;
var days = [];
var iron = [];
var exp = [];
var flux = [];
var rubber = [];
var cores = [];
var gens = [];
var projs = [];
var rcs = [];
var auto = [];
var burst = [];
var goldNull = [];
var silverNull = [];
var bug = [];
var shredder = [];
var legacy = [];
var glass = [];
var rcd = [];
var backpack = [];
var bp = [];
var manifest = [];
var bom = [];
var backpack = [];
var volleyball = [];
var basketball = [];
var beachball = [];
var football = [];
var rapid = [];
var pres = [];
var controller = [];
function output(econ, items, date) {
  let outputDate = dayjs(date, "YYYY_M_D").format("ddd[,] DD MMM YYYY")
    //document.getElementById("output").innerHTML += `<br><h2>${outputDate}<h2><br>`;
    days.push(outputDate)
    for (const [key, value] of Object.entries(econ.items_held)) {
      let itemNum = value;
      let i = 0;
      while (i < items.length) {
        if (items[i].id == key) {
          //document.getElementById("output").innerHTML += `${itemNum} ${items[i].name} ${key}<br>`;
          if (items[i].name == 'Iron') {
            iron.push(itemNum)
          } else if (items[i].name == 'Explosives') {
            exp.push(itemNum)
          } else if (items[i].name == 'Hyper Rubber') {
            rubber.push(itemNum)
          } else if (items[i].name == 'Flux Crystals') {
            flux.push(itemNum)
          } else if (items[i].name == 'Shield Core') {
            cores.push(itemNum)
          } else if (items[i].name == 'Shield Generator') {
            gens.push(itemNum)
          } else if (items[i].name == 'Shield Projector') {
            projs.push(itemNum)
          } else if (items[i].name == 'RC Turret (Packaged)') {
            rcs.push(itemNum)
          } else if (items[i].name == 'Auto Turret (Packaged)') {
            auto.push(itemNum)
          } else if (items[i].name == 'Burst Turret (Packaged)') {
            burst.push(itemNum)
          } else if (items[i].name == 'Gold Null Trophy') {
            goldNull.push(itemNum)
          } else if (items[i].name == 'Silver Null Trophy') {
            silverNull.push(itemNum)
          } else if (items[i].name == 'Bug Hunter Trophy') {
            bug.push(itemNum)
          } else if (items[i].name == 'Golden Item Shredder') {
            shredder.push(itemNum)
          } else if (items[i].name == 'Fabricator (Legacy, Packaged)') {
            legacy.push(itemNum)
          } else if (items[i].name == 'Hyper Ice Block') {
            glass.push(itemNum)
          } else if (items[i].name == 'Flux RCD') {
            rcd.push(itemNum)
          } else if (items[i].name == 'Backpack') {
            backpack.push(itemNum)
          } else if (items[i].name == 'Blueprint Scanner') {
            bp.push(itemNum)
          } else if (items[i].name == 'Manifest Scanner') {
            manifest.push(itemNum)
          } else if (items[i].name == 'BoM Scanner') {
            bom.push(itemNum)
          } else if (items[i].name == 'Volleyball') {
            volleyball.push(itemNum)
          } else if (items[i].name == 'Basketball') {
            basketball.push(itemNum)
          } else if (items[i].name == 'Beach Ball') {
            beachball.push(itemNum)
          } else if (items[i].name == 'Football') {
            football.push(itemNum)
          } else if (items[i].name == 'Turret Booster - Rapid Fire') {
            rapid.push(itemNum)
          } else if (items[i].name == 'Turret Booster - Preservation') {
            pres.push(itemNum)
          } else if (items[i].name == 'Enhanced Turret Controller') {
            controller.push(itemNum)
          }
          break;
        }
      i++;
    }
  }
}

document.addEventListener("change", graphChart);
  
    function graphChart() {
      if (econDataFetched) {
        if (econInit) {
          days.reverse();
          iron.reverse();
          exp.reverse();
          flux.reverse();
          rubber.reverse();
          cores.reverse();
          gens.reverse();
          projs.reverse();
          rcs.reverse();
          auto.reverse();
          burst.reverse();
          goldNull.reverse();
          silverNull.reverse();
          bug.reverse();
          shredder.reverse();
          legacy.reverse();
          glass.reverse();
          rcd.reverse();
          backpack.reverse();
          bp.reverse();
          manifest.reverse();
          bom.reverse();
          backpack.reverse();
          volleyball.reverse();
          basketball.reverse();
          beachball.reverse();
          football.reverse();
          rapid.reverse();
          pres.reverse();
          controller.reverse();
          econInit = false;
        }
      var graphDataSet = [];
      if (document.getElementById("mats").checked) {
        graphDataSet.push({ label: 'Iron', data: iron, borderWidth: 4 }, { label: 'Explosives', data: exp, borderWidth: 4 }, { label: 'Hyper Rubber', data: rubber , borderWidth: 4 }, { label: 'Flux Crystals', data: flux , borderWidth: 4 })
      }
      if (document.getElementById("shields").checked) {
        graphDataSet.push({ label: 'Shield Cores', data: cores , borderWidth: 4 }, { label: 'Shield Generators', data: gens , borderWidth: 4 }, { label: 'Shield Projectors', data: projs , borderWidth: 4 })
      }
      if (document.getElementById("turrets").checked) {
        graphDataSet.push({ label: 'RC Turret', data: rcs , borderWidth: 4 }, { label: 'Auto Turret', auto: auto , borderWidth: 4 }, { label: 'Burst Turret', burst: burst , borderWidth: 4 })
      }
      if (document.getElementById("rares").checked) {
        graphDataSet.push({ label: 'Gold Null Trophy', data: goldNull , borderWidth: 4 }, { label: 'Silver Null Trophy', data: silverNull , borderWidth: 4 }, { label: 'Bug Hunter Trophy', data: bug , borderWidth: 4 }, { label: 'Golden Shredder', data: shredder , borderWidth: 4 }, { label: 'Legacy Fabricator', data: legacy , borderWidth: 4 })
      }
      if (document.getElementById("misc").checked) {
        graphDataSet.push({ label: 'Ice Glass', data: glass , borderWidth: 4 }, { label: 'Flux RCD', data: rcd , borderWidth: 4 }, { label: 'Backpack', data: backpack , borderWidth: 4 })
      }
      if (document.getElementById("scanners").checked) {
        graphDataSet.push({ label: 'Blueprint Scanner', data: bp , borderWidth: 4 }, { label: 'Manifest Scanner', data: manifest , borderWidth: 4 }, { label: 'BoM Scanner', data: bom , borderWidth: 4 })
      }
      if (document.getElementById("balls").checked) {
        graphDataSet.push({ label: 'Volleyball', data: volleyball , borderWidth: 4 }, { label: 'Basketball', data: basketball , borderWidth: 4 }, { label: 'Beach Ball', data: beachball , borderWidth: 4 }, { label: 'Football', data: football , borderWidth: 4 })
      }
      if (document.getElementById("vulture").checked) {
        graphDataSet.push({ label: 'Turret Booster - Rapid Fire', data: rapid , borderWidth: 4 }, { label: 'Turret Booster - Preservation', data: pres , borderWidth: 4 }, { label: 'Enhanced Turret Controller', data: controller , borderWidth: 4 })
      }
      const graphDays = days ;
      if (Chart.getChart("chart") !=  undefined){
      Chart.getChart("chart").destroy();
      }
     new Chart(document.getElementById('chart'), {
        type: 'line',
        data: {
          labels: graphDays,
          datasets: graphDataSet,
          options: {
            responsive: true,
            interaction: {
              mode: 'index'
            },
            scales: {
              y: {
                display: true,
                //beginAtZero: false,
                type: "logarithmic"
              },
              x: {
                display: true
              }
            }
          }
        }
      })
    }
  }
