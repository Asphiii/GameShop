import { Component, OnInit } from '@angular/core';
import { ProductListItem } from '../../interfaces/product-list-item';
import { DataHandlerService } from '../../services/data-handler.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  selectedGames: Array<ProductListItem> = [];
  productList: Array<ProductListItem> = [
    {
      title: 'Battle for Azeroth',
      gameType: ['MMORPG'],
      price: 149.99,
      image: 'https://images4.alphacoders.com/993/993447.jpg',
    },
    {
      title: 'Overwatch',
      gameType: ['FPS'],
      price: 129.99,
      image: 'https://images.hdqwalls.com/wallpapers/overwatch-2-46.jpg?fbclid=IwAR15-OwUOufRuSCcfkmR6aq9eJP-ZpTs7Y0IoVMUaHQclnpd6urbwiSwxB4',
    },
    {
      title: 'Undertale',
      gameType: ['RPG', 'Retro'],
      price: 59.99,
      image: 'https://hdwallpaperim.com/wp-content/uploads/2017/08/23/469601-Undertale-Toriel-artwork-flowers-picture_frames-books-748x455.jpg',
    },
    {
      title: 'Ori and the Blind Forest',
      gameType: ['Przygodowa'],
      price: 89.99,
      image: 'https://ocdn.eu/pulscms-transforms/1/ALik9kqTURBXy8xMDdkYmNjZmQyNzQ4NzUwNjY0NThmNTFmMmM4MTFmMy5qcGVnkpUDAADNAoDNAWiTBc0DFM0BvIGhMAE',
    }
  ];

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit() {
    this.selectedGames = this.dataHandler.getBasket();
  }

  addGame(game) {
    this.selectedGames.push(game);
    this.dataHandler.addGameToBasket(game);
  }

  findGameInBasket(game) {
    return this.selectedGames.findIndex(x => x.title === game.title);
  }
}
