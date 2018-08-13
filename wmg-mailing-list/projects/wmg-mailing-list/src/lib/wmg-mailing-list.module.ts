import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WmgMailingListComponent } from './wmg-mailing-list.component';
import { OneFormMlComponent } from './one-form-ml/one-form-ml.component';
import { TwoFormMlComponent } from './two-form-ml/two-form-ml.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [WmgMailingListComponent, OneFormMlComponent, TwoFormMlComponent],
  exports: [WmgMailingListComponent]
})
export class WmgMailingListModule {
  
 }
