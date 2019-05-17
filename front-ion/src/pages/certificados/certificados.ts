import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NovoCertificadoPage } from '../novo-certificado/novo-certificado';

@Component({
  selector: 'page-certificados',
  templateUrl: 'certificados.html'
})
export class CertificadosPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToNovoCertificado(params){
    if (!params) params = {};
    this.navCtrl.push(NovoCertificadoPage);
  }
}
