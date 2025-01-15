import { PostRequest } from "../posts/interactors/requests/PostRequest.ts"
import Post from "../posts/models/Post.ts"
import PostRepository from "../posts/repositories/PostRepository.ts"
import PostCollection from "../posts/collections/PostCollection.ts"

class FakePostRepository extends PostRepository {
  public async create(postRequest: PostRequest) {
    return new Post({
      id: 1,
      ...postRequest,
    })
  }

  public async update(post: Post, postRequest: PostRequest) {
    return new Post({
      id: post.id,
      ...postRequest,
    })
  }

  public async find(postId: number) {
    return new Post({
      id: postId,
      title: "Laravel Authentication",
      description: "How to implement authentication in Laravel.",
      websiteId: 1,
    })
  }

  public async all(websiteId: number) {
    return new PostCollection([
      new Post({
        id: 1,
        websiteId: websiteId,
        title: "Laravel Authentication",
        description: "How to implement authentication in Laravel.",
      }),
      new Post({
        id: 2,
        websiteId: websiteId,
        title: "Laravel Middleware",
        description: "Understanding middleware in Laravel.",
      }),
    ])
  }
}

export default FakePostRepository
