import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmgMailingListComponent } from './wmg-mailing-list.component';

describe('WmgMailingListComponent', () => {
  let component: WmgMailingListComponent;
  let fixture: ComponentFixture<WmgMailingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmgMailingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmgMailingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
