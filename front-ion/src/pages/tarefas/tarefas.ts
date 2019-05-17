import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NovaTarefaPage } from '../nova-tarefa/nova-tarefa';
import { CalendarioPage } from '../calendario/calendario';

@Component({
  selector: 'page-tarefas',
  templateUrl: 'tarefas.html'
})
export class TarefasPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToNovaTarefa(params){
    if (!params) params = {};
    this.navCtrl.push(NovaTarefaPage);
  }goToCalendario(params){
    if (!params) params = {};
    this.navCtrl.push(CalendarioPage);
  }
}
