import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpsTableComponent } from './emps-table.component';

describe('EmpsTableComponent', () => {
  let component: EmpsTableComponent;
  let fixture: ComponentFixture<EmpsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
