import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryFacade } from './store/category.facade';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/category.state';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { CategoryEffects } from './store/category.effects';
import { ProductReducer, categoryReducer } from './store/category.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      category: categoryReducer,
      product: ProductReducer
    }),
   EffectsModule.forRoot([CategoryEffects])
  ],
  providers: [CategoryFacade],
  bootstrap: [AppComponent]
})
export class AppModule { }
