import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Http } from '@angular/common/http';
import { isRightSide } from 'ionic-angular/umd/util/util';

@Component({
  selector: 'page-nova-tarefa',
  templateUrl: 'nova-tarefa.html'
})
export class NovaTarefaPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  name;
  tarefaDesc = '';
  startDate = '';
  endDate = '';
  postTarefa: any;
  http: any;



  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
    //can remove this later
    this.name = "Descriçao da tarefa"

  }

  //testing the values on the console(ok)
  async echoTest() {
    //console.log("Hello world", this.tarefaDesc, this.startDate, this.endDate);
    let tarefa = {
      "descricao": this.tarefaDesc,
      "dataInicio": this.startDate,
      "dataFim": this.endDate,
      "recorrente": false
    };
    console.log("Echotest: ",tarefa);
  }

//need to validate the values before insert them.
public testPost(){
  if(this.startDate < this.endDate){
    console.log(this.tarefaDesc, this.startDate, this.endDate);
  }
  else{
    console.log("big nono ", this.startDate, "é maior que ",this.endDate);
  }
}



public theTest(){
  var url = 'https://j8dykho86h.execute-api.sa-east-1.amazonaws.com/Dev/tarefa';
  let tarefa = {
    "descricao": this.tarefaDesc,
    "dataInicio": this.startDate,
    "dataFim": this.endDate,
    "recorrente": false
  };
  this.postTarefa = this.httpClient.post(url,tarefa);
  this.postTarefa.subscribe(postTarefa => {
    console.log(postTarefa);
  });
}


}







