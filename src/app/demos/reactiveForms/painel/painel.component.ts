import { Component, OnInit } from '@angular/core';
import { faDonate } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})


export class PainelComponent implements OnInit {
  faDonate=faDonate;
  indicadores: any;
  constructor() { }

  ngOnInit() {
    this.indicadores = [{
      "type": "Contas a Receber",
      "color": "green",
      "valor": "R$ 55.420,64"
    },
    {
      "type": "Contas a Pagar",
      "color": "yellow",
      "valor": "R$ 38.153,67"
    },
    {
      "type": "Mensalidade atradas",
      "color": "orange",
      "qtd": "9",
      "valor": "R$ 5.985,00"
    },
    {
      "type": "Pendências de Documentos",
      "color": "blue",
      "qtd": "9",
      
    }];
  }  
}
