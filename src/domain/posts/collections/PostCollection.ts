import Post from "@/domain/posts/models/Post.ts"

class PostCollection {
  public posts: Post[]

  constructor(posts: Post[] = []) {
    this.posts = posts
  }

  public all(): Post[] {
    return this.posts
  }

  public length(): number {
    return this.posts.length
  }
}

export default PostCollection
