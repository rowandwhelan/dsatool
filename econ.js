import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

econInit();

async function econInit(
  startDay,
  startMonth,
  startYear,
  endDay,
  endMonth,
  endYear,
) {
  let buffer = 1;
  let timeSlot = 7;
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
  endYear,
) {
  let endDate = dayjs(`${endYear}-${endMonth}-${endDay}`);
  let currentDate = dayjs(`${startYear}-${startMonth}-${startDay}`);

  let datesToFetch = [];
  while (currentDate.isAfter(endDate) || currentDate.isSame(endDate)) {
    let formattedDate = currentDate.format("YYYY_M_D");
    datesToFetch.push(formattedDate);
    currentDate = currentDate.subtract(1, "day");
  }

  for (const date of datesToFetch) {
    await econGet(date);
  }
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

function output(econ, items, date) {
  let outputDate = dayjs(date, "YYYY_M_D").format("ddd[,] DD MMM YYYY")
  document.getElementById("output").innerHTML += `<br><h2>${outputDate}<h2><br>`;
  for (const [key, value] of Object.entries(econ.items_held)) {
    let itemNum = value;
    let i = 0;
    while (i < items.length) {
      if (items[i].id == key) {
        document.getElementById("output").innerHTML +=
          `${itemNum} ${items[i].name}<br>`;
        console.log(`${itemNum} ${items[i].name}`);
        break;
      }
      i++;
    }
  }
}
