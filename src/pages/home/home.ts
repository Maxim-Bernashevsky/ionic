import { Component } from '@angular/core';
import { NavController, Checkbox, ModalController } from 'ionic-angular';

import  { TODO } from '../../shared/todo';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ModalPage } from '../modal/modal.ts';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  todos: FirebaseListObservable<TODO[]>;
  itemObservable = this.af.database.object('/todos');

  constructor(public navCtrl: NavController, private af: AngularFire, public modalCtrl: ModalController) {
    this.todos = af.database.list('/todos');
  }

  openModal(characterNum: any) {
    let modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }

  toggle(todo: TODO, checkbox: Checkbox) {
    const key = todo['$key'];
    this.af.database.object('/todos/' + key).update({
      status: !todo.status
    });
  }

}

