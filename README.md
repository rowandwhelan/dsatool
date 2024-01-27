This is the Github repository for DSATool.com: the best tool for drednot.io. Streamline the process of ship designing using the calculator app, gather data about the economy with easy to understand graphs in the economy data tool, optimize your farming strategies using the item drops page, and more!<br>

This guide was last updated on January 26th. For the most up to date guide please go to the changelog here: https://dsatool.com/public/changelog.html<br>


How to use the ship design calculator: <br>
  Ship Information:<br>
    -Units of Measurement<br>
    The standard units for measurement include size in interior ship blocks (78x78), RCs (26x26), and world blocks (10x10). Each unit of measurement increments by 1 at a time, though you can imput any valid whole number manually. When you switch from one unit to another, the unit will not be converted to the new measurement type, the number will remain the same and if needed, it will be capped at the maximum for that unit type. Note that RCs and ship blocks do not count exterior blocks<br>

   -Ship Size X and Y<br>
   Can be in ship blocks, RCs, or world blocks but it will not convert between each one when you swap measurement types and it will not increment in partial RCs or world blocks<br>

   -Total Number of Thrusters<br>
   Input the total number of thrusters, any thrusters that are added are assumed to be evenly distributed along the exterior of the ship, this also affects the RC calculations<br>

   -Maximum Speed<br>
   The mass of the ship is calculated then the total thrust is calculated based on the number of thrusters (takes into account the starter thrusters but it doesn't account diagonal movement), then the maximum thrust is calculated based on ship mass (if total thrust is larger than maximum thrust then it total thrust is limited by that value), maximum speed is found using the total thrust and mass. I'm not sure how the speed calculation relates to blocks per second or anything like that but more speed is better<br>

   -Loading Type<br>
   Displays how many loaders per RC are needed to sustain firing according to turret firing percentage<br>

  Shield Information:<br>
  
  -Number of shield generators and tanks<br>
  Input the number of shield generators and shield tanks in the first two boxes under the shield information section (the calculations assume that the generators are not boosted and that shield tanks are active)<br>

  -Total Health<br>
  Shows the maximum total health from shield tanks plus the base ship health (2000 HP)<br>

  -Shield Regen<br>
  Shows the total shield regen minus active shield leak (2% per second)<br>

  -Shield Load<br>
  An input field that dictates the intensity of the shield core consumption, setting this value to zero will display the passive shield core consumption due to shield tank leak<br>

  -Shield Core<br>
  Consumption shows how many cores can be consumed per minute<br>

  -Time to Full Health<br>
  Shows how many seconds it takes for the shield regen to completetly fill the health bar (excluding the base ship health)<br>

  -Space Needed<br>
  Indicates what percentage of ship space is consumed by shield tanks and shield generators, it cannot be greater than 100% because you cannot add more tanks or generators if it is at 100%<br>

  Weapons Information:<br>
  -Maximum Number of Turrets<br>
  Shows how many turrets can fit on the ship minus the number of thrusters<br>

  -Ammo Type<br>
  Displays a selection of every ammo in the game, including near and far exploding flack ammo<br>

  -Rate of Fire<br>
  Shows the rate of fire per second per turret based on the type of ammo selected<br>

  -Total Damage per Second<br>
  Shows the average total possible damage per second assuming that you can fire only half of all RCs at any one time<br>

  -Ammo Source<br>
  An input field that dictates whether the ammo is preloaded aka storered on board or if it is actively produced onboard via fabricators<br>

  -Percent of Time Firing Turrets<br>
  Select what percent of the time turrets are fired on average, assumes only half of all turrets can be fired at once. Influences how much ammo or fabricators you need to sustain firerate<br>
