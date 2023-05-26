import { Component } from '@angular/core';
import { Post } from '../../models/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  posts!: Post[]

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe({
      next: posts => {
        this.posts = posts
      }
    });
  }

  delete(post: Post) {
    this.posts = this.posts.filter(p => p.id !== post.id);
    this.postsService.deletePost(post.id).subscribe()
  }

}
