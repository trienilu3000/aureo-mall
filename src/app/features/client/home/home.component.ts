import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from 'src/app/shared/common/product-card/product-card.component';
import { CarouselComponent } from '../../../shared/common/carousel/carousel.component';
import { BannerComponent } from './banner/banner.component';
import { ProductSliderComponent } from './product-slider/product-slider.component';
import { InterestExplorerComponent } from './interest-explorer/interest-explorer.component';
import { TabsComponent } from 'src/app/shared/common/tabs/tabs.component';
import { TabItemComponent } from 'src/app/shared/common/tabs/tab-item/tab-item.component';

@Component({
  selector: 'aum-home',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    CarouselComponent,
    BannerComponent,
    ProductSliderComponent,
    InterestExplorerComponent,
    TabsComponent,
    TabItemComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
