[![Screenshot](https://i.imgur.com/3yoxdiF.png)](https://i.imgur.com/ZduZ3Ot.mp4)

## Always loaded floating sidebar  
The idea for this is to have the sidebar always ready to show, without loading its content everytime we hit the button or shortcut, to open it and show us whatever we have there.


It's quite simply, check the video right there.

## Preferences
The sidebar can be size you want. The _preferences_ are indicated in the `.CSS` itself. Search for:

|under|   search for  |   edit |  info |  
|---|---|---|---|
|<sup>**#browser**</sup>| <sup>**--sidebar-size**</sup> | <sup>**60%**</sup> | <sup>**Its height**</sup>  |
|<sup>**#browser**</sup>| <sup>**--sidebar-width**</sup> | <sup>**24em**</sup> | <sup>**Its width**</sup>  |
|<sup>**#browser**</sup>| <sup>**--shadow-strong**</sup> | <sup>**0.1**</sup> | <sup>**Shadow intensity. Can be negative**</sup>  |
|<sup>**#sidebar-box**</sup>|   <sup>**right**</sup> |   <sup>**right**</sup> | <sup>**The position. Change `right` itself to `left` if you want it on the left**</sup> |

## How to get it
#### If you dont have touched _that_ 'chrome' folder:
1. [Download this .zip](https://github.com/thepante/alfs-firefox/releases/download/0.2/alfs-userchrome-0.2.zip)
2. Copy `userChrome.js` and `userChrome.css` files to the `chrome` folder
3. Reopen Firefox

> **Note:** `chrome` its a folder that the user can use to customize the Firefox interface. [Read more here](http://kb.mozillazine.org/index.php?title=UserChrome.css). If you don't have it, just create that. It is located inside your profile folder.

> **Where's the profile folder?** 
In your Firefox, go to the (hamburg) menu → `Help` → `Troubleshoot Information` OR type and enter to `about:support`. There is 'Profile Directory' information, click 'Open Directory'.
That's where the `chrome` folder should be located.

## If you already have userChrome.js/.css
**If you already have an userChrome.js:**
- Just rename the .js from alfs, from `userChrome.js` to `alfs.uc.js`
- Now you can copy it in the `chrome` folder as that

**If you already have an userChrome.css:**
- Open both `.css` files
- Copy the content of the .css from alfs
- Paste the copied code to the final of your `userChrome.css`

Restart Firefox. `about:restartrequired`


----

**It may contain bugs**

Need to fix:
- [ ] Shortcut to open it
- [ ] Back graphical issue when a extension doesn't cover it all
