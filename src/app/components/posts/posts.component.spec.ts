import { of } from 'rxjs';
import { Post } from './models/Post'
import { PostsComponent } from './posts.component';

describe('Posts Component', () => {
  let POSTS: Post[];
  let component: PostsComponent;
  let mockPostService: any;
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

    mockPostService = jasmine.createSpyObj(['getPost', 'deletePost']);

    // Create the PostsComponent
    component = new PostsComponent(mockPostService);
  })

  describe('delete', () => {
    beforeEach(() => {
      // implement the deletePost method in the mockPostService
      mockPostService.deletePost.and.returnValue(of(true));
      component.posts = POSTS;
    });
    it('should delete the selected Post from the posts', () => {
      // Call the deletePost method to delete POSTS[1]
      component.deletePost(POSTS[1]);
      expect(component.posts.length).toBe(2);
    });

    it('Should call the deletePost method in Post Service only once', () => {
      // Call the deletePost method to delete POSTS[1]
      component.deletePost(POSTS[1]);
      expect(mockPostService.deletePost).toHaveBeenCalledTimes(1);
    });

    it('Should delete the acutal selected Post in Posts', () => {
      // Call the deletePost method to delete POSTS[1]
      component.deletePost(POSTS[1]);
      // Check if the POSTS[1] is deleted
      expect(component.posts).not.toContain(POSTS[1]);

    })
  });
})
