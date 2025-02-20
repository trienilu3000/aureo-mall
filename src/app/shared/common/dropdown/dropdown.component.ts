import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, TemplateRef } from '@angular/core';
import { TriggerDirective } from 'src/app/core/directives/trigger.directive';

@Component({
  selector: 'aum-dropdown',
  standalone: true,
  imports: [TriggerDirective, CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  readonly triggerDirective = TriggerDirective;

  @Input() trigger: 'click' | 'hover' | 'focus' = 'click';
  @Input() label: string = 'Select';
  @Input() subLabel: string = '';
  @Input() hasTrigger: boolean = false;

  @HostListener('mouseleave', ['$event'])
  handleTrigger(event: Event): void {
    if (event.type === 'mouseleave') {
      this.hasTrigger = false;
    } else {
      this.hasTrigger = true;
    }
  }
  greet(name: string, age: number) {
    console.log(`Hello ${name}, you are ${age} years old.`);
  }
}
