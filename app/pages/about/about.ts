import {Component, NgZone} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Deploy} from '@ionic/cloud-angular';
import {AuthenticationService} from "../../services/authenticationService";


@Component({
  templateUrl: 'build/pages/about/about.html',
  providers: [AuthenticationService]
})
export class AboutPage {
  public errorNotification: any;
  public foundRepos;
  public username: string;
  private zone;
  constructor(private navCtrl: NavController, public deploy: Deploy, private authService: AuthenticationService) {
    this.username = "dmitrysl";
    this.zone = new NgZone({enableLongStackTrace: false});
    this.deploy.info()
      .then((data) => {
        this.errorNotification = data;
      })
  }
  getRepos() {
    this.authService.login(this.username, null).subscribe(
      data => {
        this.foundRepos = data.json();
      },
      err => console.error(err),
      () => console.log('getRepos completed')
    );
  }
  download():Promise<any> {
    // download new snapshot and extract it
    return this.deploy.download()
      .then(() => {
        return this.deploy.extract();
      }, (error) => {
        // log errors
      });
  }
  checkNewVersion() {
    alert('hello')
    // change active channel
    // this.deploy.channel = 'dev';

    // remove specific snapshot
    //this.deploy.deleteSnapshot('366f119a-4d3b-46fd-b1be-1def98812344');

    // get list of snapshots
    this.deploy.getSnapshots()
      .then((snapshots) => {
        // snapshots will be an array of snapshot uuids
      });

    // getting metadata of specific deploy
    //this.deploy.getMetadata('366f119a-4d3b-46fd-b1be-1def98812344').then((metadata) => {
    // use metadata
    //});

    // check on new snapshot
    this.deploy.check().then((snapshotAvailable: boolean) => {
      // When snapshotAvailable is true, you can apply the snapshot
      if (snapshotAvailable) {
        // this.zone.run(() => {
        //   this.snapshotAvailable = snapshotAvailable;
        // });
        // check metadata
        this.deploy.getMetadata().then((metadata) => {
          // use metadata
          // notify about changes
        });
        // download new snapshot and extract it
        this.download()
          .then(() => {
            // force an immediate app restart after extracting new snapshot
            this.deploy.load();
          }, (error) => {

          });
      }
    });
  }
}
