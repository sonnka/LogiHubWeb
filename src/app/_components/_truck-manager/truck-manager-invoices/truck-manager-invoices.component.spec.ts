import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckManagerInvoicesComponent } from './truck-manager-invoices.component';

describe('TruckManagerInvoicesComponent', () => {
  let component: TruckManagerInvoicesComponent;
  let fixture: ComponentFixture<TruckManagerInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TruckManagerInvoicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TruckManagerInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
