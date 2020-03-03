import { ProdutoDetalheComponent } from './../componentes/produto-card-detalhe.component';
import { ProdutoCountComponent } from './../componentes/produto-count.component';
import { Observable, fromEvent } from 'rxjs';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { Produto } from './models/produto';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styles: []
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {
  produtos: Produto[]

  @ViewChild('teste', { static: false }) mensagemTela: ElementRef;
  @ViewChild(ProdutoCountComponent, { static: false }) contador: ProdutoCountComponent;

  @ViewChildren(ProdutoDetalheComponent) botoes: QueryList<ProdutoDetalheComponent>;

  constructor() { }

  ngOnInit() {
    this.produtos = [{
      id: 1,
      nome: 'Teste',
      ativo: true,
      valor: 100,
      imagem: 'celular.jpg'
    },
    {
      id: 2,
      nome: 'Teste 2',
      ativo: true,
      valor: 200,
      imagem: 'gopro.jpg'
    },
    {
      id: 3,
      nome: 'Teste 3',
      ativo: true,
      valor: 300,
      imagem: 'laptop.jpg'
    },
    {
      id: 4,
      nome: 'Teste 4',
      ativo: true,
      valor: 400,
      imagem: 'mouse.jpg'
    },
    {
      id: 5,
      nome: 'Teste 5',
      ativo: true,
      valor: 500,
      imagem: 'teclado.jpg'
    },
    {
      id: 6,
      nome: 'Teste 6',
      ativo: false,
      valor: 600,
      imagem: 'headset.jpg'
    }];
  }

  ngAfterViewInit(): void {
    console.log('objto do contador: ', this.contador.produtos);
    
    let clickText: Observable<any> = fromEvent(this.mensagemTela.nativeElement, 'click');
    clickText.subscribe(() => {
      alert('clicou no texto!');
      return;
    });

    console.log(this.botoes);
    this.botoes.forEach(element => {
      console.log(element.produto);
    });

  }

  mudarStatus(event: Produto) {
    event.ativo = !event.ativo;
  }
}
