import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FCM } from '@ionic-native/fcm';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
    firebaseTitle='';
    bodyFirebase='';
  constructor(public navCtrl: NavController,private fcm:FCM) {

  }
ionViewDidLoad(){
  this.firebaseMessage();
}
  firebaseMessage(){
    this.fcm.getToken().then(token=>{
      alert(token);
     
    })
    this.fcm.subscribeToTopic('marketing');
    
    this.fcm.onNotification().subscribe(data=>{
      if(data.wasTapped){
        alert(data.title+" / "+data.body);
        this.firebaseTitle=data.title;
        this.bodyFirebase=data.body;
        console.log("Received in background");
      } else {
        alert("Received in foreground");
        console.log("Received in foreground");
      };
    })
    
    
    
  }

}
