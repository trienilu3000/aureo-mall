import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from 'src/app/shared/common/product-card/product-card.component';
import { CarouselComponent } from '../../../shared/common/carousel/carousel.component';

@Component({
  selector: 'aum-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
