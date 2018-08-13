import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneFormMlComponent } from './one-form-ml.component';

describe('OneFormMlComponent', () => {
  let component: OneFormMlComponent;
  let fixture: ComponentFixture<OneFormMlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneFormMlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneFormMlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
