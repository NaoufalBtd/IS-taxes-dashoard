import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxesWidgetComponent } from './taxes-widget.component';

describe('TaxesWidgetComponent', () => {
  let component: TaxesWidgetComponent;
  let fixture: ComponentFixture<TaxesWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxesWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
