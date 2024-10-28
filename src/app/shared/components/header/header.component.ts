import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { CommonModule } from '@angular/common';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCardModule } from 'ng-zorro-antd/card';
import { MiniHeaderComponent } from '../mini-header/mini-header.component';
import { NzDrawerComponent } from '../../common/nz-drawer/nz-drawer.component';
import { Router, RouterModule } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AuthService } from '../../../core/services/user/auth.service';

@Component({
  selector: 'aum-header',
  standalone: true,
  imports: [
    NzInputModule,
    NzDropDownModule,
    NzIconModule,
    NzDrawerModule,
    CommonModule,
    NzListModule,
    NzCardModule,
    MiniHeaderComponent,
    NzDrawerComponent,
    RouterModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('headerAnimation', [
      state(
        'hidden',
        style({
          top: '0',
          boxShadow: '0 0 25px 0 rgb(0, 0, 0, 0.1)',
          opacity: 1,
        }),
      ),
      state(
        'visible',
        style({
          top: '41px',
          opacity: 1,
        }),
      ),
      transition('hidden <=> visible', [animate('300ms ease-in-out')]),
    ]),
    trigger('miniHeaderAnimation', [
      state(
        'hidden',
        style({
          top: '-44px',
          opacity: 0,
          transform: 'translateY(-100%)',
        }),
      ),
      state(
        'visible',
        style({
          top: '0',
          opacity: 1,
          transform: 'translateY(0)',
        }),
      ),
      transition('hidden <=> visible', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  menus: string[] = ['Product', 'Hot deals', 'Pages', 'Blogs', 'Features'];
  lastScrollTop = 0;
  isLoggedIn: boolean = false;
  ticking = false;
  drawerState = {
    visibleMain: false,
    visibleSub: false,
    isSearch: false,
  };
  headerState = 'visible';
  miniHeaderState = 'visible';
  bodyWidth: number;
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.bodyWidth = window.innerWidth;
    if (this.bodyWidth < 1200) {
      this.miniHeaderState = 'hidden';
      this.headerState = 'hidden';
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const currentScroll = window.scrollY;

    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        this.updateHeader(currentScroll);
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  @HostListener('document:visibilitychange', ['$event'])
  onResize(event) {
    this.bodyWidth = window.innerWidth;
    if (this.bodyWidth < 1200) {
      this.miniHeaderState = 'hidden';
      this.headerState = 'hidden';
    } else {
      this.miniHeaderState = 'visible';
      this.headerState = 'visible';
    }
  }

  updateHeader(currentScroll: number): void {
    if (this.bodyWidth >= 1200) {
      if (currentScroll > 100) {
        this.miniHeaderState = 'hidden';
        this.headerState = 'hidden';
      } else {
        this.miniHeaderState = 'visible';
        this.headerState = 'visible';
      }
    }
  }

  openDrawer(value: string): void {
    if (value === 'main') {
      this.drawerState.visibleMain = true;
    } else if (value === 'search') {
      this.drawerState.isSearch = true;
    } else {
      this.drawerState.visibleSub = true;
    }
  }

  closeDrawer(value: string): void {
    if (value === 'main') {
      this.drawerState.visibleMain = false;
    } else if (value === 'search') {
      this.drawerState.isSearch = false;
    } else {
      this.drawerState.visibleSub = false;
      this.drawerState.visibleMain = true;
    }
  }

  handleUserBtn() {
    const accessKey = localStorage.getItem('accessKey');
    if (accessKey) {
      this.router.navigate(['/account']);
    } else {
      this.router.navigate(['/account/login']);
    }
  }
}
