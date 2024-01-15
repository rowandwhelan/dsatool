async function dropsGet() {
  try {
    const response = await fetch(`https://uncors.vercel.app/?url=https://pub.drednot.io/prod/econ/bot_drops.txt`);
      const data = await response;
         document.getElementById("output").innerHTML +=
          `${data}<br>`;
        console.log(`${data}`);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

dropsGet();
