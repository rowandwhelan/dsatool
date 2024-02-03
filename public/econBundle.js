(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).dayjs=e()}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return b},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return a+1;case"MM":return b.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return b.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(s,u,!0);case"A":return $(s,u,!1);case"m":return String(u);case"mm":return b.s(u,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O}));
},{}],2:[function(require,module,exports){
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).dayjs_plugin_customParseFormat=t()}(this,(function(){"use strict";var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},s=function(e){return(e=+e)+(e>68?1900:2e3)};var a=function(e){return function(t){this[e]=+t}},f=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],h=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,a("seconds")],ss:[r,a("seconds")],m:[r,a("minutes")],mm:[r,a("minutes")],H:[r,a("hours")],h:[r,a("hours")],HH:[r,a("hours")],hh:[r,a("hours")],D:[r,a("day")],DD:[n,a("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,a("month")],MM:[n,a("month")],MMM:[i,function(e){var t=h("months"),n=(h("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=h("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,a("year")],YY:[n,function(e){this.year=s(e)}],YYYY:[/\d{4}/,a("year")],Z:f,ZZ:f};function c(n){var r,i;r=n,i=o&&o.formats;for(var s=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),a=s.length,f=0;f<a;f+=1){var h=s[f],u=d[h],c=u&&u[0],l=u&&u[1];s[f]=l?{regex:c,parser:l}:h.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<a;n+=1){var i=s[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,f=i.parser,h=e.slice(r),u=o.exec(h)[0];f.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,s=e.args;this.$u=r;var a=s[1];if("string"==typeof a){var f=!0===s[2],h=!0===s[3],u=f||h,d=s[2];h&&(d=s[2]),o=this.$locale(),!f&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=c(t)(e),i=r.year,o=r.month,s=r.day,a=r.hours,f=r.minutes,h=r.seconds,u=r.milliseconds,d=r.zone,l=new Date,m=s||(i||o?1:l.getDate()),M=i||l.getFullYear(),Y=0;i&&!o||(Y=o>0?o-1:l.getMonth());var p=a||0,v=f||0,D=h||0,g=u||0;return d?new Date(Date.UTC(M,Y,m,p,v,D,g+60*d.offset*1e3)):n?new Date(Date.UTC(M,Y,m,p,v,D,g)):new Date(M,Y,m,p,v,D,g)}catch(e){return new Date("")}}(t,a,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(a)&&(this.$d=new Date("")),o={}}else if(a instanceof Array)for(var l=a.length,m=1;m<=l;m+=1){s[1]=a[m-1];var M=n.apply(this,s);if(M.isValid()){this.$d=M.$d,this.$L=M.$L,this.init();break}m===l&&(this.$d=new Date(""))}else i.call(this,e)}}}));
},{}],3:[function(require,module,exports){
const dayjs = require('dayjs');
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

let timeSlot = 0;
let econDataFetched = true;
let days, iron, exp, flux, rubber, cores, gens, projs, rcs, auto, burst, goldNull, silverNull, bug, shredder, legacy, glass, rcd, backpack, bp, manifest, bom, volleyball, basketball, beachball, football, rapid, pres, controller 
document.getElementById("start").addEventListener("change", econInit);
document.getElementById("end").addEventListener("change", econInit);
econInit();

async function econInit() {
  if (econDataFetched) {
  econDataFetched = false;
  days = [];
  iron = [];
  exp = [];
  flux = [];
  rubber = [];
  cores = [];
  gens = [];
  projs = [];
  rcs = [];
  auto = [];
  burst = [];
  goldNull = [];
  silverNull = [];
  bug = [];
  shredder = [];
  legacy = [];
  glass = [];
  rcd = [];
  backpack = [];
  bp = [];
  manifest = [];
  bom = [];
  backpack = [];
  volleyball = [];
  basketball = [];
  beachball = [];
  football = [];
  rapid = [];
  pres = [];
  controller = [];
  let endDate, startDate;
    
  if (dayjs(document.getElementById("end").value, "YYYY-MM-DD").isAfter(dayjs(document.getElementById("start").value, "YYYY-MM-DD"))) {
    endDate = dayjs(document.getElementById("start").value, "YYYY-MM-DD");
    startDate = dayjs(document.getElementById("end").value, "YYYY-MM-DD");
  } else {
    startDate = dayjs(document.getElementById("start").value, "YYYY-MM-DD");
    endDate = dayjs(document.getElementById("end").value, "YYYY-MM-DD");
  }
  
  let startDay = startDate.date();
  let endDay = endDate.date();
  let startMonth = startDate.month();
  let endMonth = endDate.month();
  let startYear = startDate.year();
  let endYear = endDate.year();
  econDataFetched = false;
  if (document.getElementById("start").value === '') {
    const yesterday = dayjs().subtract(1, "days");
    startDay = yesterday.format("D");
    startMonth = yesterday.format("M");
    startYear = yesterday.format("YYYY");
  }
  if (document.getElementById("end").value === '') {
    const endSlot = dayjs().subtract(15, "days");
    endDay = endSlot.format("D");
    endMonth = endSlot.format("M");
    endYear = endSlot.format("YYYY");
  }

  await econGetDate(startDay, startMonth, startYear, endDay, endMonth, endYear);
  }
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
    datesToFetch.unshift(formattedDate);
    currentDate = currentDate.subtract(1, "day");
    timeSlot++;
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

function output(econ, items, date) {
  let outputDate = dayjs(date, "YYYY_M_D").format("ddd[,] DD MMM YYYY")
    days.push(outputDate)
    for (const [key, value] of Object.entries(econ.items_held)) {
      let itemNum = value;
      let i = 0;
      while (i < items.length) {
        if (items[i].id == key) {
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
      var graphDataSet = [];
      var borderWidth = 3;
      var pointRadius = 0;
      if (document.getElementById("mats").checked) {
        graphDataSet.push({ label: 'Iron', data: iron, borderWidth: borderWidth, pointRadius: pointRadius }, { label: 'Explosives', data: exp, borderWidth: borderWidth, pointRadius: pointRadius }, { label: 'Hyper Rubber', data: rubber , borderWidth: borderWidth, pointRadius: pointRadius }, { label: 'Flux Crystals', data: flux , borderWidth: borderWidth, pointRadius: pointRadius })
      }
      if (document.getElementById("shields").checked) {
        graphDataSet.push({ label: 'Shield Cores', data: cores , borderWidth: borderWidth, pointRadius: pointRadius }, { label: 'Shield Generators', data: gens , borderWidth: borderWidth, pointRadius: pointRadius }, { label: 'Shield Projectors', data: projs , borderWidth: borderWidth, pointRadius: pointRadius })
      }
      if (document.getElementById("turrets").checked) {
        graphDataSet.push({ label: 'RC Turret', data: rcs , borderWidth: borderWidth, pointRadius: pointRadius }, { label: 'Auto Turret', auto: auto , borderWidth: borderWidth, pointRadius: pointRadius }, { label: 'Burst Turret', burst: burst , borderWidth: borderWidth, pointRadius: pointRadius })
      }
      if (document.getElementById("rares").checked) {
        graphDataSet.push({ label: 'Gold Null Trophy', data: goldNull , borderWidth: borderWidth, pointRadius: pointRadius }, { label: 'Silver Null Trophy', data: silverNull , borderWidth: borderWidth, pointRadius: pointRadius }, { label: 'Bug Hunter Trophy', data: bug , borderWidth: borderWidth, pointRadius: pointRadius }, { label: 'Golden Shredder', data: shredder , borderWidth: borderWidth, pointRadius: pointRadius }, { label: 'Legacy Fabricator', data: legacy , borderWidth: borderWidth, pointRadius: pointRadius })
      }
      if (document.getElementById("misc").checked) {
        graphDataSet.push({ label: 'Ice Glass', data: glass , borderWidth: borderWidth, pointRadius: pointRadius }, { label: 'Flux RCD', data: rcd , borderWidth: borderWidth, pointRadius: pointRadius }, { label: 'Backpack', data: backpack , borderWidth: borderWidth, pointRadius: pointRadius })
      }
      if (document.getElementById("scanners").checked) {
        graphDataSet.push({ label: 'Blueprint Scanner', data: bp , borderWidth: borderWidth, pointRadius: pointRadius }, { label: 'Manifest Scanner', data: manifest , borderWidth: borderWidth, pointRadius: pointRadius }, { label: 'BoM Scanner', data: bom , borderWidth: borderWidth, pointRadius: pointRadius })
      }
      if (document.getElementById("balls").checked) {
        graphDataSet.push({ label: 'Volleyball', data: volleyball , borderWidth: borderWidth, pointRadius: pointRadius }, { label: 'Basketball', data: basketball , borderWidth: borderWidth, pointRadius: pointRadius }, { label: 'Beach Ball', data: beachball , borderWidth: borderWidth, pointRadius: pointRadius }, { label: 'Football', data: football , borderWidth: borderWidth, pointRadius: pointRadius })
      }
      if (document.getElementById("vulture").checked) {
        graphDataSet.push({ label: 'Turret Booster - Rapid Fire', data: rapid , borderWidth: borderWidth, pointRadius: pointRadius }, { label: 'Turret Booster - Preservation', data: pres , borderWidth: borderWidth, pointRadius: pointRadius }, { label: 'Enhanced Turret Controller', data: controller , borderWidth: borderWidth, pointRadius: pointRadius })
      }
      if (Chart.getChart("chart") !=  undefined){
      Chart.getChart("chart").destroy();
      }
     new Chart(document.getElementById('chart'), {
        type: 'line',
        data: {
          labels: days,
          datasets: graphDataSet,
          options: {
            interaction: {
              mode: 'x',
              intersection: false
            }, 
            scales: {
              y: {
                type: 'logarithmic'
              }
            }
          }
        }
      })
    }
  }

},{"dayjs":1,"dayjs/plugin/customParseFormat":2}]},{},[3]);
