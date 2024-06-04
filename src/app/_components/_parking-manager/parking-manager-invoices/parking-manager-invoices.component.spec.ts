import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingManagerInvoicesComponent } from './parking-manager-invoices.component';

describe('ParkingManagerInvoicesComponent', () => {
  let component: ParkingManagerInvoicesComponent;
  let fixture: ComponentFixture<ParkingManagerInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParkingManagerInvoicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParkingManagerInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
