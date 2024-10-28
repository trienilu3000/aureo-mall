import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzResultModule } from 'ng-zorro-antd/result';

@Component({
  selector: 'aum-forbidden',
  standalone: true,
  imports: [NzResultModule, RouterModule],
  templateUrl: './forbidden.component.html',
  styleUrl: './forbidden.component.scss',
})
export class ForbiddenComponent {}
