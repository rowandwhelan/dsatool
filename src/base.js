var path = window.location.pathname;
var page = path.split("/").pop();
let public = ""
let dot ="."
if ((page === "index.html") || (page === "")){
  public = "/public"
  dot = ""
}
document.body.innerHTML += `
  <header style="font-family: 'Oswald', sans-serif;">
    <div id="brand"><a href="../index.html">DSA Tool</a></div>
    <nav>
      <ul>
        <li><a href="${dot}./index.html">Home</a></li>
        <li><a href=".${public}/calc.html">Calculator</a></li>
        <li><a href=".${public}/cost.html">BP Cost</a></li>
        <li><a href=".${public}/econ.html">Economics</a></li>
        <li><a href=".${public}/drops.html">Item Drops</a></li>
        <li><a href=".${public}/prices.html">Exchange Rates</a></li>
        <li><a href=".${public}/affiliates.html">Affiliates</a></li>
        <li><a href=".${public}/changelog.html">Changelog</a></li>
      </ul>
    </nav>
    <div id="hamburger-icon" onclick="toggleMobileMenu(this)">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
      <ul class="mobile-menu">
        <li><a href="${dot}./index.html">Home</a></li>
        <li><a href=".${public}/calc.html">Calculator</a></li>
        <li><a href=".${public}/cost.html">BP Cost</a></li>
        <li><a href=".${public}/econ.html">Economics</a></li>
        <li><a href=".${public}/drops.html">Item Drops</a></li>
        <li><a href=".${public}/prices.html">Exchange Rates</a></li>
        <li><a href=".${public}/affiliates.html">Affiliates</a></li>
        <li><a href=".${public}/changelog.html">Changelog</a></li>
      </ul>
    </div>
  </header>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
    body {
      background-color: #353836;
      color: white;
    }

    ul {
       list-style: none;
    }

    ul:not(.page-container *, .mobile-menu) {
      list-style: none;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    ul a:not(.page-container *, .mobile-menu) {
      color: white;
    }

    ul li:not(.page-container *, .mobile-menu) {
      padding: 5px;
      margin-left: 10px;
    }

    ul li:not(.page-container *, .mobile-menu):hover {
      transform: scale(1.1);
      transition: 0.3s;
    }

    #hamburger-icon {
      margin: auto 0;
      display: none;
      cursor: pointer;
    }

    #hamburger-icon div {
      width: 35px;
      height: 3px;
      background-color: white;
      margin: 6px 0;
      transition: 0.4s;
    }

    .open .bar1 {
      -webkit-transform: rotate(-45deg) translate(-6px, 6px);
      transform: rotate(-45deg) translate(-6px, 6px);
    }

    .open .bar2 {
      opacity: 0;
    }

    .open .bar3 {
      -webkit-transform: rotate(45deg) translate(-6px, -8px);
      transform: rotate(45deg) translate(-6px, -8px);
    }

    .open .mobile-menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }

    .mobile-menu {
      display: none;
      position: absolute;
      top: 90px;
      left: 0;
      height: calc(100vh - 50px);
      width: 100%;
      z-index: 9999;
      background-color: #1d1f1d;
      border-radius: 20px;
    }

    .mobile-menu li {
      margin-bottom: 10px;
      z-index: 99999;
    }

    @media only screen and (max-width: 800px) {
      header nav {
        display: none;
      }

      #hamburger-icon {
        display: block;
      }
    }

    </style>
    <script>
      function toggleMobileMenu(menu) {
        menu.classList.toggle('open');
      }
    </script>
  `
