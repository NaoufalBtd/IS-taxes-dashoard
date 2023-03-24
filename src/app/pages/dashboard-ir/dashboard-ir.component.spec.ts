import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardIrComponent } from './dashboard-ir.component';

describe('DashboardIrComponent', () => {
  let component: DashboardIrComponent;
  let fixture: ComponentFixture<DashboardIrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardIrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardIrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
