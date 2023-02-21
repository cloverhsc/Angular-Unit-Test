import { first } from 'rxjs';
import { Post } from '../posts/models/Post';
import { PostComponent } from './post.component';

describe('Post Component', () => {
  it('should raise an event when the delete post is clicked', () => {
    const post: Post = { id: 1, title: 'Test Title', body: 'Test Body' };
    const component = new PostComponent();
    component.post = post;
    component.delete.pipe(first()).subscribe((delPost: Post) => {
      expect(delPost).toBe(post);
    })
    component.onDeletePost(new MouseEvent('click'));
  })
})
