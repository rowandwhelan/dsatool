async function dropsGet() {
    const response = await fetch(`https://uncors.vercel.app/?url=https://pub.drednot.io/prod/econ/bot_drops.txt`);
      const data = await response.text();
         document.getElementById("output").innerHTML += `${data}<br>`;
}
dropsGet();
