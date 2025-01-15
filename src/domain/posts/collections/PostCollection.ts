import Post from "../models/Post.ts"

class PostCollection {
  public posts: Post[]

  constructor(posts: Post[] = []) {
    this.posts = posts.map((post: Post): Post => new Post(post))
  }

  public all(): Post[] {
    return this.posts
  }

  public length(): number {
    return this.posts.length
  }
}

export default PostCollection
