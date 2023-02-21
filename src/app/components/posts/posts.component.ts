import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/Post/post.service';
import { Post } from './models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPost().subscribe((posts) => {
      this.posts = posts;
    });
  }

  deletePost(beDelPost: Post) {
    this.posts = this.posts.filter((p) => p.id !== beDelPost.id);
    this.postService.deletePost(beDelPost).subscribe();
  }
}
