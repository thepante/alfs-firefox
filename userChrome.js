// ==UserScript==
// @name           userChrome.js
// @include        main
// @version        0.0.1
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

document.getElementById("sidebar-button").addEventListener('click', function(e){
	event.preventDefault();
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
});
