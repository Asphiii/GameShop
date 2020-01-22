import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameBlockComponent } from './game-block/game-block.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { SectionHeaderComponent } from './section-header/section-header.component';



@NgModule({
  declarations: [GameBlockComponent, ProductListItemComponent, SectionHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    GameBlockComponent,
    ProductListItemComponent,
    SectionHeaderComponent
  ]
})
export class BlocksModule { }
