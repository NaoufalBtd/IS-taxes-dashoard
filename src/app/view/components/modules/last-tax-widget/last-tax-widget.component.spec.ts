import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastTaxWidgetComponent } from './last-tax-widget.component';

describe('LastTaxWidgetComponent', () => {
  let component: LastTaxWidgetComponent;
  let fixture: ComponentFixture<LastTaxWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastTaxWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastTaxWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
