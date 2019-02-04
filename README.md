[![Screenshot](https://i.imgur.com/3yoxdiF.png)](https://i.imgur.com/ZduZ3Ot.mp4)

## Always loaded floating sidebar  
The idea for this is to have the sidebar always ready to show, without loading its content everytime we hit the button or shortcut, to open it and show us whatever we have there.


It's quite simply, check it up: 

## Preferences
The sidebar can be size you want. The _preferences_ are indicated in the `.CSS` itself. Search for:

|under|   search for  |   edit |  info |  
|---|---|---|---|
|<sup>**#browser**</sup>| <sup>**--sidebar-size**</sup> | <sup>**60%`**</sup> | <sup>**Its height**</sup>  |
|<sup>**#sidebar-box**</sup>|   <sup>**right**</sup> |   <sup>**right**</sup> | <sup>**The position. Change `right` itself to `left` if you want it on the left**</sup> |

## How to get it
#### If you dont have touched _that_ 'chrome' folder:
1. Download this repo, or clone it
2. Copy `userChrome.js` and `userChrome.css` files to the `chrome` folder
3. Reopen Firefox

> **Note:** `chrome` its a folder that the user can use to customize the Firefox interface. Read more here. If you don't have it, just create that. It is located inside your profile folder.

> **Where's the profile folder?** 
In your Firefox, go to the (hamburg) menu → `Help` → `Troubleshoot Information` OR type and enter to `about:support`. There is 'Profile Directory' information, click 'Open Directory'.
That's where the `chrome` folder should be located.

#### If you already touched the chrome folder
You need the content of both files presented. If you have already have some or both of the files created, so: copy it's content to the yours.
I mean, just copy paste the codes :v

----

**It may contain bugs**

