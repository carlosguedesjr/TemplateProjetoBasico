import { ImportacaoComponent } from './demos/reactiveForms/importacao/impotacao.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { rootRouterConfig } from './app.routes';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { DocumentoEletronicoComponent } from './demos/reactiveForms/documento-eletronico/documento-eletronico.component';
import {WebcamModule} from 'ngx-webcam';
import { CameraComponent } from './demos/reactiveForms/documento-eletronico/camera/camera.component';
import { NgxBarcodeModule } from 'ngx-barcode';
 

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
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
    NgxBarcodeModule,
    ReactiveFormsModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false})]
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
