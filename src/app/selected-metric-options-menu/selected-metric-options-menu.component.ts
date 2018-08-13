import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'selected-metric-options-menu',
  templateUrl: './selected-metric-options-menu.component.html',
  styleUrls: ['./selected-metric-options-menu.component.css']
})
export class SelectedMetricOptionsMenuComponent implements OnInit {

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  private items;

  constructor() {
    this.items = [
      {id: 1, name: 'Option 1', iconName: 'dialpad'},
      {id: 2, name: 'Option 2', iconName: 'dialpad'},
      {id: 3, name: 'Option 3', iconName: 'dialpad'}
    ];
  }

  ngOnInit() {
  }

}
