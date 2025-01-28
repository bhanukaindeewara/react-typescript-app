import { PostRequest, PostSchema } from "./requests/PostRequest.ts"
import PostRepositoryContract from "../contracts/PostRepositoryContract.ts"

class CreatePostInteractor {
  constructor(protected postRepository: PostRepositoryContract) {}

  public async execute(postRequest: PostRequest) {
    this.validateRequest(postRequest)

    return await this.postRepository.create(postRequest)
  }

  protected validateRequest(postRequest: PostRequest) {
    return PostSchema.parse(postRequest)
  }
}

export default CreatePostInteractor
