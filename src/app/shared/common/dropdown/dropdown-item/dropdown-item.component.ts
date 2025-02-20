import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'aum-dropdown-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown-item.component.html',
  styleUrl: './dropdown-item.component.scss',
})
export class DropdownItemComponent {
  @Input() label: any;
  @Input() value = '';
  @Input() selected: any;

  onSelect(item: any): void {
    this.selected = item;
  }
}
