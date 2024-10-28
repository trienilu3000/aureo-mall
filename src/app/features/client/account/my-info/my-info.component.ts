import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AuthService } from 'src/app/core/services/user/auth.service';

@Component({
  selector: 'aum-my-info',
  standalone: true,
  imports: [NzIconModule, RouterOutlet, RouterLink],
  templateUrl: './my-info.component.html',
  styleUrl: './my-info.component.scss',
})
export class MyInfoComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  logout() {
    this.authService.logout().subscribe({
      next: (res) => {
        localStorage.removeItem('accessKey');
        this.router.navigate(['']);
      },
    });
  }
}
