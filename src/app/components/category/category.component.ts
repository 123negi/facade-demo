import { Component } from '@angular/core';
import { Category } from 'src/app/category.model';
import { CategoryFacade } from 'src/app/store/category.facade';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  constructor(public categoryFacade: CategoryFacade) {}

  ngOnInit() {
     
    this.categoryFacade.loadCategories();
    // this.categoryFacade.categories$.subscribe((categories) => {
    //   if(categories){
        
    //     // this.categories = categories["products"];
    //   }
    //   // console.log(this.categories.products,"async s")
    //  });
  }
}
