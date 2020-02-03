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
import { DocumentoEletronicoComponent } from './demos/reactiveForms/documento-eletronico/documento-eletronico.component';
import {WebcamModule} from 'ngx-webcam';
import { CameraComponent } from './demos/reactiveForms/documento-eletronico/camera/camera.component';
import { NgxBarcodeModule } from 'ngx-barcode';
import { NgBrazil } from 'ng-brazil'
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation'
import { NavegacaoModule } from './navegacao/navegacao.module';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,
    ImportacaoComponent,
    DocumentoEletronicoComponent,
    CameraComponent
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
    AppRountingModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
