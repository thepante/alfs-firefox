// ==UserScript==
// @name           alfs.uc.js
// @include        main
// @version        0.7.5
// @note           u/thepante
// ==/UserScript==

var alfs = document.getElementById("sidebar-box");
var browser = document.getElementById("browser");
var sideB = document.getElementById("sidebar-button");
var sideX = document.getElementById("sidebar-close");
var clientWidth = document.documentElement.clientWidth;
var ogclass = alfs.className;
var statbnt = 0;
var attachedRight = true;
var debugMode = false;

// Load sidebar in the bushes //
alfs.hidden=false;
alfs.checked=true;
alfs.className = ogclass + ' closeit';
sideB.checked=false;

// DebugMode //
function debugM(d){
    if (debugMode === true) {
        console.log('alfs: ' + d); return;
    }
}

// This is meth, precious meth... //
function vwTOpx(value) {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.browser,
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

  var result = (x*value)/100;
  return result;
}

function pxTOvw(value) {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.browser,
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

  var result = (100*value)/x;
  return result;
}
debugM(vwTOpx(100));
debugM(pxTOvw(1920));

// Make draggable when Shift+Click on sidebar headerbar //
var m = document.getElementById('sidebar-header');
m.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);
function mouseUp() {window.removeEventListener('mousemove', move, true);}
function mouseDown(e) {if (e.shiftKey) {window.addEventListener('mousemove', move, true);}}

// Move from corrected side //
function move(e) {
    var rightX = vwTOpx(100) - e.clientX;
    alfs.style.top = e.clientY + 'px';
    if (attachedRight === true) {alfs.style.right = rightX + 'px';}
    else {alfs.style.left = e.clientX + 'px';}
    debugM('pos ' + e.clientY + 'x' + e.clientX);
    debugM('PXSFR ' + rightX);
}

// Set user prefs //
function getdamprefs() {
    browser.setAttribute("style", "--sidebar-size:"+ alfsPrefs.height +"; --sidebar-width:"+ alfsPrefs.width +"; --shadow-strong:"+ alfsPrefs.shadow_intensity +";");
    debugM('prefs from file');
    if (attachedRight === true) {alfs.setAttribute("style", "right: 0;");} else {alfs.setAttribute("style", "left: 0;");}
}

// Defaults prefs //
function justbenormalpls() {
    browser.setAttribute("style", "--sidebar-size: 60%; --sidebar-width: 24em; --shadow-strong: 0.1;");
    alfs.setAttribute("style", "right: 0;");
    console.log('alfs fallback prefs!');
}

// Assign settings //
function besomecooler() {
    if (typeof alfsPrefs !== 'undefined') {
        var str = alfsPrefs.position;
        selectedpos = str.toLowerCase();
        if (selectedpos === 'left') {attachedRight = false;}
        if (alfsPrefs.debug === true) {debugMode = true;}
        getdamprefs();
    }
    else {
        justbenormalpls();
    }
} besomecooler();

// Show or hide it //
function doitmf() {
  if (statbnt == 0) {
        debugM(statbnt+" open");
        sideB.checked=true;
        alfs.className = ogclass + ' openit';
        alfs.hidden=false;
        statbnt = 1;
    }
    else {
        debugM(statbnt+" close");
        sideB.checked=false;
        alfs.className = ogclass + ' closeit';
        alfs.hidden=false;
        statbnt = 0;
    }
}

// Let it go... //
document.onkeydown = function(e) {
if (e.ctrlKey && e.which === 88) {
    e.preventDefault();
    doitmf();
    e.stopPropagation();
}};

sideB.addEventListener('click', function(e){
    e.preventDefault();
    doitmf();
});

sideX.addEventListener('click', function(e){
    e.preventDefault();
    doitmf();
});


