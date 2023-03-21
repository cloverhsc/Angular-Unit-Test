import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { of } from 'rxjs';
import { PostService } from 'src/app/services/Post/post.service';
import { PostComponent } from '../post/post.component';
import { Post } from './models/Post'
import { PostsComponent } from './posts.component';


describe('Posts Component', () => {
  let POSTS: Post[];
  let component: PostsComponent;
  let mockPostService: any;
  let fixture: ComponentFixture<PostsComponent>;

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

    TestBed.configureTestingModule({
      declarations: [PostsComponent, PostComponent],
      schemas: [NO_ERRORS_SCHEMA], // routerLink is not a known element in the template in the anchor element
      providers: [
        { provide: PostService, useValue: mockPostService } // change to useValue for mockPostService
      ]
    })


    fixture = TestBed.createComponent(PostsComponent);  // create the component
    component = fixture.componentInstance;  // get the instance of the component

  });

  // check to call getPosts method directly from ngOnInit
  it('Should set posts from the service directly', () => {
    mockPostService.getPost.and.returnValue(of(POSTS));
    fixture.detectChanges();
    expect(component.posts.length).toBe(3);
  })

  describe('delete', () => {
    beforeEach(() => {
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

    it('Should delete the actual selected Post in Posts', () => {

      // Call the deletePost method to delete POSTS[1]
      component.deletePost(POSTS[1]);
      // Check if the POSTS[1] is deleted
      expect(component.posts).not.toContain(POSTS[1]);

    })
  });
})
