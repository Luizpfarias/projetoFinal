import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TarefasPage } from '../tarefas/tarefas';
import { ClientesPage } from '../clientes/clientes';
import { OpcoesPage } from '../opcoes/opcoes';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = TarefasPage;
  tab2Root: any = ClientesPage;
  tab3Root: any = OpcoesPage;
  constructor(public navCtrl: NavController) {
  }
  
}
