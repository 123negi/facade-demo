import { Component } from '@angular/core';
import { Observable, filter, of, tap } from 'rxjs';
import { Category } from 'src/app/category.model';
import { CategoryFacade } from 'src/app/store/category/category.facade';
import { ProductFacade } from 'src/app/store/product/product.facade';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  categoryList$: any;
  uniqueProduct: any;
  constructor(
    private categoryFacade: CategoryFacade,
    private productFacade: ProductFacade
  ) {}

  ngOnInit() {
    this.categoryFacade.loadCategories();
    this.productFacade.loadProduct();
    this.categoryList$ = this.categoryFacade.categories$;
  }

  expandRow(category: any) {
    this.productFacade.products$.subscribe((data: any) => {
      this.uniqueProduct = data.filter((p: any) => p.category == category);
    });
  }
}
