import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostModel } from 'src/app/models/ui-model/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: PostModel[] = [];

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.posts = this.route.snapshot.data['data'];
    debugger;
  }
}
