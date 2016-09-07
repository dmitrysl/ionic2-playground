# Playground for Ionic 2

To run in the browser (great for initial development):
  ionic serve

To run on iOS:
  ionic run ios

To run on Android:
  ionic run android

 
# Setup ionic cloud
https://docs.ionic.io/setup.html
  $ npm install @ionic/cloud-angular --save
  $ ionic io init
  // Enter email/pass for https://apps.ionic.io
  
  
# Deploy
  $ ionic plugin list
  $ cordova plugin add ionic-plugin-deploy --save
  
  
# Snapshots  
  $ ionic upload --note "NOTE"
  $ ionic upload --note "NOTE" --deploy CHANNEL_TAG  // CHANNEL_TAG	production, staging, dev, or a tag of a custom channel
  Then you should go to app Deploy dashboard and click on "Deploy" button.
