import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { delay } from 'rxjs/operators';
import { UserService } from '../../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class HomeResolver implements Resolve<any> {

  constructor(private userService: UserService) {
  }

  getTeams(): Observable<any> {
    return this.userService.getPublicContent();
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string[]> {
    return this.getTeams();
  }
}



