import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzRateModule } from 'ng-zorro-antd/rate';
@Component({
  selector: 'aum-product-card',
  standalone: true,
  imports: [CommonModule, FormsModule, NzRateModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ProductCardComponent {
  @Input() imageUrl: string = '';
  @Input() price: string = '';
}
