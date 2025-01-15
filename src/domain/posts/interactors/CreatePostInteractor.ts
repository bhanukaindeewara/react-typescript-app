import PostRepository from "../repositories/PostRepository.ts"
import { PostRequest, PostSchema } from "./requests/PostRequest.ts"

class CreatePostInteractor {
  constructor(protected postRepository: PostRepository) {}

  public async execute(postRequest: PostRequest) {
    this.validateRequest(postRequest)

    return await this.postRepository.create(postRequest)
  }

  protected validateRequest(postRequest: PostRequest) {
    return PostSchema.parse(postRequest)
  }
}

export default CreatePostInteractor
