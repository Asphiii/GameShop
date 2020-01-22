import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { BasketComponent } from './basket/basket.component';
import { InformationComponent } from './information/information.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { BlocksModule } from '../blocks/blocks.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AboutUsComponent, BasketComponent, InformationComponent, LatestNewsComponent, ProductsListComponent],
  imports: [
    CommonModule,
    BlocksModule,
    ReactiveFormsModule
  ],
  exports: [AboutUsComponent, BasketComponent, InformationComponent, LatestNewsComponent, ProductsListComponent],
})
export class PagesModule { }
