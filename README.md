
[![Build Status](https://circleci.com/gh/dmitrysl/ionic2-playground.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/dmitrysl/ionic2-playground)

# Playground for Ionic 2

To run in the browser (great for initial development):
```bash
  $ ionic serve
```  

To run on iOS:
```bash
  $ ionic run ios
```  

To run on Android:
```bash
  $ ionic run android
```

# Run in emulator ios
```bash
  $ ionic emulate ios
```  
  - By default this command runs default emulator iPhone-4s, but you can specify another target device
```bash  
  $ ios-sim showdevicetypes
```  
  - choose ios type
```bash  
  $ ionic emulate ios --target="iPhone-7-Plus"
```  

 
# Setup ionic cloud
https://docs.ionic.io/setup.html
```bash
  $ npm install @ionic/cloud-angular --save
  $ ionic io init
  // Enter email/pass for https://apps.ionic.io
```  
  
  
# Deploy
```bash
  $ ionic plugin list
  $ cordova plugin add ionic-plugin-deploy --save
```  
  
  
# Snapshots
```bash
  $ ionic upload --note "NOTE"
  $ ionic upload --note "NOTE" --deploy CHANNEL_TAG  // CHANNEL_TAG	production, staging, dev, or a tag of a custom channel
```  
  Then you should go to app Deploy dashboard and click on "Deploy" button.
