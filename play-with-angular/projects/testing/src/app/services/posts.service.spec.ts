import { TestBed } from "@angular/core/testing";
import { PostsService } from "./posts.service";

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

describe("Posts Servce", () => {

  let POSTS = [
    {
      id: 1,
      title: "Post 1",
      body: "Post 1 content"
    },
    {
      id: 2,
      title: "Post 2",
      body: "Post 2 content"
    },
    {
      id: 3,
      title: "Post 3",
      body: "Post 3 content"
    }
  ]
  let postsService: PostsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostsService],
    })
    postsService = TestBed.inject(PostsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it("should get all posts", (done: DoneFn) => {
    postsService.getPosts()
      .subscribe(response => {
        expect(response).toEqual(POSTS);
        done();
      });
    const request = httpTestingController.expectOne(
      'https://jsonplaceholder.typicode.com/posts'
    )
    request.flush(POSTS);
    expect(request.request.method).toEqual('GET');
  })

  it("should get post by id", (done: DoneFn) => {
    postsService.getPost(1)
      .subscribe(response => {
        expect(response).toEqual(POSTS[0]);
        done();
      });
    const request = httpTestingController.expectOne(
      'https://jsonplaceholder.typicode.com/posts/1'
    )
    request.flush(POSTS[0]);
    expect(request.request.method).toEqual('GET');
  })


})