import { Component } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-mini-header',
  standalone: true,
  imports: [NzDropDownModule,NzIconModule],
  templateUrl: './mini-header.component.html',
  styleUrl: './mini-header.component.scss'
})
export class MiniHeaderComponent {
  isOpen: boolean = false;
  currentLanguage: string = 'English';

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  changeLanguage(language: string): void {
    this.currentLanguage = language;
    this.isOpen = !this.isOpen;
  }
}
