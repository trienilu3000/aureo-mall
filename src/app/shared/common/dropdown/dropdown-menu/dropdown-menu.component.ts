import { Component, Input } from '@angular/core';

@Component({
  selector: 'aum-dropdown-menu',
  standalone: true,
  imports: [],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.scss',
})
export class DropdownMenuComponent {
  @Input() label: any;
  @Input() value = '';
  @Input() selected: any;
  onSelect(item: any): void {
    this.selected = item;
  }
}
