import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { delay } from 'rxjs/operators';
import { PostService } from '../../services/post.service';
import { PostModel } from 'src/app/models/api-model/post.model';

@Injectable({
  providedIn: 'root'
})
export class HomeResolver implements Resolve<any> {

  constructor(private postService: PostService) {
  }

  getPosts(): Observable<PostModel[]> {
    return this.postService.getPosts();
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostModel[]> {
    return this.getPosts();
  }
}



