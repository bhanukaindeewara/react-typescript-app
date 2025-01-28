import { PostRequest } from "../interactors/requests/PostRequest.ts"
import Post from "../models/Post.ts"
import PostCollection from "../collections/PostCollection.ts"
import PostRepositoryContract from "../contracts/PostRepositoryContract.ts"

class FakePostRepository implements PostRepositoryContract {
  private posts: Post[]

  constructor(posts: Post[] = []) {
    this.posts = posts
  }

  public async create(postRequest: PostRequest) {
    const post: Post = new Post({
      id: this.posts.length + 1,
      ...postRequest,
    })

    this.posts.push(post)

    return Promise.resolve(post)
  }

  public async update(post: Post, postRequest: PostRequest) {
    const updatedPost: Post = new Post({
      id: post.id,
      ...postRequest,
    })

    this.posts = this.posts.map((post) =>
      post.id === updatedPost.id ? updatedPost : post,
    )

    return Promise.resolve(updatedPost)
  }

  public async find(postId: number): Promise<Post | undefined> {
    return Promise.resolve(this.posts.find((post: Post) => post.id === postId))
  }

  public async all(websiteId: number): Promise<PostCollection> {
    const posts: Post[] = this.posts.filter(
      (post: Post) => post.websiteId === websiteId,
    )

    return Promise.resolve(new PostCollection(this.mapPosts(posts)))
  }

  protected mapPosts(posts: Post[]): Post[] {
    return posts.map((post: Post): Post => new Post(post))
  }

  public assertPostsContain(post: Post) {
    return this.posts.includes(post)
  }
}

export default FakePostRepository
