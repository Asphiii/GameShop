import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BasketComponent } from './pages/basket/basket.component';
import { InformationComponent } from './pages/information/information.component';
import { LatestNewsComponent } from './pages/latest-news/latest-news.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';

import { BlocksModule } from './blocks/blocks.module';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { RouterModule, Routes } from '@angular/router';
import { DataHandlerService } from './services/data-handler.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full'
  },
  {
    path: 'news',
    component: LatestNewsComponent
  },
  {
    path: 'products-list',
    component: ProductsListComponent
  },
  {
    path: 'basket',
    component: BasketComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: '404',
    component: InformationComponent,
    data: {
      title: 'Podana strona nie istnieje',
      subtitle: 'Sprawdź raz jeszcze czy wprowadzony link jest prawidłowy. W razie problemów prosimy o kontakt z administracją'
    }
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BlocksModule,
    ComponentsModule,
    PagesModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
