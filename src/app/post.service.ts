import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  allPosts = [
    {
      title: "Mon premier post",
      content: "hover styles here not present in the previous example. Also supported is the .active state; apply it to indicate an active selection on a contextual list group item",
      loveIts: 1,
      created_at: new Date()
    },
    {
      title: "Mon dexieme post",
      content: "hover styles here not present in the previous example. Also supported is the .active state; apply it to indicate an active selection on a contextual list group item",
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: "Encore un post",
      content: "hover styles here not present in the previous example. Also supported is the .active state; apply it to indicate an active selection on a contextual list group item",
      loveIts: 0,
      created_at: new Date()
    }
  ];

  constructor() { }

  addPost(post: Post) {
    this.allPosts.push(post)
  }

  deletePost(index) {
    this.allPosts.splice(index, 1);
  }
}
