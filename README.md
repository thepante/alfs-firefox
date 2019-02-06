[![Screenshot](https://i.imgur.com/3yoxdiF.png)](https://i.imgur.com/ZduZ3Ot.mp4)

## Always loaded floating sidebar  
The idea for this is to have the sidebar always ready to show, without loading its content everytime we hit the button or shortcut, to open it and show us whatever we have there.


It's quite simply, check the video right there.

## Preferences
The sidebar can be the size you want. You can adjust the preferences in the `alfs.prefs.uc.js` file.

| Key              | Default    | Info                       |  
| :---             | ---:       | :---                       |  
| position         | Right      | Attaching side             |  
| width            | 24em       | Sidebar width              |  
| heigth           | 60%        | Sidebar height             |  
| shadow_intensity | 0.1        | Can be negative eg: `-0.2` |  
| _in next update_ | `ctrl + x` | Show/hide sidebar itself   |  

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

----

**It may contain bugs**

Please report issues. Need to fix:
- [X] Shortcut to open it. Done but ↓
- [ ] Preferences to adjust keyboard shortcut
- [ ] Minor graphical issue when a extension doesn't cover all its background.
