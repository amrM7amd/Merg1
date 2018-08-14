import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {

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
