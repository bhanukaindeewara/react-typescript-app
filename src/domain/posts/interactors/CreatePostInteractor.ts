import {
  PostRequest,
  PostSchema,
} from "@/domain/posts/interactors/requests/PostRequest.ts"
import PostRepositoryContract from "@/domain/posts/contracts/PostRepositoryContract.ts"

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
