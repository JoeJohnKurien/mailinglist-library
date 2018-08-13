import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoFormMlComponent } from './two-form-ml.component';

describe('TwoFormMlComponent', () => {
  let component: TwoFormMlComponent;
  let fixture: ComponentFixture<TwoFormMlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoFormMlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoFormMlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
