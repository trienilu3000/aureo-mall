import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzResultModule } from 'ng-zorro-antd/result';

@Component({
  selector: 'aum-unauthorized',
  standalone: true,
  imports: [NzResultModule, RouterModule],
  templateUrl: './unauthorized.component.html',
  styleUrl: './unauthorized.component.scss',
})
export class UnauthorizedComponent {}
