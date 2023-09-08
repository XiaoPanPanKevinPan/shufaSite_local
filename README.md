# shufaSite_local
Serve [shufaSite]( https://github.com/XiaoPanPanKevinPan/shufaSite ) locally with an application-like UI.

This project aims to serve the site with robusty and ability to be backed up. The users (typically teachers) should be able to get a copy of the site and use it locally.

## How to run
Replace the symbolic link `./mainApp/site/` with a directory containing the site.

This site depends on modern browsers. Please install Chrome, Chromium, Edge, Brave, Vivaldi, Firefox, Librewolf or WaterFox on your computer.

This site depends on NodeJS. Install them as follows:

### Windows
Steps: 
1. Create a folder called `nodeWindows` in the root directory of this repo. 
2. Download and unzip the `32-bit` `Windows Binary (.zip)` NodeJS [here]( https://nodejs.org/en/download/current ).
   Now you should have `node`, `npm.cmd`, `npx.cmd`, etc. in your `nodeWindows` directory.
3. Run `run.bat` by clicking twice on it.

### Linux
Steps: 
1. Create a folder called `nodeLinux` in the root directory of this repo. 
2. Download and decompress the `Linux Binary (x64)` NodeJS [here]( https://nodejs.org/en/download/current ).
   Now you should have `bin/`, `include/`, `lib/`, `share/`, etc. in your `nodeWindows` directory.
3. Run `run.sh`.
