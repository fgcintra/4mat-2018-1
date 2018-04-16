import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProdutoListComponent } from './produto/produto-list/produto-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ProdutoListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
