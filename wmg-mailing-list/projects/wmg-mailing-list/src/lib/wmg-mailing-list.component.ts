import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-wmg-mailing-list',
  templateUrl: './wmg-mailing-list.component.html',
  styles: []
})
export class WmgMailingListComponent implements OnInit {
  @Input() type: string;
  @Input() nodeID: number;
  @Input() artistName: string;
  @Input() mlistHeader: string;
  @Input() mlistSubHeader: string;
  @Input() Datasource: string;
  @Input() newsletterID: string;
  @Input() secondaryID: string;
  @Input() globalOptin: boolean;
  @Input() autoreply: string;
  @Input() _trigger: string;
  @Input() _ext: string;
  @Input() termsFirst: string;
  @Input() termsSecond: string;
  
  constructor() { }


  ngOnInit() {
    console.log(this.type);
  }

}
