import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-card-options',
  templateUrl: './card-options.component.html',
  styleUrls: ['./card-options.component.css']
})
export class CardOptionsComponent implements OnInit {

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
