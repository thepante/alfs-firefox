// ==UserScript==
// @name           alfs.uc.js
// @include        main
// @version        0.7.8
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
function fromside(f) { if (attachedRight === true) { return "→ "; } else { return "← ";} return;}
function debugM(d)   { if (debugMode === true) { console.log('alfs: ' + fromside() + d); return;}}

// Units conversions //
function vwTOpx(value) { var w = window, x = w.innerWidth, y = w.innerHeight; var result = (x*value)/100; return result; }
function pxTOvw(value) { var w = window, x = w.innerWidth, y = w.innerHeight; var result = (100*value)/x; return result; }
function vhTOpx(value) { var w = window, x = w.innerWidth, y = w.innerHeight; var result = (y*value)/100; return result; }
function pxTOvh(value) { var w = window, x = w.innerWidth, y = w.innerHeight; var result = (100*value)/y; return result; }

// Styling //
function floatPosition() {
  if (attachedRight === true) {
   return "style", "right: 0;";
  } 
  else {
    return "style", "left: 0;";
  }
}
var styleFloat = {
  '.sidebar-splitter'             : 'display: none;', 
  '#sidebar-reverse-position'     : 'display: none;',
  '#sidebar-extensions-separator' : 'display: none;',
  '#browser'                      : "overflow: hidden; position: absolute; --sidebar-size:"+ alfsPrefs.height +"; --sidebar-width:"+ alfsPrefs.width +"; --shadow-strong:"+ alfsPrefs.shadow_intensity +";",
  '#appcontent'                   : 'top: 0; bottom: 0; right: 0; left: 0; position: absolute;',
  '#tabbrowser-tabbox'            : 'height:' + 100 + 'vh !important; width: 100% !important;',
  '#sidebar-header'               : 'width: 100%;',
  '#sidebar-box'                  : 'position: absolute; height: calc(var(--sidebar-size) - 42px); z-index: 9999; ' + floatPosition() ,
  '#sidebar'                      : 'min-width: var(--sidebar-width) !important; min-height: 100%; position: absolute; border-radius: 0 0 0 3px;',
};

var styleClassic={
  '.sidebar-splitter'             : 'display: none;', 
  '#sidebar-reverse-position'     : 'display: none;',
  '#sidebar-extensions-separator' : 'display: none;',
  '#browser'                      : 'overflow: hidden;',
};

if (alfsPrefs.classic_mode === true) {
  var styled = styleClassic;
}
else {
  var styled = styleFloat;
}

Object.entries(styled).forEach(([key, value]) => {
   var ident = document.querySelector(key);
   ident.setAttribute("style", value);
   console.log(key + ' →→ ' + value);
});

// Make draggable when Shift+Click on sidebar headerbar //
var m = document.getElementById('sidebar-header');
m.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);
function mouseUp() {window.removeEventListener('mousemove', move, true);}
function mouseDown(e) {if (e.shiftKey) {window.addEventListener('mousemove', move, true);}}

// Move from corrected side //
function move(e) {
    var rightX = vwTOpx(100) - e.clientX;
    alfs.style.top = (e.clientY - 65) + 'px';
    if (attachedRight === true) {alfs.style.right = rightX + 'px';}
    else {alfs.style.left = e.clientX + 'px';}
    debugM('L (' + e.clientX + ')[' + vwTOpx(100) + '](' + rightX + ') R || T (' + e.clientY + ')[' + vhTOpx(100) + ']' );
}

// Make keybind //
function keybindin(m) {
    var modifier = 0;
    if (alfsPrefs.keybind_ctrl === 1) {
        modifier = m.ctrlKey;
        return modifier;
    }
    else if (alfsPrefs.keybind_ctrl === 2) {
        modifier = m.altKey;
        return modifier;
    }
    else if (modifier === 0) {
        return;
    }
}

// Set user prefs //
function getdamprefs() {
    debugM('prefs from file');
    
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

// Classic mode //
function dontfloat() {
	if (attachedRight === true) {browser.setAttribute("style", "margin-right: -" + alfsPrefs.width + " !important;");} 
	else {browser.setAttribute("style", "margin-left: -" + alfsPrefs.width + " !important;");}
}
function classicmode() {
    var cm = alfsPrefs.classic_mode === true;
    if (cm && statbnt === 0) {
    		dontfloat();
    }
    else if (cm && statbnt === 1) {
    browser.setAttribute("style", "margin-left: 0px !important; margin-right: 0px !important;");
    }
    else {}
} classicmode();


// Show or hide it //
function doitmf() {
  if (statbnt == 0) {
        debugM(statbnt+" open");
        sideB.checked=true;
        alfs.className = ogclass + ' openit';
        alfs.hidden=false;
        statbnt = 1;
		classicmode();
    }
    else {
        debugM(statbnt+" close");
        sideB.checked=false;
        alfs.className = ogclass + ' closeit';
        alfs.hidden=false;
        statbnt = 0;
		classicmode();
    }
}

// Let it go... //
document.onkeydown = function(e) {
if (keybindin(e) && e.which === alfsPrefs.keybind_key) {
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

