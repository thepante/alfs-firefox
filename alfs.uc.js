// ==UserScript==
// @name           alfs.uc.js
// @include        main
// @version        1.4
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
var selectedpos = "nopyet";

// Load sidebar in the bushes //
alfs.hidden=false;
alfs.checked=true;
alfs.className = ogclass + ' closeit';
sideB.checked=false;

// Get prefs if they exists //
function besomecooler() {
    if (typeof alfsPrefs !== 'undefined') {
        var str = alfsPrefs.position;
        debugM('prefs from file');
    }
    else { justbenormalpls(); var str = alfsPrefs.position;}
    selectedpos = str.toLowerCase();
    if (selectedpos === 'left') {attachedRight = false;}
    return;
} besomecooler();

// Some info for debuggin //
function fromside(f) { if (attachedRight === true) { return "→ "; } else { return "← ";} return;}
function debugM(d)   { if (alfsPrefs.debug === true) { console.log('alfs: ' + fromside() + d);}}
function info() {if (alfsPrefs.classic_mode === true) { var sty = "styleClassic"; } else { var sty = "styleFloat"; }
  return alfsPrefs.position + " → " + selectedpos + " → " + sidePosition() + " → " + attachedRight + " → " + attachedto + " / its fallback?: " + alfsPrefs.itsfallback + " / " + sty; }

// Units conversions //
function vwTOpx(value) { var w = window, x = w.innerWidth, y = w.innerHeight; var result = (x*value)/100; return result; }
function pxTOvw(value) { var w = window, x = w.innerWidth, y = w.innerHeight; var result = (100*value)/x; return result; }
function vhTOpx(value) { var w = window, x = w.innerWidth, y = w.innerHeight; var result = (y*value)/100; return result; }
function pxTOvh(value) { var w = window, x = w.innerWidth, y = w.innerHeight; var result = (100*value)/y; return result; }

// Declaring style rules //
function sidePosition() { if (attachedRight === true) { return "right: 0";} else { return "left: 0";}} 
var attachedto = sidePosition();
var styleFloat = {
  '.sidebar-splitter'             : 'display: none;', 
  '#sidebar-reverse-position'     : 'display: none;',
  '#sidebar-extensions-separator' : 'display: none;',
  '#browser'                      : "overflow: hidden; position: absolute; --sidebar-size:"+ alfsPrefs.height +"; --sidebar-width:"+ alfsPrefs.width +"; --shadow-strong:"+ alfsPrefs.shadow_intensity +";",
  '#appcontent'                   : 'top: 0; bottom: 0; right: 0; left: 0; position: absolute;',
  '#tabbrowser-tabbox'            : 'height: 100% !important; width: 100% !important;',
  '#sidebar-header'               : 'width: 100%;',
  '#sidebar-box'                  : 'position: absolute; height: calc(var(--sidebar-size) - 42px); z-index: 9999;' + attachedto,
  '#sidebar'                      : 'min-width: var(--sidebar-width) !important; min-height: 100%; position: absolute; border-radius: 0 0 0 3px;',
};

var styleClassic={
  '.sidebar-splitter'             : 'display: none;', 
  '#sidebar-reverse-position'     : 'display: none;',
  '#sidebar-extensions-separator' : 'display: none;',
  '#browser'                      : "overflow: hidden; --sidebar-size:"+ alfsPrefs.height +"; --sidebar-width:"+ alfsPrefs.width +"; --shadow-strong:"+ alfsPrefs.shadow_intensity +";",
  '#tabbrowser-tabbox'            : 'height: 100%; width: 100% !important;',
  '#sidebar-header'               : 'width: 100%;',
  '#sidebar-box'                  : 'position: absolute; height: calc(100vh - 72px); width: ' + alfsPrefs.width + ' !important; z-index: 9999;' + attachedto,
  '#sidebar'                      : 'min-width: var(--sidebar-width) !important; min-height: 100%; position: absolute; border-radius: 0 0 0 3px;',
};

// Apply style rules //
if (alfsPrefs.classic_mode === true) { var styled = styleClassic;} else { var styled = styleFloat;}
Object.entries(styled).forEach(([key, value]) => {
   var ident = document.querySelector(key);
   ident.setAttribute("style", value);
   debugM(key + ' →→ ' + value);
});

// If is float then make draggable with shift+click //
if (alfsPrefs.classic_mode != true){
var m = document.getElementById('sidebar-header');
m.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);
function mouseUp() {window.removeEventListener('mousemove', move, true);}
function mouseDown(e) {if (e.shiftKey) {window.addEventListener('mousemove', move, true);}}}

function move(e) {
    var rightX = vwTOpx(100) - e.clientX;
    alfs.style.top = (e.clientY - 65) + 'px';
    if (attachedRight === true) {alfs.style.right = rightX + 'px';}
    else {alfs.style.left = e.clientX + 'px';}
    debugM('L (' + e.clientX + ')[' + vwTOpx(100) + '](' + rightX + ') R || T (' + e.clientY + ')[' + vhTOpx(100) + ']' );
}

// Shortcut modifier key declaration //
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

// Defaults prefs //
function justbenormalpls() {
    var alfsPrefs = {'itsfallback' : true, 'position' : 'Right', 'width' : '24em', 'height' : '60%', 'shadow_intensity' : 0.1, 'keybind_ctrl' : 1, 'keybind_key' : 88, 'debug' : false, 'classic_mode' : false, };
    console.log('alfs fallback prefs!');
    return;
}

// Classic mode //
function classicmode() {
  var attach_right = attachedRight === true;
  var attach_left = attachedRight === false;
  var sidebar_visible = statbnt === 1;
  var sidebar_hided = statbnt === 0;
  var appcontent = document.getElementById("appcontent");

  var common_ac = "overflow: hidden; top: 0; bottom: 0; right: 0; left: 0; position: absolute;";
  var common_sb = "position: relative; height: 0 !important; width: 0 !important; z-index: -9999;";
  var right_bw = "overflow: hidden; margin-right: 0 !important; margin-left: 0 !important; position: absolute;";
  var left_bw = "overflow: hidden; margin-left: 0 !important; margin-right: 0 !important; position: absolute;";

    if (attach_right && sidebar_visible) {
      browser.setAttribute("style", styleClassic['#browser'] + right_bw);
      appcontent.setAttribute("style", "overflow: hidden; top: 0; bottom: 0; right: " + alfsPrefs.width + "; left: 0; position: absolute;");
      alfs.setAttribute("style", styleClassic["#sidebar-box"]);
    } 
    else if (attach_left && sidebar_visible) {
      browser.setAttribute("style", styleClassic['#browser'] + left_bw);
      appcontent.setAttribute("style", "overflow: hidden; top: 0; bottom: 0; right: 0; left: " + alfsPrefs.width + "; position: absolute;");
      alfs.setAttribute("style", styleClassic["#sidebar-box"]);
    }
    else if (attach_right && sidebar_hided) {
      browser.setAttribute("style", styleClassic['#browser'] + right_bw);
      appcontent.setAttribute("style", common_ac);
      alfs.setAttribute("style", common_sb);
    }
    else if (attach_left && sidebar_hided) {
      browser.setAttribute("style", styleClassic['#browser'] + left_bw);
      appcontent.setAttribute("style", common_ac);
      alfs.setAttribute("style", common_sb);
    }
} function detectclassic(){ if (alfsPrefs.classic_mode === true) {classicmode();} return;} detectclassic();


// Show or hide it //
function doitmf() {
  if (statbnt == 0) {
        debugM(statbnt+" open");
        sideB.checked=true;
        alfs.className = ogclass + ' openit';
        alfs.hidden=false;
        statbnt = 1;
        detectclassic();
    }
    else {
        debugM(statbnt+" close");
        sideB.checked=false;
        alfs.className = ogclass + ' closeit';
        alfs.hidden=false;
        statbnt = 0;
        detectclassic();
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

