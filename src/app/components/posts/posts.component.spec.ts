import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PostService } from 'src/app/services/Post/post.service';
import { Post } from './models/Post'
import { PostsComponent } from './posts.component';

// Create a mock PostService
class MockPostService {
  getPost() {}
  deletePost(post: Post) {
    return of(true);
  }
}

describe('Posts Component', () => {
  let POSTS: Post[];
  let component: PostsComponent;
  let postService: any;
  beforeEach(() => {
    POSTS = [
      {
        id: 1,
        body: 'body 1',
        title: 'title 1',
      },
      {
        id: 2,
        body: 'body 2',
        title: 'title 2',
      },
      {
        id: 3,
        body: 'body 3',
        title: 'title 3',
      }
    ];

    // Removed due to use Class ofMockPostService
    // mockPostService = jasmine.createSpyObj(['getPost', 'deletePost']);

    TestBed.configureTestingModule({
      providers: [
        PostsComponent,
        { provide: PostService, useClass: MockPostService }
      ]
    })

    // Obtain PostsComponent
    component = TestBed.inject(PostsComponent);

    // Obtain PostService
    postService = TestBed.inject(PostService);
  })

  describe('delete', () => {
    beforeEach(() => {

      component.posts = POSTS;
    });
    it('should delete the selected Post from the posts', () => {
      // Call the deletePost method to delete POSTS[1]
      component.deletePost(POSTS[1]);
      expect(component.posts.length).toBe(2);
    });

    it('Should call the deletePost method in Post Service only once', () => {
      spyOn(postService, 'deletePost').and.callThrough();

      // Call the deletePost method to delete POSTS[1]
      component.deletePost(POSTS[1]);
      expect(postService.deletePost).toHaveBeenCalledTimes(1);
    });

    it('Should delete the actual selected Post in Posts', () => {

      // Call the deletePost method to delete POSTS[1]
      component.deletePost(POSTS[1]);
      // Check if the POSTS[1] is deleted
      expect(component.posts).not.toContain(POSTS[1]);

    })
  });
})
