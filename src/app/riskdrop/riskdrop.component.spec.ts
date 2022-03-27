import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskdropComponent } from './riskdrop.component';

describe('RiskdropComponent', () => {
  let component: RiskdropComponent;
  let fixture: ComponentFixture<RiskdropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskdropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
