import { Component } from '@angular/core';
import { NavController, Checkbox } from 'ionic-angular';

import  { TODO } from '../../shared/todo';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  todos: FirebaseListObservable<TODO[]>;

  itemObservable = this.af.database.object('/todos');

  constructor(public navCtrl: NavController, private af: AngularFire) {
    this.todos = af.database.list('/todos');
  }



  // add(text: string) {
  //   this.todos.push({
  //     title: text,
  //     status: false
  //   });
  // }

  // toggle(todo: TODO){
  //   const key = todo['$key'];
  //   this.af.database.object('/todos/' + key).update({
  //     status: !todo.status
  //   });
  // }

  toggle(todo: TODO, checkbox: Checkbox) {
    const key = todo['$key'];
    this.af.database.object('/todos/' + key).update({
      status: !todo.status
    });

  }

  // remove(key: string){
  //   this.af.database.object('todos/' + key).remove();
  // }
  //
  // checkAdd(event: Event, text: string){
  //   event.preventDefault();
  //   if(text['match'](/[A-zА-я0-9]/)){
  //     this.add(text);
  //   }else {
  //     this.stateErrText();
  //     this.animateShakeInput();
  //   }
  // }

}
