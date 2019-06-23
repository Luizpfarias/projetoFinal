import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-lista-certificados',
  templateUrl: 'lista-certificados.html'
})
export class ListaCertificadosPageModule {
  listaCertificados: any;
  arrayCertificados: any;


  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
    this.listaCertificados = this.httpClient.get('https://j8dykho86h.execute-api.sa-east-1.amazonaws.com/Dev/certificado')
    this.listaCertificados.subscribe(listaCertificados => {
      this.arrayCertificados = listaCertificados
      console.log('Dados: ', this.arrayCertificados);
    });
  }
}