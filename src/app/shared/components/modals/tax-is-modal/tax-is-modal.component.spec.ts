import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxIsModalComponent } from './tax-is-modal.component';

describe('TaxIsModalComponent', () => {
  let component: TaxIsModalComponent;
  let fixture: ComponentFixture<TaxIsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxIsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxIsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
