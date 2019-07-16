import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
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

  tabsPlacement: string = 'bottom';
  tabsLayout: string = 'icon-top';
  constructor(public platform: Platform, public navCtrl: NavController) {
    if (!this.platform.is('mobile')) {
      this.tabsPlacement = 'top';
      this.tabsLayout = 'icon-left';
    }
  }

  public openMessenger(){
    console.log("go to messenger");
    window.open("http://m.me/kairostheapp", "_blank");
  }
  
}
