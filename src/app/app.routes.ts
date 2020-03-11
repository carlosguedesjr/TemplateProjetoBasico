import { OficinasComponent } from './demos/reactiveForms/oficinas/oficinas.component';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { DocumentoEletronicoComponent } from './demos/reactiveForms/documento-eletronico/documento-eletronico.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { ImportacaoComponent } from './demos/reactiveForms/importacao/impotacao.component';
import { PessoaComponent } from './demos/reactiveForms/pessoa/pessoa.component';
import { AlunoComponent } from './demos/reactiveForms/aluno/aluno.component';
import { ListagemAlunoComponent } from './demos/reactiveForms/listagem-aluno/listagem-aluno.component';
import { NgModule } from '@angular/core';
import { PainelComponent } from './demos/reactiveForms/painel/painel.component';
import { AlunosComponent } from './demos/reactiveForms/alunos/alunos.component';
import { FinanceiroAlunoComponent } from './demos/reactiveForms/financeiro-aluno/financeiro-aluno.component';
import { ResponsaveisComponent } from './demos/reactiveForms/responsaveis/responsaveis.component';
import { ContasPagarComponent } from './demos/reactiveForms/contas-pagar/contas-pagar.component';
import { FornecedoresComponent } from './demos/reactiveForms/fornecedores/fornecedores.component';
import { FornecedorComponent } from './demos/reactiveForms/fornecedor/fornecedor.component';
import { ContaPagarComponent } from './demos/reactiveForms/conta-pagar/conta-pagar.component';
import { OficinaComponent } from './demos/reactiveForms/oficina/oficina.component';

const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'importacao', component: ImportacaoComponent },
    { path: 'pessoa', component: PessoaComponent },
    { path: 'aluno', component: AlunoComponent },
    { path: 'alunos', component: AlunosComponent },
    { path: 'listagem', component: ListagemAlunoComponent },
    { path: 'painel', component: PainelComponent },
    { path: 'documentoeletronico', component: DocumentoEletronicoComponent },
    { path: 'financeiroAluno', component: FinanceiroAlunoComponent},
    { path: 'responsaveis', component: ResponsaveisComponent},
    { path: 'fornecedores', component: FornecedoresComponent},
    { path: 'fornecedor', component: FornecedorComponent},
    { path: 'contasapagar', component: ContasPagarComponent},
    { path: 'contaapagar', component: ContaPagarComponent},
    { path: 'oficinas', component: OficinasComponent},
    { path: 'oficina', component: OficinaComponent},
    { path: 'produtos',
        loadChildren: () => import('./demos/arquitetura-componentes/produto.module')
            .then(m => m.ProdutoModule)
    },
    { path: '**', component: NotFoundComponent }
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
