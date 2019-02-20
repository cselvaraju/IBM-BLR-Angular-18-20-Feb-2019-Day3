import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(
      (data) => this.posts = data
    );
  }

  createPost() {
    const post: Post = {
      id: null,
      title: 'New Post',
      body: 'Hey I just created a new blog post!!'
    };
    this.postService.createPost(post).subscribe(
      (data) => this.posts.unshift(data)
    );
  }
}
