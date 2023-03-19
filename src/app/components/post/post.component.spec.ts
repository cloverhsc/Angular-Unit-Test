import { ComponentFixture, TestBed } from '@angular/core/testing';
import { first } from 'rxjs';
import { Post } from '../posts/models/Post';
import { PostComponent } from './post.component';

describe('Post Component', () => {

  let fixture: ComponentFixture<PostComponent>;
  let component: PostComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostComponent]
    });

    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
  })

  it('should create post component using TestBed', () => {
    expect(component).toBeDefined();
  });

  it('should raise an event when the delete post is clicked', () => {

    const post: Post = { id: 1, title: 'Test Title', body: 'Test Body' };
    component.post = post;
    component.delete.pipe(first()).subscribe((delPost: Post) => {
      expect(delPost).toBe(post);
    })
    component.onDeletePost(new MouseEvent('click'));
  })
})
