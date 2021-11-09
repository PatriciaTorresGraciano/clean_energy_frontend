import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { EntrarComponent } from './entrar/entrar.component';

import { RodapeComponent } from './rodape/rodape.component';

import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { SobreComponent } from './sobre/sobre.component';

import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    EntrarComponent,
    RodapeComponent,


    CadastrarComponent,
    SobreComponent,

    MenuComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
