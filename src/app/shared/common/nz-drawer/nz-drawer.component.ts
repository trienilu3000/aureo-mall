import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { NzDrawerModule, NzDrawerPlacement } from 'ng-zorro-antd/drawer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'aum-nz-drawer',
  standalone: true,
  imports: [CommonModule, NzDrawerModule],
  templateUrl: './nz-drawer.component.html',
  styleUrl: './nz-drawer.component.scss',
})
export class NzDrawerComponent {
  @Input() closable = false;
  @Input() visible = false;
  @Input() placement: NzDrawerPlacement = 'left';
  @Input() width: string;
  @Input() height: string;
  @Input() drawerType!: string;
  @Input() drawerTitle: string | TemplateRef<any> | undefined;
  @Input() drawerId: string | null = null;
  @Output() onClose: EventEmitter<string> = new EventEmitter<string>();

  closeDrawer(): void {
    this.onClose.emit(this.drawerType);
  }
}
