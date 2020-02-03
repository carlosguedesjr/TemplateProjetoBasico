import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const produtoRouterConfig: Routes = [
    {path:'', component: ProdutoDashboardComponent }
];
@NgModule({
    imports:[
        RouterModule.forChild(produtoRouterConfig)
    ],
    exports:[
        RouterModule
    ]
})
export class ProdutoRoutingModule{ }