import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { TriggerDirective } from 'src/app/core/directives/trigger.directive';

@Component({
  selector: 'aum-dropdown',
  standalone: true,
  imports: [TriggerDirective, CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  @Input() dropdownItems: any[] = ['Item 1', 'Item 2', 'Item 3'];
  @Input() selected: any;
  @Input() trigger: 'click' | 'hover' | 'focus' = 'click';
  @Input() label: string = 'Dropdown';
  @Input() hasTrigger: boolean = false;

  @HostListener('mouseleave', ['$event'])
  handleTrigger(event: Event): void {
    if (event.type === 'mouseleave') {
      this.hasTrigger = false;
    } else {
      this.hasTrigger = true;
    }
  }
  onSelect(item: any): void {
    this.selected = item;
  }
}
