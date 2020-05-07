# covidtracker app

## run in browser

`npm i && ionic serve`

## run on ios simulator / device

`npx cap sync`

`npx cap open ios`

## run on android simulator / device

`npx cap sync`

`npx cap open android` // might have to delete the .idea folder if there is one

## build web assets

`ionic build`


## copy assets
1024x1024
2732x2732
cordova-res ios --skip-config --copy
cordova-res android --skip-config --copy
or do:
cordova-res --skip-config --copy
... if this doesn't work then do npm run resources
