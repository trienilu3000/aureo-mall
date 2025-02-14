import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'aum-tab-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab-item.component.html',
  styleUrl: './tab-item.component.scss',
})
export class TabItemComponent {
  @Input() label = '';
  active = false;
}
