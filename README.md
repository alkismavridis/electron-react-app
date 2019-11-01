## What is this?
This is a template desktop app using electron, react.js and typescript.
It also has a BLoC-like pattern setup for completely seperating business logic and rendering logic.
React will "hear" for changes in the data structure using rxjs. If you dp not like the BLoC pattern,
and prefer a more traditional React approach instead, just remove the core/directory and do stuff as usual.


##What is the use of this app?
Use this app as a starting point.
Then, implement your app as you wish.

## Dependencies?
You need to globally install electron on your system.
I have tested this app with electron version 3.0.2.

##How to build and run?
- Preperations:
  - Have **electron** globally installed.
  - cd to project root and run **npm install**.

- Run in dev mode:
  - from project root, run **npm start** (let the command running)
  - run **electron ./src/StartElectron.js DEV**
  - The app should refresh automatically every time you change something and save.
  
- for Production:
  - from project root, run **npm build**
  - The output lies in the build/ directory. It is ready for shipping.
  - To start the app, go the the directory that you shipped it (or directly from build/ directory if you did not ship it yet)
  - run **electron StartElectron.js**