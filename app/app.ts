import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {Auth, User, CloudSettings, provideCloud} from '@ionic/cloud-angular';


const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'de393f61'
  }
};

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform, public auth: Auth, public user: User) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      // let details = {'email': 'email', 'password': 'pass'};
      // this.auth.signup(details).then(() => {
      //   return this.auth.login('basic', details);
      // }).then(() => {
      //   // `this.user` is now the authenticated user
      // }, (err) => {
      //   // something went wrong!
      // });
    });
  }
}

ionicBootstrap(MyApp, [provideCloud(cloudSettings)]);
