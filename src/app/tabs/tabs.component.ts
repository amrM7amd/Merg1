import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  deleteMetric: {id: number, name: string};
  setMetric: {id: number, name: string};

  constructor() { 
    this.deleteMetric = null;
    this.setMetric = null; 
  }

  ngOnInit() {
  }

  onDropped(metric: {id: number, name: string}) {
    this.deleteMetric = metric;
  }

  onDeleted(metric: {id: number, name: string}) {
    this.setMetric = metric;
  }

}
