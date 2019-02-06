// ==UserScript==
// @name           alfs.uc.js
// @include        main
// @version        0.5.1
// @note           u/thepante
// ==/UserScript==

var alfs = document.getElementById("sidebar-box");
var browser = document.getElementById("browser");
var sideB = document.getElementById("sidebar-button");
var sideX = document.getElementById("sidebar-close");
var ogclass = alfs.className;
var statbnt = 0;

alfs.hidden=false;
alfs.checked=true;
alfs.className = ogclass + ' closeit';
sideB.checked=false;

function besomecooler() {
    if (typeof alfsPrefs !== 'undefined') {
        var str = alfsPrefs.position;
        selectedpos = str.toLowerCase();
        if (selectedpos == 'right') {alfs.setAttribute("style", "right: 0;");} else {alfs.setAttribute("style", "left: 0;");}
        browser.setAttribute("style", "--sidebar-size:"+ alfsPrefs.height +"; --sidebar-width:"+ alfsPrefs.width +"; --shadow-strong:"+ alfsPrefs.shadow_intensity +";");
        console.log('alfs prefs from file');
    }
    else {
        browser.setAttribute("style", "--sidebar-size: 60%; --sidebar-width: 24em; --shadow-strong: 0.1;");
        alfs.setAttribute("style", "right: 0;");
        console.log('alfs fallback prefs');
    }
} besomecooler();

function doitmf() {
  if (statbnt == 0) {
        console.log(statbnt+" : alfs open");
        sideB.checked=true;
        alfs.className = ogclass + ' openit';
        alfs.hidden=false;
        statbnt = 1;
    }
    else {
        console.log(statbnt+" : alfs close");
        sideB.checked=false;
        alfs.className = ogclass + ' closeit';
        alfs.hidden=false;
        statbnt = 0;
    }
}

document.onkeydown = function(e) {
  if (e.ctrlKey && e.which === 88) {
    e.preventDefault();
    doitmf();
    e.stopPropagation();
  } 
};

sideB.addEventListener('click', function(e){
    e.preventDefault();
    doitmf();
});

sideX.addEventListener('click', function(e){
    e.preventDefault();
    doitmf();
});


