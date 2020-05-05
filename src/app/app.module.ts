import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilterPipe } from './shared/filter.pipe';
import { FbCreditComponent } from './fb-credit/fb-credit.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    FbCreditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
