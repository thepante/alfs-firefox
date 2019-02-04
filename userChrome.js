// ==UserScript==
// @name           userChrome.js
// @include        main
// @version        0.0.1
// @note           u/thepante
// ==/UserScript==

document.getElementById("sidebar").src='chrome://browser/content/webext-panels.xul';
document.getElementById("sidebar-button").checked=false;
var alfs = document.getElementById("sidebar-box");
var ogclass = alfs.className;
var statbnt = 0;

alfs.hidden=false;
alfs.checked=true;
alfs.className = ogclass + ' closeit';

document.getElementById("sidebar-button").addEventListener('click', function(e){
	event.preventDefault();
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
});