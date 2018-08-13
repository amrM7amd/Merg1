import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { elevate } from './selected-metrics.animations';
import { SelectedMetricsStore } from '../common/selected-metrics.store';


@Component({
  selector: 'app-selected-metrics',
  templateUrl: './selected-metrics.component.html',
  styleUrls: ['./selected-metrics.component.css'],
  animations: [elevate]
})
export class SelectedMetricsComponent implements OnInit {

  @Output() metricClicked: EventEmitter<any>;
  metrics: any[];
  hoveredId: number;

  constructor(private store: SelectedMetricsStore) {
    this.hoveredId = -1;
    this.metrics = store.selectedMetrics;
    this.metricClicked = new EventEmitter();
  }

  ngOnInit() {
  }

  onHover(id: number) {
    this.hoveredId = id;
  }

  onLeave() {
    this.hoveredId = -1;
  }

  allowDrop($event) {
    $event.preventDefault();
  }

  drop($event) {
    $event.preventDefault();
    let metric = JSON.parse($event.dataTransfer.getData('metric'));
    this.store.selectMetric(metric);
  }

  removeMetric(metric) {
    this.store.unselectMetric(metric);
  }

  removeAll() {
    this.store.removeAllMetrics();
  }

  openSideBar(metric) {
    this.metricClicked.emit(metric);    
  }
  
}
