import { Component, OnInit, Input } from '@angular/core';
import { SelectedMetricsStore } from '../common/selected-metrics.store';

@Component({
  selector: 'app-metrices',
  templateUrl: './metrices.component.html',
  styleUrls: ['./metrices.component.css']
})
export class MetricesComponent implements OnInit {

  metrics: any[];

  constructor(private store: SelectedMetricsStore) {
    this.metrics = store.metrics;
  }

  ngOnInit() {
  }

  drag($event, metric) {
    $event.dataTransfer.setData('metric', JSON.stringify(metric));
  }

}
