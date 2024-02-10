(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).dayjs=e()}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return b},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return a+1;case"MM":return b.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return b.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(s,u,!0);case"A":return $(s,u,!1);case"m":return String(u);case"mm":return b.s(u,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O}));
},{}],2:[function(require,module,exports){
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).dayjs_plugin_customParseFormat=t()}(this,(function(){"use strict";var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},s=function(e){return(e=+e)+(e>68?1900:2e3)};var a=function(e){return function(t){this[e]=+t}},f=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],h=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,a("seconds")],ss:[r,a("seconds")],m:[r,a("minutes")],mm:[r,a("minutes")],H:[r,a("hours")],h:[r,a("hours")],HH:[r,a("hours")],hh:[r,a("hours")],D:[r,a("day")],DD:[n,a("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,a("month")],MM:[n,a("month")],MMM:[i,function(e){var t=h("months"),n=(h("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=h("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,a("year")],YY:[n,function(e){this.year=s(e)}],YYYY:[/\d{4}/,a("year")],Z:f,ZZ:f};function c(n){var r,i;r=n,i=o&&o.formats;for(var s=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),a=s.length,f=0;f<a;f+=1){var h=s[f],u=d[h],c=u&&u[0],l=u&&u[1];s[f]=l?{regex:c,parser:l}:h.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<a;n+=1){var i=s[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,f=i.parser,h=e.slice(r),u=o.exec(h)[0];f.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,s=e.args;this.$u=r;var a=s[1];if("string"==typeof a){var f=!0===s[2],h=!0===s[3],u=f||h,d=s[2];h&&(d=s[2]),o=this.$locale(),!f&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=c(t)(e),i=r.year,o=r.month,s=r.day,a=r.hours,f=r.minutes,h=r.seconds,u=r.milliseconds,d=r.zone,l=new Date,m=s||(i||o?1:l.getDate()),M=i||l.getFullYear(),Y=0;i&&!o||(Y=o>0?o-1:l.getMonth());var p=a||0,v=f||0,D=h||0,g=u||0;return d?new Date(Date.UTC(M,Y,m,p,v,D,g+60*d.offset*1e3)):n?new Date(Date.UTC(M,Y,m,p,v,D,g)):new Date(M,Y,m,p,v,D,g)}catch(e){return new Date("")}}(t,a,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(a)&&(this.$d=new Date("")),o={}}else if(a instanceof Array)for(var l=a.length,m=1;m<=l;m+=1){s[1]=a[m-1];var M=n.apply(this,s);if(M.isValid()){this.$d=M.$d,this.$L=M.$L,this.init();break}m===l&&(this.$d=new Date(""))}else i.call(this,e)}}}));
},{}],3:[function(require,module,exports){
  const dayjs = require("dayjs");
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

econGetDate();

async function econGetDate() {
  econDataFetched = false;

  const yesterday = dayjs().subtract(1, "days");
  startDay = yesterday.format("D");
  startMonth = yesterday.format("M");
  startYear = yesterday.format("YYYY");

  const endSlot = dayjs().subtract(14, "days").subtract(1, "day");
  endDay = endSlot.format("D");
  endMonth = endSlot.format("M");
  endYear = endSlot.format("YYYY");

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
  volleyball = [];
  basketball = [];
  beachball = [];
  football = [];
  rapid = [];
  pres = [];
  control = [];

  days1 = [];
  iron1 = 0;
  exp1 = 0;
  flux1 = 0;
  rubber1 = 0;
  cores1 = 0;
  gens1 = 0;
  projs1 = 0;
  rcs1 = 0;
  auto1 = 0;
  burst1 = 0;
  goldNull1 = 0;
  silverNull1 = 0;
  bug1 = 0;
  shredder1 = 0;
  legacy1 = 0;
  glass1 = 0;
  rcd1 = 0;
  backpack1 = 0;
  bp1 = 0;
  manifest1 = 0;
  bom1 = 0;
  volleyball1 = 0;
  basketball1 = 0;
  beachball1 = 0;
  football1 = 0;
  rapid1 = 0;
  pres1 = 0;
  control1 = 0;

  days2 = [];
  iron2 = [];
  exp2 = [];
  flux2 = [];
  rubber2 = [];
  cores2 = [];
  gens2 = [];
  projs2 = [];
  rcs2 = [];
  auto2 = [];
  burst2 = [];
  goldNull2 = [];
  silverNull2 = [];
  bug2 = [];
  shredder2 = [];
  legacy2 = [];
  glass2 = [];
  rcd2 = [];
  backpack2 = [];
  bp2 = [];
  manifest2 = [];
  bom2 = [];
  volleyball2 = [];
  basketball2 = [];
  beachball2 = [];
  football2 = [];
  rapid2 = [];
  pres2 = [];
  control2 = [];

  let endDate = dayjs(`${endYear}-${endMonth}-${endDay}`);
  let currentDate = dayjs(`${startYear}-${startMonth}-${startDay}`);
  let datesToFetch = [];
  while (currentDate.isAfter(endDate) || currentDate.isSame(endDate)) {
    let formattedDate = currentDate.format("YYYY_M_D");
    datesToFetch.unshift(formattedDate);
    currentDate = currentDate.subtract(1, "day");
  }
  for (const date of datesToFetch) {
    await econGet(date);
  }
  combined();
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
    if (error.name === "AbortError") {
      console.error("Fetch request was aborted by the user");
    } else {
      console.error("Error fetching data:", error);
    }
  }
}

var days;
var iron;
var exp;
var flux;
var rubber;
var cores;
var gens;
var projs;
var rcs;
var auto;
var burst;
var goldNull;
var silverNull;
var bug;
var shredder;
var legacy;
var glass;
var rcd;
var backpack;
var bp;
var manifest;
var bom;
var volleyball;
var basketball;
var beachball;
var football;
var rapid;
var pres;
var control;

var iron1;
var exp1;
var flux1;
var rubber1;
var cores1;
var gens1;
var projs1;
var rcs1;
var auto1;
var burst1;
var glass1;
var rcd1;
var backpack1;
var bp1;
var manifest1;
var bom1;
var volleyball1;
var basketball1;
var beachball1;
var football1;
var rapid1;
var pres1;
var control1;

var iron2;
var exp2;
var flux2;
var rubber2;
var cores2;
var gens2;
var projs2;
var rcs2;
var auto2;
var burst2;
var goldNull2;
var silverNull2;
var bug2;
var shredder2;
var legacy2;
var glass2;
var rcd2;
var backpack2;
var bp2;
var manifest2;
var bom2;
var volleyball2;
var basketball2;
var beachball2;
var football2;
var rapid2;
var pres2;
var control2;

function output(econ, items, date) {
  let outputDate = dayjs(date, "YYYY_M_D").format("ddd[,] DD MMM YYYY");
  days.push(outputDate);
  for (const [key, value] of Object.entries(econ.items_held)) {
    let itemNum = value;
    let i = 0;
    while (i < items.length) {
      if (items[i].id == key) {
        if (items[i].name == "Iron") {
          iron.push(itemNum);
        } else if (items[i].name == "Explosives") {
          exp.push(itemNum);
        } else if (items[i].name == "Hyper Rubber") {
          rubber.push(itemNum);
        } else if (items[i].name == "Flux Crystals") {
          flux.push(itemNum);
        } else if (items[i].name == "Shield Core") {
          cores.push(itemNum);
        } else if (items[i].name == "Shield Generator") {
          gens.push(itemNum);
        } else if (items[i].name == "Shield Projector") {
          projs.push(itemNum);
        } else if (items[i].name == "RC Turret (Packaged)") {
          rcs.push(itemNum);
        } else if (items[i].name == "Auto Turret (Packaged)") {
          auto.push(itemNum);
        } else if (items[i].name == "Burst Turret (Packaged)") {
          burst.push(itemNum);
        } else if (items[i].name == "Gold Null Trophy") {
          goldNull.push(itemNum);
        } else if (items[i].name == "Silver Null Trophy") {
          silverNull.push(itemNum);
        } else if (items[i].name == "Bug Hunter Trophy") {
          bug.push(itemNum);
        } else if (items[i].name == "Golden Item Shredder") {
          shredder.push(itemNum);
        } else if (items[i].name == "Fabricator (Legacy, Packaged)") {
          legacy.push(itemNum);
        } else if (items[i].name == "Hyper Ice Block") {
          glass.push(itemNum);
        } else if (items[i].name == "Flux RCD") {
          rcd.push(itemNum);
        } else if (items[i].name == "Backpack") {
          backpack.push(itemNum);
        } else if (items[i].name == "Blueprint Scanner") {
          bp.push(itemNum);
        } else if (items[i].name == "Manifest Scanner") {
          manifest.push(itemNum);
        } else if (items[i].name == "BoM Scanner") {
          bom.push(itemNum);
        } else if (items[i].name == "Volleyball") {
          volleyball.push(itemNum);
        } else if (items[i].name == "Basketball") {
          basketball.push(itemNum);
        } else if (items[i].name == "Beach Ball") {
          beachball.push(itemNum);
        } else if (items[i].name == "Football") {
          football.push(itemNum);
        } else if (items[i].name == "Turret Booster - Rapid Fire") {
          rapid.push(itemNum);
        } else if (items[i].name == "Turret Booster - Preservation") {
          pres.push(itemNum);
        } else if (items[i].name == "Enhanced Turret Controller") {
          control.push(itemNum);
        }
        break;
      }
      i++;
    }
  }

  for (let i = 0; i < econ.items_new.length; i++) {
    let itemName;
    for (let j = 0; j < items.length; j++) {
      if (econ.items_new[i].item == items[j].id) {
        itemName = items[j].name;
      }
    }
    if (itemName == "Iron") {
      iron1 += econ.items_new[i].total;
    } else if (itemName == "Explosives") {
      exp1 += econ.items_new[i].total;
    } else if (itemName == "Hyper Rubber") {
      rubber1 += econ.items_new[i].total;
    } else if (itemName == "Flux Crystals") {
      flux1 += econ.items_new[i].total;
    } else if (itemName == "Shield Core") {
      cores1 += econ.items_new[i].total;
    } else if (itemName == "Shield Generator") {
      gens1 += econ.items_new[i].total;
    } else if (itemName == "Shield Projector") {
      projs1 += econ.items_new[i].total;
    } else if (itemName == "RC Turret (Packaged)") {
      rcs1 += econ.items_new[i].total;
    } else if (itemName == "Auto Turret (Packaged)") {
      auto1 += econ.items_new[i].total;
    } else if (itemName == "Burst Turret (Packaged)") {
      burst1 += econ.items_new[i].total;
    } else if (itemName == "Gold Null Trophy") {
      goldNull1 += econ.items_new[i].total;
    } else if (itemName == "Silver Null Trophy") {
      silverNull1 += econ.items_new[i].total;
    } else if (itemName == "Bug Hunter Trophy") {
      bug1 += econ.items_new[i].total;
    } else if (itemName == "Golden Item Shredder") {
      shredder1 += econ.items_new[i].total;
    } else if (itemName == "Fabricator (Legacy, Packaged)") {
      legacy1 += econ.items_new[i].total;
    } else if (itemName == "Hyper Ice Block") {
      glass1 += econ.items_new[i].total;
    } else if (itemName == "Flux RCD") {
      rcd1 += econ.items_new[i].total;
    } else if (itemName == "Backpack") {
      backpack1 += econ.items_new[i].total;
    } else if (itemName == "Blueprint Scanner") {
      bp1 += econ.items_new[i].total;
    } else if (itemName == "Manifest Scanner") {
      manifest1 += econ.items_new[i].total;
    } else if (itemName == "BoM Scanner") {
      bom1 += econ.items_new[i].total;
    } else if (itemName == "Volleyball") {
      volleyball1 += econ.items_new[i].total;
    } else if (itemName == "Basketball") {
      basketball1 += econ.items_new[i].total;
    } else if (itemName == "Beach Ball") {
      beachball1 += econ.items_new[i].total;
    } else if (itemName == "Football") {
      football1 += econ.items_new[i].total;
    } else if (itemName == "Turret Booster - Rapid Fire") {
      rapid1 += econ.items_new[i].total;
    } else if (itemName == "Turret Booster - Preservation") {
      pres1 += econ.items_new[i].total;
    } else if (itemName == "Enhanced Turret Controller") {
      control1 += econ.items_new[i].total;
    }
  }

  for (const [key, value] of Object.entries(econ.items_moved)) {
    let itemNum = value;
    let i = 0;
    while (i < items.length) {
      if (items[i].id == key) {
        if (items[i].name == "Iron") {
          iron2.push(itemNum);
        } else if (items[i].name == "Explosives") {
          exp2.push(itemNum);
        } else if (items[i].name == "Hyper Rubber") {
          rubber2.push(itemNum);
        } else if (items[i].name == "Flux Crystals") {
          flux2.push(itemNum);
        } else if (items[i].name == "Shield Core") {
          cores2.push(itemNum);
        } else if (items[i].name == "Shield Generator") {
          gens2.push(itemNum);
        } else if (items[i].name == "Shield Projector") {
          projs2.push(itemNum);
        } else if (items[i].name == "RC Turret (Packaged)") {
          rcs2.push(itemNum);
        } else if (items[i].name == "Auto Turret (Packaged)") {
          auto2.push(itemNum);
        } else if (items[i].name == "Burst Turret (Packaged)") {
          burst2.push(itemNum);
        } else if (items[i].name == "Gold Null Trophy") {
          goldNull2.push(itemNum);
        } else if (items[i].name == "Silver Null Trophy") {
          silverNull2.push(itemNum);
        } else if (items[i].name == "Bug Hunter Trophy") {
          bug2.push(itemNum);
        } else if (items[i].name == "Golden Item Shredder") {
          shredder2.push(itemNum);
        } else if (items[i].name == "Fabricator (Legacy, Packaged)") {
          legacy2.push(itemNum);
        } else if (items[i].name == "Hyper Ice Block") {
          glass2.push(itemNum);
        } else if (items[i].name == "Flux RCD") {
          rcd2.push(itemNum);
        } else if (items[i].name == "Backpack") {
          backpack2.push(itemNum);
        } else if (items[i].name == "Blueprint Scanner") {
          bp2.push(itemNum);
        } else if (items[i].name == "Manifest Scanner") {
          manifest2.push(itemNum);
        } else if (items[i].name == "BoM Scanner") {
          bom2.push(itemNum);
        } else if (items[i].name == "Volleyball") {
          volleyball2.push(itemNum);
        } else if (items[i].name == "Basketball") {
          basketball2.push(itemNum);
        } else if (items[i].name == "Beach Ball") {
          beachball2.push(itemNum);
        } else if (items[i].name == "Football") {
          football2.push(itemNum);
        } else if (items[i].name == "Turret Booster - Rapid Fire") {
          rapid2.push(itemNum);
        } else if (items[i].name == "Turret Booster - Preservation") {
          pres2.push(itemNum);
        } else if (items[i].name == "Enhanced Turret Controller") {
          control2.push(itemNum);
        }
        break;
      }
      i++;
    }
  }
}

function avg(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  const average = sum / array.length;
  return average;
}

function value(item) {
  let itemAvg = avg(flux) / avg(item);
  let roundedPrice = Number(itemAvg.toPrecision(3));
  return roundedPrice;
}

function value1(item) {
  let itemAvg = flux1 / item;
  let roundedPrice = Number(itemAvg.toPrecision(3));
  return roundedPrice;
}

function avg2(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  const average = sum / array.length;
  return average;
}

function value2(item) {
  let itemAvg = avg2(flux2) / avg2(item);
  let roundedPrice = Number(itemAvg.toPrecision(3));
  return roundedPrice;
}

function combined() {
  document.getElementById("output").innerHTML +=
    `<br><h3> Iron: <span id="numberOutput">${Number(
      ((avg2(iron2) / avg(iron)) * 9 * value1(iron1)).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output").innerHTML +=
    `<br><h3> Explosives: <span id="numberOutput">${Number(
      ((avg2(exp2) / avg(exp)) * 9 * value1(exp1)).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output").innerHTML +=
    `<br><h3> Hyper Rubber: <span id="numberOutput">${Number(
      ((avg2(rubber2) / avg(rubber)) * 8 * value1(rubber1)).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output").innerHTML +=
    `<br><h3> Shield Cores: <span id="numberOutput">${Number(
      ((avg2(cores2) / avg(cores)) * 2.2 * value1(cores1)).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output").innerHTML +=
    `<br><h3> Shield Generators: <span id="numberOutput">${Number(
      ((avg2(gens2) / avg(gens)) * 1.2 * value1(gens1)).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output").innerHTML +=
    `<br><h3> Shield Projectors: <span id="numberOutput">${Number(
      ((avg2(projs2) / avg(projs)) * 0.4 * value1(projs1)).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output").innerHTML +=
    `<br><h3> RCs: <span id="numberOutput">${Number(
      ((avg2(rcs2) / avg(rcs)) * 3 * value1(rcs1)).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output").innerHTML +=
    `<br><h3> Auto Turret: <span id="numberOutput">${Number(
      ((avg2(auto2) / avg(auto)) * 0.05 * value1(auto1)).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output").innerHTML +=
    `<br><h3> Burst Turret: <span id="numberOutput">${Number(
      ((avg2(burst2) / avg(burst)) * 0.05 * value1(burst1)).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output").innerHTML +=
    `<br><h3> Gold Null Trophy: <span id="numberOutput">${Number(
      (value(goldNull) * 0.7).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output").innerHTML +=
    `<br><h3> Silver Null Trophy: <span id="numberOutput">${Number(
      (value(silverNull) * 0.7).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output").innerHTML +=
    `<br><h3> Bug Hunter Trophy: <span id="numberOutput">${Number(
      (value(bug) * 0.4).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output").innerHTML +=
    `<br><h3> Golden Shredder: <span id="numberOutput">${Number(
      (value(shredder) * 1).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output").innerHTML +=
    `<br><h3> Legacy Fabricator: <span id="numberOutput">${Number(
      (value(legacy) * 4.1).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output").innerHTML +=
    `<br><h3> Hyper Ice: <span id="numberOutput">${Number(
      ((avg2(glass2) / avg(glass)) * 2.5 * value1(glass1)).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output").innerHTML +=
    `<br><h3> RCD: <span id="numberOutput">${Number(
      ((avg2(rcd2) / avg(rcd)) * 0.15 * value1(rcd1)).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output").innerHTML +=
    `<br><h3> Backpack: <span id="numberOutput">${Number(
      ((avg2(backpack2) / avg(backpack)) * 0.3 * value1(backpack1)).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output").innerHTML +=
    `<br><h3> Blueprint Scanner: <span id="numberOutput">${Number(
      ((avg2(bp2) / avg(bp)) * 0.6 * value1(bp1)).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output").innerHTML +=
    `<br><h3> Manifest Scanner: <span id="numberOutput">${Number(
      ((avg2(manifest2) / avg(manifest)) * 0.15 * value1(manifest1)).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output").innerHTML +=
    `<br><h3> BOM Scanner: <span id="numberOutput">${Number(
      ((avg2(bom2) / avg(bom)) * 0.15 * value1(bom1)).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output").innerHTML +=
    `<br><h3> Volleyball: <span id="numberOutput">${Number(
      ((avg2(volleyball2) / avg(volleyball)) * 0.2 * value1(volleyball1)).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output").innerHTML +=
    `<br><h3> Basketball: <span id="numberOutput">${Number(
      ((avg2(basketball2) / avg(basketball)) * 0.2 * value1(basketball1)).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output").innerHTML +=
    `<br><h3> Football: <span id="numberOutput">${Number(
      ((avg2(football2) / avg(football)) * 0.2 * value1(football1)).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output").innerHTML +=
    `<br><h3> Beach Ball: <span id="numberOutput">${Number(
      ((avg2(beachball2) / avg(beachball)) * 0.2 * value1(beachball1)).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output").innerHTML +=
    `<br><h3> Rapid-Fire: <span id="numberOutput">${Number(
      ((avg2(rapid2) / avg(rapid)) * 0.1 * value1(rapid1)).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output").innerHTML +=
    `<br><h3> Preservation: <span id="numberOutput">${Number(
      ((avg2(pres2) / avg(pres)) * 0.1 * value1(pres1)).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output").innerHTML +=
    `<br><h3> Advanced Turret Controllers: <span id="numberOutput">${Number(
      ((avg2(control2) / avg(control)) * 0.2 * value1(control1)).toPrecision(3),
    )}</span></h3>`;
  combined2();
}

function combined2() {
  document.getElementById("output2").innerHTML +=
    `<br><h3> Iron: <span id="numberOutput">${Number(
      ( 1 / ((avg2(iron2) / avg(iron)) * 9 * value1(iron1))).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output2").innerHTML +=
    `<br><h3> Explosives: <span id="numberOutput">${Number(
      ( 1 / ((avg2(exp2) / avg(exp)) * 9 * value1(exp1))).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output2").innerHTML +=
    `<br><h3> Hyper Rubber: <span id="numberOutput">${Number(
      ( 1 / ((avg2(rubber2) / avg(rubber)) * 8 * value1(rubber1))).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output2").innerHTML +=
    `<br><h3> Shield Cores: <span id="numberOutput">${Number(
      ( 1 / ((avg2(cores2) / avg(cores)) * 2.2 * value1(cores1))).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output2").innerHTML +=
    `<br><h3> Shield Generators: <span id="numberOutput">${Number(
      ( 1 / ((avg2(gens2) / avg(gens)) * 1.2 * value1(gens1))).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output2").innerHTML +=
    `<br><h3> Shield Projectors: <span id="numberOutput">${Number(
      ( 1 / ((avg2(projs2) / avg(projs)) * 0.4 * value1(projs1))).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output2").innerHTML +=
    `<br><h3> RCs: <span id="numberOutput">${Number(
      ( 1 / ((avg2(rcs2) / avg(rcs)) * 3 * value1(rcs1))).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output2").innerHTML +=
    `<br><h3> Auto Turret: <span id="numberOutput">${Number(
      ( 1 / ((avg2(auto2) / avg(auto)) * 0.05 * value1(auto1))).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output2").innerHTML +=
    `<br><h3> Burst Turret: <span id="numberOutput">${Number(
      ( 1 / ((avg2(burst2) / avg(burst)) * 0.05 * value1(burst1))).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output2").innerHTML +=
    `<br><h3> Gold Null Trophy: <span id="numberOutput">${Number(
      ( 1 / (value(goldNull) * 0.7)).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output2").innerHTML +=
    `<br><h3> Silver Null Trophy: <span id="numberOutput">${Number(
      ( 1 / (value(silverNull) * 0.7)).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output2").innerHTML +=
    `<br><h3> Bug Hunter Trophy: <span id="numberOutput">${Number(
      ( 1 / (value(bug) * 0.4)).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output2").innerHTML +=
    `<br><h3> Golden Shredder: <span id="numberOutput">${Number(
      ( 1 / (value(shredder) * 1)).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output2").innerHTML +=
    `<br><h3> Legacy Fabricator: <span id="numberOutput">${Number(
      ( 1 / (value(legacy) * 4.1)).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output2").innerHTML +=
    `<br><h3> Hyper Ice: <span id="numberOutput">${Number(
      ( 1 / ((avg2(glass2) / avg(glass)) * 2.5 * value1(glass1))).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output2").innerHTML +=
    `<br><h3> RCD: <span id="numberOutput">${Number(
      ( 1 / ((avg2(rcd2) / avg(rcd)) * 0.15 * value1(rcd1))).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output2").innerHTML +=
    `<br><h3> Backpack: <span id="numberOutput">${Number(
      ( 1 / ((avg2(backpack2) / avg(backpack)) * 0.3 * value1(backpack1))).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output2").innerHTML +=
    `<br><h3> Blueprint Scanner: <span id="numberOutput">${Number(
      ( 1 / ((avg2(bp2) / avg(bp)) * 0.6 * value1(bp1))).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output2").innerHTML +=
    `<br><h3> Manifest Scanner: <span id="numberOutput">${Number(
      ( 1 / ((avg2(manifest2) / avg(manifest)) * 0.15 * value1(manifest1))).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output2").innerHTML +=
    `<br><h3> BOM Scanner: <span id="numberOutput">${Number(
      ( 1 / ((avg2(bom2) / avg(bom)) * 0.15 * value1(bom1))).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output2").innerHTML +=
    `<br><h3> Volleyball: <span id="numberOutput">${Number(
      ( 1 / ((avg2(volleyball2) / avg(volleyball)) * 0.2 * value1(volleyball1))).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output2").innerHTML +=
    `<br><h3> Basketball: <span id="numberOutput">${Number(
      ( 1 / ((avg2(basketball2) / avg(basketball)) * 0.2 * value1(basketball1))).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output2").innerHTML +=
    `<br><h3> Football: <span id="numberOutput">${Number(
      ( 1 / ((avg2(football2) / avg(football)) * 0.2 * value1(football1))).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output2").innerHTML +=
    `<br><h3> Beach Ball: <span id="numberOutput">${Number(
      ( 1 / ((avg2(beachball2) / avg(beachball)) * 0.2 * value1(beachball1))).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output2").innerHTML +=
    `<br><h3> Rapid-Fire: <span id="numberOutput">${Number(
      ( 1 / ((avg2(rapid2) / avg(rapid)) * 0.1 * value1(rapid1))).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output2").innerHTML +=
    `<br><h3> Preservation: <span id="numberOutput">${Number(
      ( 1 / ((avg2(pres2) / avg(pres)) * 0.1 * value1(pres1))).toPrecision(3),
    )}</span></h3>`;
  document.getElementById("output2").innerHTML +=
    `<br><h3> Advanced Turret Controllers: <span id="numberOutput">${Number(
      ( 1 / ((avg2(control2) / avg(control)) * 0.2 * value1(control1))).toPrecision(3),
    )}</span></h3>`;
}

},{"dayjs":1,"dayjs/plugin/customParseFormat":2}]},{},[3]);
