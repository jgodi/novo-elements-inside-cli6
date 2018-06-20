import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NovoElementsModule, NovoElementProviders } from 'novo-elements';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NovoElementsModule, NovoElementProviders.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
