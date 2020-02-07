import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  posts: Post[];

  constructor(private myService: PostService) {
  }

  ngOnInit() {
    this.posts = this.myService.allPosts;
  }

  onLike (post) {
    this.myService.like(post);
  }

  onUnLike (post) {
    this.myService.unLike(post);
  }

  onDelete(post) {
    this.myService.deletePost(post); 
  }

}
