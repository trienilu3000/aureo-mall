import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChildren,
  ElementRef,
  QueryList,
  ViewChild,
} from '@angular/core';
import { TabItemComponent } from './tab-item/tab-item.component';

@Component({
  selector: 'aum-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent {
  @ViewChild('tabContainer', { static: false })
  tabContainer!: ElementRef;

  @ViewChild('tabList', { static: false })
  tabList!: ElementRef;

  @ContentChildren(TabItemComponent) tabs!: QueryList<TabItemComponent>;

  currentIndex = 0;
  totalItems = 0;
  tabContainerWidth = 0;
  activeTabIndex = 0;

  ngAfterViewInit() {
    this.calculateItemWidth();
    window.addEventListener('resize', () => this.calculateItemWidth());
    if (this.tabs.length > 0) {
      this.selectTab(0);
    }
  }

  calculateItemWidth() {
    if (this.tabContainer) {
      this.totalItems = Math.ceil(
        this.tabList.nativeElement.childElementCount / 8,
      );
      console.log(
        'this.tablList.nativeElement.childElementCount ==> ',
        this.tabList,
      );
      console.log('this.totalItems ==> ', this.tabContainer);
      this.tabContainerWidth =
        this.tabContainer.nativeElement.clientWidth + 14.9;
      console.log('this.tabContainerWidth ==> ', this.tabContainerWidth);
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

  selectTab(index: number) {
    this.tabs.forEach((tab, i) => (tab.active = i === index));
    this.activeTabIndex = index;
  }

  get translateValue() {
    return `translateX(-${this.currentIndex * this.tabContainerWidth}px)`;
  }
}
