import { Component, Input } from '@angular/core';

@Component({
  selector: 'aum-product-slider',
  standalone: true,
  imports: [],
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.scss',
})
export class ProductSliderComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
}
