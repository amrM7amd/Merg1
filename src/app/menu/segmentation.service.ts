import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SegmentationService {
segments = [
 {name: 'segment1', data : 'data1' },
 {name: 'segment2', data : 'data2' },
 {name: 'segment3', data : 'data3' },
 {name: 'segment4', data : 'data4' },

];

addSegment(name: string , data: string) {
  this.segments.push({name: name , data: data});
}
constructor() { }

}
