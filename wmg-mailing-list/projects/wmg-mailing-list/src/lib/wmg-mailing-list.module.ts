import { NgModule } from '@angular/core';
import { WmgMailingListComponent } from './wmg-mailing-list.component';
import { MailingListComponent } from './mailing-list/mailing-list.component';

@NgModule({
  imports: [
  ],
  declarations: [WmgMailingListComponent, MailingListComponent],
  exports: [WmgMailingListComponent]
})
export class WmgMailingListModule { }
