import { Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { ImportacaoComponent } from './demos/reactiveForms/importacao/impotacao.component';
import { PessoaComponent } from './demos/reactiveForms/pessoa/pessoa.component';
import { AlunoComponent } from './demos/reactiveForms/aluno/aluno.component';
import { ListagemAlunoComponent } from './demos/reactiveForms/listagem-aluno/listagem-aluno.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'sobre', component: SobreComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'importacao', component: ImportacaoComponent },
    { path: 'pessoa', component: PessoaComponent },
    { path: 'aluno', component: AlunoComponent },
    { path: 'listagem', component: ListagemAlunoComponent }
];