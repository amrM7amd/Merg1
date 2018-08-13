import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedMetricsStore {

  metrics: any;
  selectedMetrics: any[];

  constructor() {
    this.metrics = 
    {
    
    "MetricsBycategory": {
    
    "category": [
    
    {
    
    "id": 1,
    
    "name": "Category #1",
    
    "description": 
    "description of category 1",
    
    "metric": [
    
    {
    
    "id": 1,
    
    "name": "service name",
    
    "description": 
    "get service by names"
    
    },
    
    {
    
    "id": 2,
    
    "name": "metric 2",
    
    "description": 
    "description of metric 2"
    
    },
    
    {
    
    "id": 3,
    
    "name": "metric 3",
    
    "description": 
    "description of metric 3"
    
    }
    
    ]
    
    },
    
    {
    
    "id": 2,
    
    "name": "Category #2",
    
    "description": 
    "description of category 2",
    
    "metric": [
    
    {
    
    "id": 4,
    
    "name": "metric 4",
    
    "description": 
    "description of metric 4"
    
    },
    
    {
    
    "id": 5,
    
    "name": "metric 5",
    
    "description": 
    "description of metric 5"
    
    },
    
    {
    
    "id": 6,
    
    "name": "metric 6",
    
    "description": 
    "description of metric 6"
    
    }
    
    ]
    
    },
    {
    
      "id": 3,
      
      "name": "Category #3",
      
      "description": 
      "description of category 3",
      
      "metric": [
      
      {
      
      "id": 4,
      
      "name": "metric 7",
      
      "description": 
      "description of metric 7"
      
      },
      
      {
      
      "id": 5,
      
      "name": "metric 8",
      
      "description": 
      "description of metric 8"
      
      },
      
      {
      
      "id": 6,
      
      "name": "metric 9",
      
      "description": 
      "description of metric 9"
      
      }
      
      ]
      
      }
    ]
    
    }
    
    }
    this.selectedMetrics = [];
  }

  selectMetric(metric) {
    console.log(metric);
    let ind = this.selectedMetrics.findIndex(elem => {
      return elem.id == metric.id;
    });
    if(ind == -1)
      this.selectedMetrics.push(metric);
  }

  unselectMetric(metric) {
      let ind = this.selectedMetrics.findIndex(elem => {
        return elem.id == metric.id;
      });
      this.selectedMetrics.splice(ind, 1);
  }

  removeAllMetrics() {
    this.selectedMetrics.splice(0, this.selectedMetrics.length);
  }
  
}
