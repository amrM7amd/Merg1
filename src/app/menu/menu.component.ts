import { Component, OnInit, ElementRef } from '@angular/core';
import { SegmentationService } from './segmentation.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  opened: boolean;
  show = false;
  segments: {name: string , data: string}[];
  constructor( private segmentService: SegmentationService  ) {

   }

  toggle() {
    this.show = !this.show;
  }
    ngOnInit() {
 this.segments = this.segmentService.segments;
 }
  }

