import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

econInit();
function econInit(startDay, startMonth, startYear, endDay, endMonth, endYear) {
  let timeSlot = 3;
  if (
    startDay === undefined ||
    startMonth === undefined ||
    startYear === undefined
  ) {
    startDay = dayjs().subtract(1, "days").format("DD");
    startMonth = dayjs().subtract(1, "days").format("MM");
    startYear = dayjs().subtract(1, "days").format("YYYY");
  }

  if (endDay === undefined || endMonth === undefined || endYear === undefined) {
    endDay = dayjs().subtract(1+timeSlot, "days").format("DD");
    endMonth = dayjs().subtract(1+timeSlot, "days").format("MM");
    endYear = dayjs().subtract(1+timeSlot, "days").format("YYYY");
  }
  econGetDate(startDay, startMonth, startYear, endDay, endMonth, endYear);
}

function econGetDate(
  startDay,
  startMonth,
  startYear,
  endDay,
  endMonth,
  endYear,
) {
  let endDate = dayjs(`${endYear}-${endMonth}-${endDay}`);
  let currentDate = dayjs(`${startYear}-${startMonth}-${startDay}`);

  while (currentDate.isAfter(endDate) || currentDate.isSame(endDate)) {
    let formattedDate = currentDate.format("YYYY_MM_DD");
    econGet(formattedDate);
    currentDate = currentDate.subtract(1, "day");
  }
}

function econGet(date) {
  console.log(date);
  const apiUrl =
    "https://uncors.vercel.app/?url=https://pub.drednot.io/prod/econ/" +
    date +
    "/summary.json";

  let econ = {};
  let items = {};

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      econ = data;
      fetch(
        "https://uncors.vercel.app/?url=https://pub.drednot.io/prod/econ/item_schema.json"
      )
        .then((response) => response.json())
        .then((itemData) => {
          items = itemData;
          output(econ, items);
        })
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function output(econ, items) {
  console.log(econ);
  console.log(items);
  for (const [key, value] of Object.entries(econ.items_held)) {
    let itemNum = value;
    let itemName;
    for (let i = 0; i < items.length; i++) {
      if (items[i].id == key) {
        itemName = items[i].name;
        i = items.length + 1;
      }
      if (!(itemNum == undefined || itemName == undefined)) {
        console.log(itemNum + " " + itemName);
      }
    }
  }
}
