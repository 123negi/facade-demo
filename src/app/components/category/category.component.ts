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
  constructor(public categoryFacade: CategoryFacade) {}

  ngOnInit() {
     
    this.categoryFacade.loadCategories();
    this.categoryFacade.categories$.subscribe((categories) => {
      if(categories){
        this.categories = categories.products;
      }
      
     });
   
  }


  ngAfterViewInit() {
    const accordions = document.getElementsByClassName('accordion');
    debugger
   for (let i = 0; i < accordions.length; i++) {
     const accordion = accordions[i] as HTMLElement;
     accordion.addEventListener('click', () => {
       accordion.classList.toggle('active');
       const panel = accordion.nextElementSibling as HTMLElement;
       if (panel.style.display === 'block') {
         panel.style.display = 'none';
       } else {
         panel.style.display = 'block';
       }
     });
   }
  }
 

  toggleAccordion(index: number) {
    debugger
    this.categories[index].active = !this.categories[index].active;
  }
}
