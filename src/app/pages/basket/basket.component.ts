import { Component, OnInit } from '@angular/core';
import { ProductListItem } from '../../interfaces/product-list-item';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataHandlerService } from '../../services/data-handler.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  formGroup: FormGroup;
  price = 0;

  productList: Array<ProductListItem> = [
    {
      title: 'Battle for Azeroth',
      gameType: ['MMORPG'],
      price: 149.99,
      image: 'https://images4.alphacoders.com/993/993447.jpg'
    },
    {
      title: 'Overwatch',
      gameType: ['FPS'],
      price: 129.99,
      image: 'https://images.hdqwalls.com/wallpapers/overwatch-2-46.jpg?fbclid=IwAR15-OwUOufRuSCcfkmR6aq9eJP-ZpTs7Y0IoVMUaHQclnpd6urbwiSwxB4'
    },
    {
      title: 'Undertale',
      gameType: ['RPG', 'Retro'],
      price: 59.99,
      image: 'https://hdwallpaperim.com/wp-content/uploads/2017/08/23/469601-Undertale-Toriel-artwork-flowers-picture_frames-books-748x455.jpg'
    },
    {
      title: 'Ori and the Blind Forest',
      gameType: ['Przygodowa'],
      price: 89.99,
      image: 'https://ocdn.eu/pulscms-transforms/1/ALik9kqTURBXy8xMDdkYmNjZmQyNzQ4NzUwNjY0NThmNTFmMmM4MTFmMy5qcGVnkpUDAADNAoDNAWiTBc0DFM0BvIGhMAE'
    }
  ];

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit() {
    this.getProducts();

    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  get name() {
    return this.formGroup.get('name');
  }

  get street() {
    return this.formGroup.get('street');
  }

  get city() {
    return this.formGroup.get('city');
  }

  get email() {
    return this.formGroup.get('email');
  }

  submit() {
    // TODO - ogarnąć dlaczego nie ma markAllAsTouched
    this.name.markAsTouched();
    this.street.markAsTouched();
    this.city.markAsTouched();
    this.email.markAsTouched();

    if (this.formGroup.valid) {
      console.log({
        ...this.formGroup.value,
        games: this.productList
      });
    }
  }

  getProducts() {
    this.productList = this.dataHandler.getBasket();
    this.calcPrice();
  }

  deleteElement(game: ProductListItem) {
    const index = this.productList.findIndex(x => x.title === game.title);
    if (index >= 0) {
      this.dataHandler.deleteProduct(this.productList[index]);
      this.getProducts();
    }
  }

  calcPrice() {
    this.price = 0;
    for (const product of this.productList) {
      this.price += product.price;
    }
  }

}
