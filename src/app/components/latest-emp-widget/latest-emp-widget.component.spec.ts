import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestEmpWidgetComponent } from './latest-emp-widget.component';

describe('LatestEmpWidgetComponent', () => {
  let component: LatestEmpWidgetComponent;
  let fixture: ComponentFixture<LatestEmpWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestEmpWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestEmpWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
