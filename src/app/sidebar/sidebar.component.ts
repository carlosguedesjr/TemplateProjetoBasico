import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
abrir : boolean;
  constructor() { }

  ngOnInit() {
    this.abrir = true;
  }

  openNav() {
    this.abrir = false;
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  closeNav() {
    this.abrir = true;
    document.getElementById("mySidebar").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
  }

  nav: Nav[] = [{
    link: '/home',
    name: 'Home',
    exact: true,
    admin: false
  },
  {
    link: '/cadastro',
    name: 'Cadastro',
    exact: true,
    admin: false
  },
  {
    link: '/sobre',
    name: 'Sobre',
    exact: true,
    admin: false
  },{
    link: '/produtos',
    name: 'Produdos',
    exact: true,
    admin: false
  },{
    link: '/alunos',
    name: 'Alunos',
    exact: true,
    admin: false
  },{
    link: '/responsaveis',
    name: 'Responsáveis',
    exact: true,
    admin: false
  }
  ,{
    link: '/contasapagar',
    name: 'a Pagar',
    exact: true,
    admin: false
  }
  ,{
    link: '/contasareceber',
    name: 'a Receber',
    exact: true,
    admin: false
  },{
    link: '/fornecedores',
    name: 'Fornecedores',
    exact: true,
    admin: false
  },{
    link: '/painel',
    name: 'Dashboard',
    exact: true,
    admin: false
  },{
    link: '/oficinas',
    name: 'Oficinas',
    exact: true,
    admin: false
  }
  
  // ,{
  //   link: '/importacao',
  //   name: 'importacao',
  //   exact: true,
  //   admin: false
  // },{
  //   link: '/documentoeletronico',
  //   name: 'documentoeletronico',
  //   exact: true,
  //   admin: false
  // }
]
}

interface Nav {
  link: string,
  name: string,
  exact: boolean,
  admin: boolean

}
