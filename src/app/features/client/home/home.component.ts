import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselComponent } from 'src/app/shared/common/carousel/carousel.component';

@Component({
  selector: 'aum-home',
  standalone: true,
  imports: [CommonModule, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
