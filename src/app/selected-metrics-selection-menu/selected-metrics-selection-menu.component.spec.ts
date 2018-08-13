import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedMetricsSelectionMenuComponent } from './selected-metrics-selection-menu.component';

describe('SelectedMetricsSelectionMenuComponent', () => {
  let component: SelectedMetricsSelectionMenuComponent;
  let fixture: ComponentFixture<SelectedMetricsSelectionMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedMetricsSelectionMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedMetricsSelectionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
