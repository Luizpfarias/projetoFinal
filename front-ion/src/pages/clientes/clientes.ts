import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NovoClientePage } from '../novo-cliente/novo-cliente';
import { CertificadosPage } from '../certificados/certificados';
import { NovoCertificadoPage } from '../novo-certificado/novo-certificado';
import { BuscarClientesPage } from '../buscar-clientes/buscar-clientes';

@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html'
})
export class ClientesPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToNovoCliente(params){
    if (!params) params = {};
    this.navCtrl.push(NovoClientePage);
  }goToCertificados(params){
    if (!params) params = {};
    this.navCtrl.push(CertificadosPage);
  }goToNovoCertificado(params){
    if (!params) params = {};
    this.navCtrl.push(NovoCertificadoPage);
  }goToBuscarClientes(params){
    if (!params) params = {};
    this.navCtrl.push(BuscarClientesPage);
  }
}
