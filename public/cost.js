import { decode, BuildCmd, Item, encode } from "https://cdn.jsdelivr.net/npm/dsabp-js@latest/dist/browser/esm/index.js"

const grid = document.getElementById('grid');
const ctx = grid.getContext('2d');
document.addEventListener("input", decodeBlueprint);

async function decodeBlueprint() {
  document.getElementById("output").innerHTML = '';
  let RCDCost = 0;
  let rubberCost = 0;
  let ironCost = 0;
  let fluxCost = 0;
  let items = {};
  const bp = await decode(document.getElementById('bp').value);
  console.log(bp)
  for (const cmd of bp.commands) { // loop all commands of the bp
    if (!(cmd instanceof BuildCmd)) continue // ignore if the cmd is not a BuildCmd
    RCDCost+=0.1;
    if(cmd.item.name in items) {
      items[cmd.item.name] += 1;
    } else {
      items[cmd.item.name] = 1;
    }
  }
 
  for(const [key, value] of Object.entries(items)){
    if (key === "Hyper Rubber Block") {
      rubberCost+=value*2
    } else if (key === "Item Net") {
      ironCost+=value*2
    } else if (key === "Iron Block") {
      ironCost+=value*2
    } else if (key === "Walkway") {
        ironCost+=value*2
    } else if (key === "Ladder") {
          ironCost+=value*2
    } else if (key === "Thruster (Packaged)") {
      ironCost+=value*8
    } else if (key === "Fluid Tank") {
      ironCost+=value*64
    } else if ((key === "Fabricator (Munitions, Packaged)") || (key === "Fabricator (Engineering, Packaged)") || (key === "Fabricator (Machine, Packaged)") || (key === "Fabricator (Equipment, Packaged)")) {
      ironCost+=value*16
    } else if (key === "Pusher (Packaged)") {
      ironCost+=value*8
      fluxCost+=value*4
    } else if (key === "Loader (Packaged)") {
       ironCost+=value*8
       fluxCost+=value*2
    } else if (key === "Cargo Hatch (Packaged)") {
      ironCost+=value*8
    } else if (key === "Expando Box (Packaged)") {
      ironCost+=value*8
    } else if (key === "Helm (Packaged)") {
      ironCost+=value*8
    } else if (key === "Comms Station (Packaged)") {
      ironCost+=value*8
    } else if (key === "Sign (Packaged)") {
      ironCost+=value*8
    } else if(key === "Recycler (Packaged)") {
      ironCost+=value*8
    } else if (key === "Cargo Ejector (Packaged)") {
      ironCost+=value*8
    } else if (key === "Turret Controller (Packaged)") {
      ironCost+=value*8
    } else if (key === "Safety Anchor (Packaged)") {
      ironCost+=value*16
    }
    
    console.log(key, value)
  }
  console.log(items)
  const itemsOut = JSON.stringify(items);
  const itemsOut2 = itemsOut.replace(/(?<=\d),/g, "<br><br>")
  const itemsOut3 = itemsOut2.replace(/:/g, ": ")
  const finalOut = itemsOut3.replace(/["}{;]/g, "")
  document.getElementById("output").innerHTML +=
    `<br><br><h2> Items Needed: </h2><br>`; 
  document.getElementById("output").innerHTML +=
    `<br><h4><span>${finalOut};</span></h4>`;  
  document.getElementById("output").innerHTML +=
    `<br><br><h2> Raw Costs: </h2><br>`; 
  document.getElementById("output").innerHTML +=
    `<br><h4> RCD Build: <span>${Math.floor(RCDCost)}</span></h4>`;  
  document.getElementById("output").innerHTML +=
    `<br><h4> Rubber: <span>${rubberCost}</span></h4>`;
  document.getElementById("output").innerHTML +=
    `<br><h4> Iron: <span>${ironCost}</span></h4>`;
  document.getElementById("output").innerHTML +=
    `<br><h4> Flux: <span>${fluxCost}</span></h4>`;
  document.getElementById("output").innerHTML +=
    `<br><h4> Estimated Total Cost: <span>${fluxCost+rubberCost+(Math.round(ironCost*0.04))+Math.floor(RCDCost)} Flux</span></h4>`;
  document.getElementById("output").innerHTML +=
    `<br><br><h2> Other Info: </h2>`; 
  document.getElementById("output").innerHTML +=
    `<h5>Note: size measured in RCs, width first then height</h5>`;
  document.getElementById("output").innerHTML +=
    `<br><h4> Size: <span>${Math.floor(((bp.width - 2) / 3) * 10) / 10}</span>x<span>${Math.floor(((bp.height - 2) / 3) * 10) / 10}</span></h4>`;
  document.getElementById("output").innerHTML +=
    `<br><h4> Blueprint Version: <span>${bp.version}</span></h4>`;
}
