import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { AngularFire, FirebaseListObservable } from "angularfire2";
//import { firebaseConfig }  from '../environments/firebase.config.js';
import  { TODO } from '../shared/todo';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;
  todos: FirebaseListObservable<TODO[]>;

  //itemObservable = this.af.database.object('/todos');

  constructor(platform: Platform, private af: AngularFire) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      StatusBar.styleDefault();
      Splashscreen.hide();

      //this.todos = af.database.list('/todos');
    });

  }
}





// export class AppComponent  {
//
//   add(text: string) {
//     this.todos.push({
//       title: text,
//       status: false
//     });
//   }
//
//   toggle(todo: TODO){
//     const key = todo['$key'];
//     this.af.database.object('/todos/' + key).update({
//       status: !todo.status
//     });
//   }
//
//   remove(key: string){
//     this.af.database.object('todos/' + key).remove();
//   }
//
//   checkAdd(event: Event, text: string){
//     event.preventDefault();
//     if(text['match'](/[A-zА-я0-9]/)){
//       this.add(text);
//     }else {
//       this.stateErrText();
//       this.animateShakeInput();
//     }
//   }
//
//   animateShakeInput() {
//     let el = this;
//     el.stateInput = 'shakeRight';
//     setTimeout(function () {
//       el.stateInput = 'shakeLeft';
//     }, 100);
//     setTimeout(function () {
//       el.stateInput = 'shakeStand';
//     }, 200);
//   }
//
//   stateErrText() {
//     let el = this;
//     el.stateLabel = 'textRed';
//     setTimeout(function () {
//       el.stateLabel = 'textBlack';
//     }, 2000);
//   }
// }
//
// interface TODO{
//   title: string;
//   status: boolean;
// }
