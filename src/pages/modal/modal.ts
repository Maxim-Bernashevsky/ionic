import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

import  { TODO } from '../../shared/todo';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  templateUrl: 'modal.html'
})
export class ModalPage {
  todos: FirebaseListObservable<TODO[]>;
  constructor( private af: AngularFire, public viewCtrl: ViewController) {
    this.todos = af.database.list('/todos');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  add(text:string) {
    this.todos.push({
      title: text,
      status: false
    });
    this.dismiss();
  }

  checkAdd(text: string){
    //event.preventDefault();
    if(text['match'](/[A-zА-я0-9]/)){
      this.add(text);
    }else {
      console.log('Empty input!');
      return false; // event.preventDefault
    }
  }

/*
  animateShakeInput() {
    let el = this;
    el.stateInput = 'shakeRight';
    setTimeout(function () {
      el.stateInput = 'shakeLeft';
    }, 100);
    setTimeout(function () {
      el.stateInput = 'shakeStand';
    }, 200);
  }

  stateErrText() {
    let el = this;
    el.stateLabel = 'textRed';
    setTimeout(function () {
      el.stateLabel = 'textBlack';
    }, 2000);
  }*/
}
