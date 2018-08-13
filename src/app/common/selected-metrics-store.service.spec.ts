import { TestBed, inject } from '@angular/core/testing';

import { SelectedMetricsStore } from './selected-metrics.store';

describe('SelectedMetricsStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectedMetricsStore]
    });
  });

  it('should be created', inject([SelectedMetricsStore], (service: SelectedMetricsStore) => {
    expect(service).toBeTruthy();
  }));
});
