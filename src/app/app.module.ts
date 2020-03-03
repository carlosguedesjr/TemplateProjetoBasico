import { AppRountingModule } from './app.routes';
import { ImportacaoComponent } from './demos/reactiveForms/importacao/impotacao.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { PessoaComponent } from './demos/reactiveForms/pessoa/pessoa.component';
import { AlunoComponent } from './demos/reactiveForms/aluno/aluno.component';
import { ListagemAlunoComponent } from './demos/reactiveForms/listagem-aluno/listagem-aluno.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DocumentoEletronicoComponent } from './demos/reactiveForms/documento-eletronico/documento-eletronico.component';
import {WebcamModule} from 'ngx-webcam';
import { CameraComponent } from './demos/reactiveForms/documento-eletronico/camera/camera.component';
import { NgxBarcodeModule } from 'ngx-barcode';
import { NgBrazil } from 'ng-brazil'
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation'
import { NavegacaoModule } from './navegacao/navegacao.module';
import { PainelComponent } from './demos/reactiveForms/painel/painel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlunosComponent } from './demos/reactiveForms/alunos/alunos.component';
import { FinanceiroAlunoComponent } from './demos/reactiveForms/financeiro-aluno/financeiro-aluno.component';
import { ResponsaveisComponent } from './demos/reactiveForms/responsaveis/responsaveis.component';
import { ContasPagarComponent } from './demos/reactiveForms/contas-pagar/contas-pagar.component';
import { FornecedoresComponent } from './demos/reactiveForms/fornecedores/fornecedores.component';
import { FornecedorComponent } from './demos/reactiveForms/fornecedor/fornecedor.component';
import { ContaPagarComponent } from './demos/reactiveForms/conta-pagar/conta-pagar.component';
 

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,
    ImportacaoComponent,
    PessoaComponent,
    AlunoComponent,
    ListagemAlunoComponent,
    SidebarComponent,
    DocumentoEletronicoComponent,
    CameraComponent,
    PainelComponent,
    AlunosComponent,
    FinanceiroAlunoComponent,
    ResponsaveisComponent,
    ContasPagarComponent,
    FornecedoresComponent,
    FornecedorComponent,
    ContaPagarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    WebcamModule,
    TextMaskModule,
    NgBrazil,
    NgxBarcodeModule,
    CustomFormsModule,
    ReactiveFormsModule,
    NavegacaoModule,
    AppRountingModule,
    FontAwesomeModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
