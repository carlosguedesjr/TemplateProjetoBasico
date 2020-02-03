import { ProdutoDetalheComponent } from './componentes/produto-card-detalhe.component';
import { ProdutoRoutingModule } from './produto.route';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// inicio ajuste moeda
import { registerLocaleData } from '@angular/common';
import  localePt from '@angular/common/locales/pt'
import { ProdutoCountComponent } from './componentes/produto-count.component';
registerLocaleData(localePt);
// fim ajuste moeda

@NgModule({
    declarations:[
        ProdutoDashboardComponent,
        ProdutoDetalheComponent,
        ProdutoCountComponent
    ],
    imports:[
        CommonModule,
        ProdutoRoutingModule
    ],
    exports:[]
})
export class ProdutoModule{}