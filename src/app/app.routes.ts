import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { DocumentoEletronicoComponent } from './demos/reactiveForms/documento-eletronico/documento-eletronico.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { ImportacaoComponent } from './demos/reactiveForms/importacao/impotacao.component';
import { NgModule } from '@angular/core';

const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'importacao', component: ImportacaoComponent },
    { path: 'documentoeletronico', component: DocumentoEletronicoComponent },
    { path: 'produtos', 
            loadChildren: () => import('./demos/arquitetura-componentes/produto.module')
            .then(m => m.ProdutoModule)},

            {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(rootRouterConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRountingModule { }