import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpOptionsMenuComponent } from './emp-options-menu.component';

describe('EmpOptionsMenuComponent', () => {
  let component: EmpOptionsMenuComponent;
  let fixture: ComponentFixture<EmpOptionsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpOptionsMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpOptionsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
