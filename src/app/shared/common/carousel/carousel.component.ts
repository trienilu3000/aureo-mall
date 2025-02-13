import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'aum-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  @ViewChild('carouselContainer', { static: false })
  carouselContainer!: ElementRef;
  @ViewChild('carouselList', { static: false })
  carouselList!: ElementRef;

  currentIndex = 0;
  totalItems = 0;
  carouselContainerWidth = 0;

  ngAfterViewInit() {
    this.calculateItemWidth();
    window.addEventListener('resize', () => this.calculateItemWidth());
  }

  calculateItemWidth() {
    if (this.carouselContainer) {
      this.totalItems = Math.ceil(
        this.carouselList.nativeElement.childElementCount / 5,
      );
      this.carouselContainerWidth =
        this.carouselContainer.nativeElement.clientWidth + 14.9;
    }
  }

  next() {
    if (this.currentIndex + 1 < this.totalItems) {
      this.currentIndex += 1;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
    }
  }

  get translateValue() {
    return `translateX(-${this.currentIndex * this.carouselContainerWidth}px)`;
  }
}
