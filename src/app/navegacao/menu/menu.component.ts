import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  //nav: Nav[];

  nav: Nav[] = [{
    link: '/home',
    name: 'Home',
    exact: true,
    admin: false
  },
  {
    link: '/cadastro',
    name: 'cadastro',
    exact: true,
    admin: false
  },
  {
    link: '/sobre',
    name: 'sobre',
    exact: true,
    admin: false
  }
  // ,{
  //   link: '/produtos',
  //   name: 'protudos',
  //   exact: true,
  //   admin: false
  // },{
  //   link: '/aluno',
  //   name: 'aluno',
  //   exact: true,
  //   admin: false
  // },{
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