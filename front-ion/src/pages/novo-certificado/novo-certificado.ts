import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-novo-certificado',
  templateUrl: 'novo-certificado.html'
})
export class NovoCertificadoPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  listaClientes: any; //observable
  arrayClientes: any;

  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
    console.log('e aqui?');
    this.listaClientes = this.httpClient.get('https://j8dykho86h.execute-api.sa-east-1.amazonaws.com/Dev/cliente')
    this.listaClientes.subscribe(listaClientes => {
      this.arrayClientes = listaClientes
      console.log('Clientes: ', this.arrayClientes);
    });
  }
 


}
