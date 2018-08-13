import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedMetricOptionsMenuComponent } from './selected-metric-options-menu.component';

describe('SelectedMetricOptionsMenuComponent', () => {
  let component: SelectedMetricOptionsMenuComponent;
  let fixture: ComponentFixture<SelectedMetricOptionsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedMetricOptionsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedMetricOptionsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
