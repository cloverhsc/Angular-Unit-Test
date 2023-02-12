import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/app/components/posts/models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {}

  getPost() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  deletePost(post: Post) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`);
  }
}
