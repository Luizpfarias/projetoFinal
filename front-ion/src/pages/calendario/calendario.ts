import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-calendario',
  templateUrl: 'calendario.html'
})
export class CalendarioPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  listaTarefas: any; //observable
  arrayTarefa: any;

  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
    this.listaTarefas = this.httpClient.get('https://j8dykho86h.execute-api.sa-east-1.amazonaws.com/Dev/tarefa')
    this.listaTarefas.subscribe(listaTarefas => {
      this.arrayTarefa = listaTarefas
      console.log('Dados: ', this.arrayTarefa);
    });
  }
  
  
}
