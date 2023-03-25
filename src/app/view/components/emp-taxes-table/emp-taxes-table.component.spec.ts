import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpTaxesTableComponent } from './emp-taxes-table.component';

describe('EmpTaxesTableComponent', () => {
  let component: EmpTaxesTableComponent;
  let fixture: ComponentFixture<EmpTaxesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpTaxesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpTaxesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
