import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-buscar-clientes',
  templateUrl: 'buscar-clientes.html'
})
export class BuscarClientesPage {
  listaClientes: any;
  arrayClientes: any;
  termoBusca;
  arrayResults: any;

  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
    this.listaClientes = this.httpClient.get('https://j8dykho86h.execute-api.sa-east-1.amazonaws.com/Dev/cliente')
    this.listaClientes.subscribe(listaClientes => {
      this.arrayClientes = listaClientes
      console.log('Clientes aqui: ' , this.arrayClientes);
    });
  }
  
  /*public filtrarTest(){
    this.arrayResults = this.arrayClientes.filter(this.termoBusca)
    console.log(this.arrayResults);
    console.log(this.termoBusca);
  }*/
}
