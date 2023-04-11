/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IrChartComponent } from './ir-chart.component';

describe('IrChartComponent', () => {
  let component: IrChartComponent;
  let fixture: ComponentFixture<IrChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
