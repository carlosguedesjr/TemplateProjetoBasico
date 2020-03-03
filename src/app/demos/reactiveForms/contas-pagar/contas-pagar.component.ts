import { Component, OnInit } from '@angular/core';
import { faCoffee, faEdit } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-contas-pagar',
  templateUrl: './contas-pagar.component.html',
  styles: []
})
export class ContasPagarComponent implements OnInit {
  faCoffee =faCoffee;
  faEdit= faEdit;
  constructor() { }

  ngOnInit() {
  }

  editarConta(){

  }
}
