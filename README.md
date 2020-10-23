### Deprecated script. Didn't guaranteed to work in newer Firefox versions, in that case use the [updated version of this](https://github.com/thepante/SAL-Firefox).

**Also I'm sorry for how this old one was written 🙈. I can't rewrite it right now. Neither I have no clue at wich Firefox version this script stopped working properly. I recommend to use the newer one linked above.**

---------

[![Screenshot](https://i.imgur.com/3yoxdiF.png)](https://imgur.com/a/35dfjzz)

## Always loaded floating sidebar  
The idea for this is to have the sidebar always ready to show, without loading its content everytime we hit the button or shortcut, to open it and show us whatever we have there.


It's quite simply, check the [video demo here](https://imgur.com/a/35dfjzz).

## Preferences
The sidebar can be the size you want. You can adjust the preferences in the `alfs.prefs.uc.js` file.  
The preferences file isn't mandatory. If there is not such file then it gonna be use defaults adjusts.

| Key              | Default | Info                                                                                                                    |  
| :---             | ---:    | :---                                                                                                                    |  
| position         | `Right` | Attaching side `Left` or `Right`                                                                                        |  
| width            | `24em`  | Sidebar width                                                                                                           |  
| heigth           | `60%`   | Sidebar height                                                                                                          |  
| shadow_intensity | `0.1`   | Can be negative too, eg: `-0.2` - _Disable_ with `-1`                                                                   |  
| keybind_ctrl     | `1`     | `0`= disabled, `1`= ctrl, `2`= alt                                                                                      |  
| keybind_key      | `88`    | Code for the `x` key. Can check the list with the codes [here](https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes) |
| classic_mode | `false` | To enable it use `true` - Read bottom for more info 
| debug        | `false` | Can be enabled with `true`                          |  



 * **Shortcut to open and hide:**  Default values are for using `ctrl + x`  
 * **Classic mode:** If you enable this option, the sidebar will not float. Will use the default Firefox behavior but its content keep loaded and shortcut working, so it doesn't have to be loaded every time it is open.


## It's draggable  
You can move it! Just pressing `shift` key while clicking on the headerbar of the sidebar.  
The new position from that action, it's gonna be attached to the sidebar initial position (left or right side of the window), which you can adjust on the preferences file.

![Examples](https://i.imgur.com/2N9lWm1.png)

### Combine using with...
 * [Tree Style Tab](https://addons.mozilla.org/es/firefox/addon/tree-style-tab/) - Manage the tabs from the sidebar
 * [Side View](https://addons.mozilla.org/es/firefox/addon/side-view/) - Webs in sidebar. Eg: another Wikipedia article, a Youtube video, WhatsApp/Telegram, etc.
 * [Minimap Scroller](https://addons.mozilla.org/es/firefox/addon/minimap-scroller-sidebar/) - Show a scrollable minimap of the actual page.

> **Note that this draggable feature doesn't save its position for the next Firefox session**.  
Also can be a bit buggy sometimes.

## How to get it
1. [**Download alfs-userchrome-\*.zip**](https://github.com/thepante/alfs-firefox/releases/latest)
2. Copy its files to your `chrome` folder
3. Reopen Firefox

> **Note:** `chrome` its a folder that the user can use to customize the Firefox interface. [Read more here](http://kb.mozillazine.org/index.php?title=UserChrome.css).  
If you don't have it, just create that. It is located inside your profile folder.

> In your Firefox address bar type and enter to `about:support`. There is 'Profile Directory' information, click 'Open Directory'. That's where the `chrome` folder should be located at.

## If you already have an userChrome.css

- Copy and paste `alfs.uc.js` and `alfs.prefs.uc.js` to your 'chrome' folder
- Open both `.css` files (yours and the one from alfs)
- Copy the content of the .css from alfs
- Paste the copied code to the final of your `userChrome.css`

Restart Firefox. `about:restartrequired`

## Webextension companion
You can also install the basic [**extension companion for alfs**](https://addons.mozilla.org/en-US/firefox/addon/alfs-b/) which add the functionality of a picture in picture mode that does work on YouTube and Vimeo (at the moment).  

It adds a button on the urlbar when on supported sites. When it's pressed, the sidebar will load the video. It's a kind of picture in picture solution.  

That's mean you can be on Reddit or the Firefox options page itself, and keep watching a video.

----

**It may contain bugs**

Please report issues. Here's my list of pending:
- [X] Shortcut to open it.
- [X] Preferences to adjust keyboard shortcut.
- [X] Don't show urls bottom tooltip
