import { Component } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-my-info',
  standalone: true,
  imports: [NzIconModule],
  templateUrl: './my-info.component.html',
  styleUrl: './my-info.component.scss',
})
export class MyInfoComponent {}
