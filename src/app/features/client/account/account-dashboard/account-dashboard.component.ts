import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/core/models/user/auth.models';
import { AuthService } from 'src/app/core/services/user/auth.service';

@Component({
  selector: 'app-account-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './account-dashboard.component.html',
  styleUrl: './account-dashboard.component.scss',
})
export class AccountDashboardComponent implements OnInit {
  userInfo: UserInfo;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.getMyInfo();
  }

  getMyInfo() {
    this.authService.getMyInfo().subscribe({
      next: (res) => {
        this.userInfo = res.data;
      },
    });
  }
}
