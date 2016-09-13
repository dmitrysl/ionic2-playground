import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Camera} from 'ionic-native';


@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {
  private base64Image:string;
  errorMessage:string;
  constructor(private navCtrl: NavController) {
  }
  takePicture(){
    Camera.getPicture({
      mediaType: Camera.MediaType.PICTURE,
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
      this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log(err);
      this.errorMessage = err;
    });
  }
}
