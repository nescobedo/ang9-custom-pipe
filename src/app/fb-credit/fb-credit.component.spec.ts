import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbCreditComponent } from './fb-credit.component';

describe('FbCreditComponent', () => {
  let component: FbCreditComponent;
  let fixture: ComponentFixture<FbCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
