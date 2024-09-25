import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzResultModule } from 'ng-zorro-antd/result';

@Component({
  selector: 'app-internal-server-error',
  standalone: true,
  imports: [NzResultModule, RouterModule],
  templateUrl: './internal-server-error.component.html',
  styleUrl: './internal-server-error.component.scss',
})
export class InternalServerErrorComponent {}
