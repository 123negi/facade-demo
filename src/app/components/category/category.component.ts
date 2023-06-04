import { Component, DebugElement } from '@angular/core';
import { Category } from 'src/app/category.model';
import { CategoryFacade } from 'src/app/store/category.facade';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories:any;
  updatedProducts:any
  products:any;
  constructor(public categoryFacade: CategoryFacade) {}

  ngOnInit() { 
    this.categoryFacade.loadCategories();
    debugger
    this.categoryFacade.loadCategoriesProduct();
   this.category();
   this.product();
  }
 

  category(){
    this.categoryFacade.categories.subscribe((categories) => {
      if(categories.products.length>0){
         this.categories =categories.products.map((v: any) => ({...v, isActive: true}))
       }  
     });
   
  }
  product(){
    this.categoryFacade.product$.subscribe((data) => {
      debugger
       console.log( data.product.products,"categoriescategoriescategories")
       this.products =  data.product.products
     });
  }
 

  toggleAccordion(index: number) {    
    this.categories[index].active = !this.categories[index].active;
  }

  getFilteredProducts(categoryId: number) {
    return this.products.filter((product:any) => product.id === categoryId);
  }
}
