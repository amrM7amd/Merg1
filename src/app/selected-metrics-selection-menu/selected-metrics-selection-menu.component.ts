import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'selected-metrics-selection-menu',
  templateUrl: './selected-metrics-selection-menu.component.html',
  styleUrls: ['./selected-metrics-selection-menu.component.css']
})
export class SelectedMetricsSelectionMenuComponent implements OnInit {

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  private items;
  
  selectionExpanded: boolean;

  constructor() { 
    this.selectionExpanded = false;
    this.items = [
      {id: 1, name: 'Option 1', iconName: 'dialpad'},
      {id: 2, name: 'Option 2', iconName: 'dialpad'},
      {id: 3, name: 'Option 3', iconName: 'dialpad'}
    ];
  }

  ngOnInit() {
    this.trigger.onMenuOpen.subscribe(() => {
      this.selectionExpanded = !this.selectionExpanded;  
    });

    this.trigger.onMenuClose.subscribe(() => {
      this.selectionExpanded = !this.selectionExpanded;
    });
  }

  onItemClicked(item) {
    console.log('item clicked');
  }

}
