import { CategoriesListService } from './../services/categories-list.service';
import { Component, OnInit } from '@angular/core';
import { SelectedMetricsStore } from '../common/selected-metrics.store';

@Component({
  selector: 'categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  // ADD THEM AFTER OnInit
  
  Is_category_Expand=[false];
  categoriesSize:number;
  MatricesSize:number;
  Num_of_Found:number;

  Array_categories=(this.store.metrics.MetricsBycategory.category)

    constructor(private service: CategoriesListService,
      private store: SelectedMetricsStore) { }

   ngOnInit() {

    // this.service.getAll()
    // .subscribe(Json_categories => this.Json_categories = Json_categories
    // );
    this.get_size();
    this.intalize();
          }

  intalize()
  {
    this.Num_of_Found=0;

    // at the beginning there is no search all panel are collapsed
    let  categories_size= this.store.metrics.MetricsBycategory.category.length
     for (let i = 0; i < categories_size; i++) {
       this.Is_category_Expand[i]=false;
      }
  }
  get_size()
  {
    let  categories_size= this.store.metrics.MetricsBycategory.category.length
   this.categoriesSize=categories_size
    let sum=0;
   for(let i =0;i<categories_size;i++)
    {
       sum+= this.store.metrics.MetricsBycategory.category[i].metric.length;
    }
    this.MatricesSize=sum;
}
 
  filter_matrices(word : string)
  {
   // console.log(word)

    if(word.length<1)
    {
      this.intalize();
      return;
    }
    let  categories_size= this.categoriesSize
    this.Num_of_Found=0;
    for(let i =0;i<categories_size;i++)
    {
      let matrics_size= this.store.metrics.MetricsBycategory.category[i].metric.length;
      let matrics=this.store.metrics.MetricsBycategory.category[i].metric;
      let found=false;
          for(let j=0;j<matrics_size;j++)
          {
                if(matrics[j].name.search(word)!=-1)
              {
          //      console.log(true);
                this.Is_category_Expand[i]=true;
                this.Num_of_Found++;
                found=true;
         //   break; shouldn't break as i need how many matic found
              }  
                
          }
          if(!found)
          {
          //  console.log(false);
            this.Is_category_Expand[i]=false;

          }
    }
    // this.Is_category_Expand;
  }
  
  drag($event, metric) {
    console.log(metric);
    $event.dataTransfer.setData('metric', JSON.stringify(metric));
  }

}
