import { Injectable } from '@angular/core';
import { ProductListItem } from '../interfaces/product-list-item';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() { }

  updateBasket(productList: Array<ProductListItem>) {
    sessionStorage.setItem('productList', JSON.stringify(productList));
  }

  addGameToBasket(game: ProductListItem) {
    const basket = sessionStorage.getItem('productList');
    if (basket) {
      const productList: Array<ProductListItem> = JSON.parse(basket);
      productList.push(game);
      this.updateBasket(productList);
      return true;
    } else {
      this.updateBasket([game]);
      return true;
    }
  }

  getBasket() {
    const basket = sessionStorage.getItem('productList');
    if (basket) {
      return JSON.parse(basket);
    } else {
      return [];
    }
  }

  deleteProduct(product: ProductListItem) {
    const basket = sessionStorage.getItem('productList');
    if (basket) {
      const productList: Array<ProductListItem> = JSON.parse(basket);
      const index = productList.findIndex(x => x.title === product.title);
      if (index >= 0) {
        productList.splice(index, 1);
        this.updateBasket(productList);
        return true;
      }
      return false;
    }
  }
}
