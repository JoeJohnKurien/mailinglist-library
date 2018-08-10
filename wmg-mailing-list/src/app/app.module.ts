import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WmgMailingListModule} from 'wmg-mailing-list';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, WmgMailingListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
