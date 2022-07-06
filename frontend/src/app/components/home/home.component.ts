import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string[];

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.content = this.route.snapshot.data['data'];
  }
}
