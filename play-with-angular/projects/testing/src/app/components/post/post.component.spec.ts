import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Post } from '../../models/post';

import { PostComponent } from './post.component';

describe('PostComponent', () => {

  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(PostComponent);  // <app-post>
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should render post-title in anchor element", () => {
    const post = {
      id: 1,
      title: "Hello World",
      body: "This is a test post"
    }
    component.post = post;
    fixture.detectChanges()
    const postDivElement: HTMLElement = fixture.nativeElement
    const aElement = postDivElement.querySelector('a')
    expect(aElement?.textContent).toEqual(post.title);
  })

  it("should raise a event when the delet is clicked", () => {
    const post = {
      id: 1,
      title: "Hello World",
      body: "This is a test post"
    }
    component.post = post;
    component.delete.subscribe((post: Post) => {
      expect(post).toEqual(post);
    })
    component.handleDelete(new MouseEvent('click'))
  })



});
