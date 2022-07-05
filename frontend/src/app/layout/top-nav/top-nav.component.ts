import { Component, OnInit } from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  isAdmin = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService, private router: Router,) { }

  ngOnInit(): void {


    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {

          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {

          this.isLoggedIn = !!this.tokenStorageService.getToken();
          if (this.isLoggedIn) {
            const user = this.tokenStorageService.getUser();
            this.username = user.username;
          }

          if (this.isLoggedIn) {
            const user = this.tokenStorageService.getUser();
            this.isAdmin = user.isAdmin;
          }
          break;
        }
        default: {
          break;
        }
      }
    });
  }
  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/login']);
  }
}
