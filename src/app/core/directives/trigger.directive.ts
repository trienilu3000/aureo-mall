import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[aumTrigger]',
  standalone: true,
})
export class TriggerDirective {
  @Input() triggerType: 'click' | 'hover' | 'focus' = 'click';
  @Output() triggerEvent = new EventEmitter<Event>();

  // Listen for click events
  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    if (this.triggerType === 'click') {
      this.triggerEvent.emit(event);
    }
  }

  // Listen for hover events (mouseover)
  @HostListener('mouseover', ['$event'])
  onHover(event: Event): void {
    if (this.triggerType === 'hover') {
      this.triggerEvent.emit(event);
    }
  }

  // Listen for focus events (mouseover)
  @HostListener('focus', ['$event'])
  focus(event: Event): void {
    if (this.triggerType === 'focus') {
      this.triggerEvent.emit(event);
    }
  }
}
