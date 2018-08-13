import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {

  @ViewChild('drawer') private drawer;
  showFiller = false;

  constructor() { }

  ngOnInit() {
  }

  viewSideNav(metric){
    console.log(metric);
    this.drawer.toggle();
  }


}
