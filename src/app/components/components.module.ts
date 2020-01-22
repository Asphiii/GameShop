import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuggestedGamesSectionComponent } from './suggested-games-section/suggested-games-section.component';
import { BlocksModule } from '../blocks/blocks.module';



@NgModule({
  declarations: [SuggestedGamesSectionComponent],
  imports: [
    CommonModule,
    BlocksModule
  ],
  exports: [SuggestedGamesSectionComponent]
})
export class ComponentsModule { }
