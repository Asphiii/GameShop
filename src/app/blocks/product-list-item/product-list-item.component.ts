import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductListItem } from '../../interfaces/product-list-item';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {
  @Input() game: ProductListItem;
  @Input() showButton = true;
  @Input() buttonText = 'Dodaj do koszyka';
  @Output() clickEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitEvent() {
    this.clickEvent.emit({clicked: true});
  }

}
