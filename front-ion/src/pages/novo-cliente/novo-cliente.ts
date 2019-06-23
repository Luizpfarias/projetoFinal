import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-novo-cliente',
  templateUrl: 'novo-cliente.html'
})
export class NovoClientePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  nome;
  cpf;
  cnpj;
  endereco;
  nomeContato;
  email;
  telefone;
  postCliente: any;


  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
  }
  
  //just to make sure the values are retrieved.
  async echoTest(){
    let cliente = {
      "nome": this.nome,
      "cnpj": this.cnpj,
      "endereco": this.endereco,
      "nomeContato": this.nomeContato,
      "telefone": this.telefone,
      "email": this.email
    };
    console.log(cliente);
  }

  public clienTest(){
    var url = 'https://j8dykho86h.execute-api.sa-east-1.amazonaws.com/Dev/cliente';
    let Cliente = {
      "nome": this.nome,
      "cnpj": this.cnpj,
      "endereco": this.endereco,
      "nomeContato": this.nomeContato,
      "telefone": this.telefone,
      "email": this.email
    };
    this.postCliente = this.httpClient.post(url,Cliente);
    this.postCliente.subscribe(postCliente => {
      console.log(postCliente);
    });
  }

}
