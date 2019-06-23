import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TarefasPage } from '../pages/tarefas/tarefas';
import { ClientesPage } from '../pages/clientes/clientes';
import { OpcoesPage } from '../pages/opcoes/opcoes';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { NovoClientePage } from '../pages/novo-cliente/novo-cliente';
import { BuscarClientesPage } from '../pages/buscar-clientes/buscar-clientes';
import { NovaTarefaPage } from '../pages/nova-tarefa/nova-tarefa';
import { CalendarioPage } from '../pages/calendario/calendario';
import { CertificadosPage } from '../pages/certificados/certificados';
import { NovoCertificadoPage } from '../pages/novo-certificado/novo-certificado';
import { HttpClientModule } from '@angular/common/http'; //httpimport

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListaCertificadosPage } from '../pages/lista-certificados/lista-certificados';

@NgModule({
  declarations: [
    MyApp,
    TarefasPage,
    ClientesPage,
    OpcoesPage,
    TabsControllerPage,
    NovoClientePage,
    BuscarClientesPage,
    NovaTarefaPage,
    CalendarioPage,
    CertificadosPage,
    NovoCertificadoPage,
    ListaCertificadosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,//hope for the best
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TarefasPage,
    ClientesPage,
    OpcoesPage,
    TabsControllerPage,
    NovoClientePage,
    BuscarClientesPage,
    NovaTarefaPage,
    CalendarioPage,
    CertificadosPage,
    NovoCertificadoPage,
    ListaCertificadosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
