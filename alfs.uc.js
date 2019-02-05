// ==UserScript==
// @name           alfs.uc.js
// @include        main
// @version        0.3.1
// @note           u/thepante
// ==/UserScript==

var alfs = document.getElementById("sidebar-box");
var sideB = document.getElementById("sidebar-button");
var ogclass = alfs.className;
var statbnt = 0;

alfs.hidden=false;
alfs.checked=true;
alfs.className = ogclass + ' closeit';
sideB.checked=false;

function doitmf() {
  if (statbnt == 0) {
        console.log(statbnt+" : alfs open");
        document.getElementById("sidebar-button").checked=true;
        alfs.className = ogclass + ' openit';
        alfs.hidden=false;
        statbnt = 1;
    }
    else {
        console.log(statbnt+" : alfs close");
        document.getElementById("sidebar-button").checked=false;
        alfs.className = ogclass + ' closeit';
        alfs.hidden=false;
        statbnt = 0;
    }
}

document.onkeyup = function(e) {
  if (e.ctrlKey && e.which == 88) {
    doitmf();
  } 
};

document.getElementById("sidebar-button").addEventListener('click', function(e){
    e.preventDefault();
    doitmf();
});