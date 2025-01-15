import Post from "../models/Post.ts"
import PostRepository from "../repositories/PostRepository.ts"
import { PostRequest, PostSchema } from "./requests/PostRequest.ts"

class UpdatePostInteractor {
  constructor(protected postRepository: PostRepository) {}

  public async execute(post: Post, postRequest: PostRequest) {
    this.validateRequest(postRequest)

    return await this.postRepository.update(post, postRequest)
  }

  protected validateRequest(postRequest: PostRequest) {
    return PostSchema.parse(postRequest)
  }
}

export default UpdatePostInteractor
