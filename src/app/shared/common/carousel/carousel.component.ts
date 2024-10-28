import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { CustomCarouselService } from '../../../core/services/carousel/custom-carousel.service';

@Component({
  selector: 'aum-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  providers: [CustomCarouselService],
})
export class CarouselComponent implements OnInit {
  @Input() numVisible: number;
  @Input() title: string;
  @Input() image: string;

  constructor(
    private customCarouselService: CustomCarouselService,
    private renderer: Renderer2,
    private el: ElementRef,
  ) {}
  ngOnInit(): void {
    this.customCarouselService.title = this.title;
  }
}
