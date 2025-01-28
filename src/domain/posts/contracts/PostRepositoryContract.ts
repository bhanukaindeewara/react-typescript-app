import { PostRequest } from "../interactors/requests/PostRequest.ts"
import Post from "../models/Post.ts"
import PostCollection from "../collections/PostCollection.ts"

interface PostRepositoryContract {
  create(postRequest: PostRequest): Promise<any>

  update(post: Post, postRequest: PostRequest): Promise<any>

  find(postId: number): Promise<Post | undefined>

  all(websiteId: number): Promise<PostCollection>
}

export default PostRepositoryContract
