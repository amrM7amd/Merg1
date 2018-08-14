import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  deleteMetric: {id: number, name: string};
  setMetric: {id: number, name: string};

  constructor(private router: Router) { 
    this.deleteMetric = null;
    this.setMetric = null; 
  }

  ngOnInit() {  
    this.router.navigate(['filter-conditions']);
  }

  onDropped(metric: {id: number, name: string}) {
    this.deleteMetric = metric;
  }

  onDeleted(metric: {id: number, name: string}) {
    this.setMetric = metric;
  }

  onTabClicked(tabEvent: MatTabChangeEvent) {
    switch(tabEvent.tab.textLabel) {
      case 'Selected metrics': this.router.navigate(['selected-metrics']);
      case 'Filter conditions': this.router.navigate(['filter-conditions']);
    }
  }

}
