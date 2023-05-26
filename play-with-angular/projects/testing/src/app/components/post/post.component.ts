import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input()
  post!: Post

  @Output()
  delete = new EventEmitter<Post>()

  handleDelete(event: MouseEvent) {
    event.preventDefault();
    this.delete.emit(this.post);
  }

}
