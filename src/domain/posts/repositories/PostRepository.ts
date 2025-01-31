import Post from "@/domain/posts/models/Post.ts"
import PostCollection from "@/domain/posts/collections/PostCollection.ts"
import { PostRequest } from "@/domain/posts/interactors/requests/PostRequest.ts"
import Http from "@/plugins/Http.ts"
import PostRepositoryContract from "@/domain/posts/contracts/PostRepositoryContract.ts"
import { injectable } from "inversify"

@injectable()
class PostRepository implements PostRepositoryContract {
  public async create(postRequest: PostRequest) {
    const response: Response = await Http.post("/posts", postRequest)

    return await response.json()
  }

  public async update(post: Post, postRequest: PostRequest) {
    const response: Response = await Http.put(`/posts/${post.id}`, postRequest)

    return await response.json()
  }

  public async find(postId: number): Promise<Post> {
    const response: Response = await Http.get(`/posts/${postId}`)

    const post: Post = await response.json()

    return new Post(post)
  }

  public async all(websiteId: number): Promise<PostCollection> {
    const response: Response = await Http.get(`/posts?websiteId=${websiteId}`)

    const posts: Post[] = await response.json()

    return new PostCollection(this.mapPosts(posts))
  }

  protected mapPosts(posts: Post[]): Post[] {
    return posts.map((post: Post): Post => new Post(post))
  }
}

export default PostRepository
